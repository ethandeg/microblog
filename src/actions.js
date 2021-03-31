import { ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST, LOAD_POSTS, LOAD_FULL_POST } from "./actionTypes"
import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";
export function addComment(payload) {
    return {
        type: ADD_COMMENT,
        payload
    }
}

export function addPost(data) {
    return async function (dispatch) {
        const res = await axios.post(`${BASE_URL}/posts`, data)
        console.log(res)
        if (res.status === 201) {
            dispatch(newPost(res.data))
        }

    }
}

function newPost(payload) {
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

// export function removePost(payload) {
//     return {
//         type: REMOVE_POST,
//         payload
//     }
// }
export function removePost(data) {
    return async function (dispatch) {
        const res = await axios.delete(`${BASE_URL}/posts/${data.id}`)
        console.log(res)
        dispatch(deletePost(data))
    }
}

function deletePost(payload) {
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

export function loadPosts() {
    return async function (dispatch) {
        const { data } = await axios.get(`${BASE_URL}/posts`)
        dispatch(gotPosts(data))
    }
}

function gotPosts(posts) {
    return { type: LOAD_POSTS, payload: posts }
}

export async function consolePosts() {
    let res = await axios.get(`${BASE_URL}/posts/1`)
    console.log(res)
}

export function loadFullPost(id) {
    return async function (dispatch) {
        const { data } = await axios.get(`${BASE_URL}/posts/${id}`)
        dispatch(gotPost(data))
    }

}

function gotPost(post) {
    return { type: LOAD_FULL_POST, payload: post }
}