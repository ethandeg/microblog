import {useParams, useHistory} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import PostContext from "./contexts/postContext"
import Form from "./Form"
import Comment from "./Comment"
const Post = () => {
    const history = useHistory()
    const {posts,removePost, editPost} = useContext(PostContext)
    const {postId} = useParams()
    const post = posts.filter(post => post.id === postId)[0]
    const [isFalse, setFalse] = useState(false)
    function remove(e) {
        e.preventDefault()
        removePost(postId)
        history.push('/')
    }

    const formChange = () => {
        setFalse(isFalse === false ? true : false)
    }


    return (
        <>
        
            {post && !isFalse?
            <div className="col-12">
                         <div className="card" style={{paddingRight: "4rem"}}>
                         <div className="card-body">
                             <i className="fas fa-times text-danger" onClick={remove} style={{display: "inline-block", marginLeft: "1rem", float:"right", fontSize:"2rem", cursor: "pointer"}}></i>
                             <i className="far fa-edit text-primary" onClick={formChange}style={{float:"right", fontSize:"2rem" ,display: "inline-block", cursor: "pointer"}}></i>
                             <h5 style={{textTransform: "uppercase"}}className="card-title fs-2">{post.title}</h5>
                             <h6 className="card-subtitle my-4 text-muted fs-4">{post.description}</h6>
                             <p className="card-text fs-5">{post.body}</p>
                         </div>
                         </div>
                         <button className="btn btn-primary my-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">{post.comments.length} Comments</button>
                         <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                {post.comments.map(comment => (
                                    <Comment comment={comment} postId={postId} key={comment.id}/>
                                ))}
                            </div>
</div>
          
            </div>
                
             :
             <i className="far fa-edit text-primary" onClick={formChange}style={{float:"right", fontSize:"2rem" ,display: "inline-block", cursor: "pointer"}}></i>
             }
        
        {isFalse 
        ?
        <Form submit={editPost} id={post.id} title={post.title} description={post.description} body={post.body}/>
        :
        null
        }
        </>
    )
}

export default Post