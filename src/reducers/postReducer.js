import { ADD_POST, ADD_COMMENT, REMOVE_POST, REMOVE_COMMENT, EDIT_POST, LOAD_POSTS, LOAD_FULL_POST } from "../actionTypes"
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = { posts: [], titles: [] }
function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, { ...action.payload, comments: [] }], titles: [...state.titles, { id: action.payload.id, title: action.payload.title, description: action.payload.description }] }

        case REMOVE_POST:

            return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id), titles: state.titles.filter(title => title.id !== action.payload.id) }

        case ADD_COMMENT:
            console.log(action)
            const post = state.posts.find(p => p.id === action.postId)
            console.log(post)
            post.comments = [...post.comments, action.payload]
            return { ...state, posts: [...state.posts, post] }

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
            const titles = state.titles.map(t => {
                if(t.id === action.payload.id){
                    return {...t, description, title}
                }
                return t
            })

            return { ...state, titles: titles, posts: posts }

        case LOAD_POSTS:
            return { ...state, titles: action.payload }

        case LOAD_FULL_POST:
            return { ...state, posts: [...state.posts, action.payload] }

        default:
            return state
    }
}

export default postReducer