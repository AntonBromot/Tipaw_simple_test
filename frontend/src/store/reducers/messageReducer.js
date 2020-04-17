import { GET_ALL_REQUEST, GET_ALL_SUCCESS, REQUEST_FAILTURE, CREATE_REQUEST,
    DELETE_SUCCESS, CREATE_SUCCESS } from "../actions/messageActions";

const initialStore = {
    messages: [],
    fetching: false,
    error: null
}

export default function ( state=initialStore, { type, payload }) {
    switch (type) {
        case GET_ALL_REQUEST:
        case CREATE_REQUEST:
            return {  ...state, fetching: true, error: null };
        case GET_ALL_SUCCESS:
        case CREATE_SUCCESS:
        case DELETE_SUCCESS:
            return { ...state, messages: payload, error: null, fetching: false }
        case REQUEST_FAILTURE:
            return { ...state, error: payload, fetching: false }
        default: return { ...state, error: null };
    }
}
