import {Link} from "react-router-dom"
const PostPreview = ({post}) => {
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-body">
                    <Link style={{textDecoration: "none", textTransform: "uppercase"}} to={`/${post.id}`}><h5 className="card-title mb-3">{post.title}</h5></Link>
                    <h6 className="card-subtitle mb-2 text-muted">{post.description}</h6>
                </div>
            </div>
        </div>
    )
}


export default PostPreview