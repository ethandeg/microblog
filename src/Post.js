import {useParams, useHistory} from "react-router-dom"
import {useContext, useEffect, forceUpdate} from "react"
import PostContext from "./contexts/postContext"
import Form from "./Form"
const Post = () => {
    const history = useHistory()
    const {posts,removePost, editPost} = useContext(PostContext)
    const {postId} = useParams()
    const post = posts.filter(post => post.id === postId)[0]
    let edit = false
    function remove(e) {
        e.preventDefault()
        removePost(postId)
        history.push('/')
    }

    const formChange = () => {
        edit === false ? edit = true : edit = false
    }

    return (
        <>
        <div className="col-12">
            {post ?
                         <div className="card" style={{paddingRight: "4rem"}}>
                         <div className="card-body">
                             <i className="fas fa-times text-danger" onClick={remove} style={{display: "inline-block", marginLeft: "1rem", float:"right", fontSize:"2rem", cursor: "pointer"}}></i>
                             <i className="far fa-edit text-primary" onClick={formChange}style={{float:"right", fontSize:"2rem" ,display: "inline-block", cursor: "pointer"}}></i>
                             <h5 className="card-title">{post.title}</h5>
                             <h6 className="card-subtitle mb-2 text-muted">{post.description}</h6>
                             <p className="card-text">{post.body}</p>
                         </div>
                         </div>
                     
             :
             <h1>No posts, sorry!</h1>
             }
        </div>
        {edit 
        ?
        <Form submit={editPost} id={post.id}/>
        :
        null
        }
        </>
    )
}

export default Post