import { ADD_POST, ADD_COMMENT, REMOVE_POST, REMOVE_COMMENT, EDIT_POST, LOAD_POSTS, LOAD_FULL_POST } from "../actionTypes"
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = { posts: [], comments: [], titles: [] }
function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, { ...action.payload, id: uuidv4() }] }
        // //create a copy
        // //two properties of the same name will cause issue
        // //return the new state
        case REMOVE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }

        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, { ...action.payload, id: uuidv4() }] }

        case REMOVE_COMMENT:
            return { ...state, comments: state.comments.filter(comment => comment.id !== action.payload.id) }

        case EDIT_POST:
            const { description, body, title } = action.payload
            const posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return { ...post, description, body, title }
                }
                return post
            })
            return { ...state, posts }

        case LOAD_POSTS:
            return { ...state, titles: action.payload }

        case LOAD_FULL_POST:
            return { ...state, posts: [...posts, action.payload] }

        default:
            return state
    }
}

export default postReducer