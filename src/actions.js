import { ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST, LOAD_POSTS, LOAD_FULL_POST } from "./actionTypes"
import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";
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
        console.log(data)
        dispatch(gotPost(data))
    }

}

function gotPost(post) {
    return { type: LOAD_FULL_POST, payload: post }
}