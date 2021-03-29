import {useParams} from "react-router-dom"
const Post = ({posts, removePost}) => {
    const {postId} = useParams()
    const post = posts.filter(post => post.id === postId)[0]
    return (
        <div className="col-12">
            {post ?
                         <div className="card" style={{paddingRight: "4rem"}}>
                         <div className="card-body">
                             <i className="fas fa-times text-danger" onClick={() => removePost(post.id)} style={{float:"right", fontSize:"2.5rem"}}></i>
                             <h5 className="card-title">{post.title}</h5>
                             <h6 className="card-subtitle mb-2 text-muted">{post.description}</h6>
                             <p className="card-text">{post.body}</p>
                         </div>
                         </div>
                     
             :
             <h1>No posts, sorry!</h1>
             }
        </div>
    )
}

export default Post