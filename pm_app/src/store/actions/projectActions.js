export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call t database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}