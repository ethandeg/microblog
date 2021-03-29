import {useParams} from "react-router-dom"
import EditPost from "./EditPost"
const Post = ({posts, removePost}) => {
    const {postId} = useParams()
    const post = posts.filter(post => post.id === postId)[0]
    let edit =  false;
    return (
        <>
        <div className="col-12">
            {post ?
                         <div className="card" style={{paddingRight: "4rem"}}>
                         <div className="card-body">
                             <i className="fas fa-times text-danger" onClick={() => removePost(post.id)} style={{display: "inline-block", marginLeft: "1rem", float:"right", fontSize:"2rem", cursor: "pointer"}}></i>
                             <i className="far fa-edit text-primary" style={{float:"right", fontSize:"2rem" ,display: "inline-block", cursor: "pointer"}}></i>
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
        <EditPost />
        :
        null
        }
        </>
    )
}

export default Post