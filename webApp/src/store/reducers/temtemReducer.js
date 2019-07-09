import { GET_TEMTEM_FETCHING, GET_TEMTEM_SUCCESS, GET_TEMTEM_ERROR } from '../actions/temtemActions';

const initState = {
   loading: true,
   temtem: null,
   error: null
};

const temtemReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TEMTEM_FETCHING:
           return { ...state, temtem: null, loading: true };
        case GET_TEMTEM_SUCCESS:
           return { ...state, temtem: action.data, loading: false };
        case GET_TEMTEM_ERROR:
           return { ...state, error: action.error, loading: false };
        default:
           return state;
    }
}

export default temtemReducer;