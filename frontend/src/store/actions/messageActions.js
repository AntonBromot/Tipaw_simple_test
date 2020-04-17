export const GET_ALL_REQUEST = "GET_ALL_REQUEST";
export const GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
export const CREATE_REQUEST = "CREATE_REQUEST";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const REQUEST_FAILTURE = "REQUEST_FAILTURE";

export const getAllMessages = payload => dispatch => dispatch({ type: GET_ALL_REQUEST, payload });

export const createMessage = payload => dispatch => dispatch({ type: CREATE_REQUEST, payload });

export const deleteMessage = payload => dispatch => dispatch({ type: DELETE_REQUEST, payload });

