/*  Be sure to import in all of the action types from `../actions`*/
/* Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }*/
/*  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`. */
import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL, 
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAIL,
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurf: true,
        error: null
      };
    
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurf: false,
        smurfs: [...state.smurfs, ...action.payload]        
      };

    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurf: false,
        error: action.payload
      };

    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true,
        error: null,
      };

    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        addingSmurf: false
      };
    case ADD_SMURFS_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }

    case DELETE_SMURFS_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        smurf: state.smurfs.filter(smurf => smurf.id !== action.payload),
        deletingSmurf: false,
        error: null
      }
    case DELETE_SMURFS_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };

      default:
        return state;
  }

}
