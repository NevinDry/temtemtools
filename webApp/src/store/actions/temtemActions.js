export const GET_TEMTEM_FETCHING = 'GET_TEMTEM_FETCHING';
export const GET_TEMTEM_SUCCESS = 'GET_TEMTEM_SUCCESS';
export const GET_TEMTEM_ERROR = 'GET_TEMTEM_ERROR';

export const getTemtem = (temtemId) => {
    console.log(temtemId);
    //   return (dispatch, getState, getFirebase) => {

    //     dispatch({
    //       type: GET_TEMTEM_FETCHING
    //     })
    //   };

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log("yo2");
        dispatch({ type: 'GET_TEMTEM_FETCHING' });
        firestore.collection('temtems').doc(temtemId).get().then((doc) => {
            const data = doc.data();
            dispatch({ type: 'GET_TEMTEM_SUCCESS', data: data });
        }).catch((err) => {
            dispatch({ type: 'GET_TEMTEM_ERROR', err: err });
        }
        );
    }
}