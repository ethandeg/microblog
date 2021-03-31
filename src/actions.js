import { VOTE, ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST, LOAD_POSTS, LOAD_FULL_POST } from "./actionTypes"
import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";


export function addComment(d, postId) {
    return async function(dispatch){
        const {data} = await axios.post(`${BASE_URL}/posts/${postId}/comments`, d)
        dispatch(gotComment(data, postId))
    }
}

    function gotComment(payload, postId){

    return {
        type: ADD_COMMENT,
        payload,
        postId: Number(postId)
    }
}

export function addPost(data) {
    return async function (dispatch) {
        const res = await axios.post(`${BASE_URL}/posts`, data)
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

export function removeComment(d, postId){
    return async function(dispatch){
        await axios.delete(`${BASE_URL}/posts/${postId}/comments/${d.id}`)
        dispatch(deleteComment(d, postId))
    }
}

 function deleteComment(payload, postId) {
    return {
        type: REMOVE_COMMENT,
        payload,
        postId: Number(postId)
    }
}


export function removePost(data) {
    return async function (dispatch) {
        await axios.delete(`${BASE_URL}/posts/${data.id}`)
        dispatch(deletePost(data))
    }
}

function deletePost(payload) {
    return {
        type: REMOVE_POST,
        payload
    }
}

export function editPost(data){
    return async function(dispatch) {
        const res = await axios.put(`${BASE_URL}/posts/${data.id}`, data)
        dispatch(changePost(res.data))
    }
}



    function changePost(payload) {
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



export function loadFullPost(id) {
    return async function (dispatch) {
        const { data } = await axios.get(`${BASE_URL}/posts/${id}`)
        dispatch(gotPost(data))
    }

}


function gotPost(post) {
    return { type: LOAD_FULL_POST, payload: post }
}


export function vote(id, direction){
    return async function(dispatch){
        const {data} = await axios.post(`${BASE_URL}/posts/${id}/vote/${direction}`)
        dispatch(gotVote(data, id)) 
    }

}

function gotVote(payload, postId){
    return {
        type: VOTE,
        payload,
        postId: Number(postId)
    }
}
