export const SET_SUBJECTS_LIST = 'SET_SUBJECTS_LIST'
export const SET_LESSONS_LIST = 'SET_LESSONS_LISTS'
export const SET_TOPICS_LIST = 'SET_TOPICS_LISTS'
export const setSubjectsList = subjectsList => dispatch => {
    dispatch({
        type: SET_SUBJECTS_LIST,
        payload: subjectsList
    });
};
export const setLessonsList = subjectsList => dispatch => {
    dispatch({
        type: SET_LESSONS_LIST,
        payload: subjectsList
    });
};
export const setTopicsList = subjectsList => dispatch => {
    dispatch({
        type: SET_TOPICS_LIST,
        payload: subjectsList
    });
};