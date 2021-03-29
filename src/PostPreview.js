import {Link} from "react-router-dom"
const PostPreview = ({post}) => {
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.description}</h6>
                    <p className="card-text">{post.body}</p>
                    <Link to={`/${post.id}`} className="card-link">View Microblog</Link>
                </div>
            </div>
        </div>
    )
}


export default PostPreview