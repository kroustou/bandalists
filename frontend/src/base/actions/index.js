export const createMessage = (dispatch, msg) => {
    dispatch({type: 'MESSAGE', message: msg})
    setTimeout(() => {
        dispatch({type: 'MESSAGE', message: undefined})
    }, 5000)
}
