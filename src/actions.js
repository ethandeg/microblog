import { ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST } from "./actionTypes"

export function addComment(payload) {
    return {
        type: ADD_COMMENT,
        payload
    }
}

export function addPost(payload) {
    return {
        type: ADD_POST,
        payload
    }
}

export function removeComment(payload) {
    return {
        type: REMOVE_COMMENT,
        payload
    }
}

export function removePost(payload) {
    return {
        type: REMOVE_POST,
        payload
    }
}

export function editPost(payload) {
    return {
        type: EDIT_POST,
        payload
    }
}