import {  GET, POST, DELETE } from '../constants';
import { callApi } from "../helpers";

export const getMessages = data => callApi({ params: GET, route: '/message'});

export const createMessage = data => callApi({ params: POST, route: '/message', data});

export const deleteMessage = data => callApi({ params: DELETE, route: '/message', identificator: `/${data._id}` });
