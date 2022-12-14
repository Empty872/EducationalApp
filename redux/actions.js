export const SET_SUBJECTS_LIST = 'SET_SUBJECTS_LIST'
export const SET_ROLE = 'SET_ROLE'
export const setSubjectsList = subjectsList => dispatch => {
    dispatch({
        type: SET_SUBJECTS_LIST,
        payload: subjectsList
    });
};
export const setRole = role => dispatch => {
    dispatch({
        type: SET_ROLE,
        payload: role
    });
};