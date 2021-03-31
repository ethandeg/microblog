import {Link} from "react-router-dom"
import {vote} from "./actions"
import {useDispatch} from "react-redux"

const PostPreview = ({post}) => {
    const dispatch = useDispatch()
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-body">
                    <Link style={{textDecoration: "none", textTransform: "uppercase"}} to={`/${post.id}`}><h5 className="card-title mb-3">{post.title}</h5></Link>
                    <h6 className="card-subtitle mb-2 text-muted">{post.description}</h6>
                    <div className="card-footer">
                    <span className="text-primary fs-4">{post.votes}</span>
                    <i onClick={() => dispatch(vote(post.id, "up"))} className="far fa-thumbs-up text-success fs-4 ml-3"></i>
                    <i onClick={() => dispatch(vote(post.id, "down"))} className="far fa-thumbs-down text-danger fs-4"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostPreview