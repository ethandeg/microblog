import { useParams, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Form from "./Form"
import Comment from "./Comment"
import NewCommentForm from "./NewCommentForm"
import { removePost, editPost, loadFullPost, vote } from "./actions"
const Post = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { postId } = useParams()
    const posts = useSelector(store => store.posts)
    let post = posts.find(post => post.id === Number(postId)) ? posts.find(post => post.id === Number(postId)) : posts.find(post => post.id === postId)
    useEffect(() => {
            dispatch(loadFullPost(postId))
    }, [post, dispatch, postId])
    const [isFalse, setFalse] = useState(false)


    function remove(e) {
        e.preventDefault()
        dispatch(removePost(post))
        history.push('/')
    }



    const formChange = () => {
        setFalse(isFalse === false ? true : false)
    }


    function edit(data) {
        data.id = postId
        dispatch(editPost(data))
    }



    return (
        <>

            {post && !isFalse ?
                <div className="col-12">
                    <div className="card" style={{ paddingRight: "4rem" }}>
                        <div className="card-body">
                            <i className="fas fa-times text-danger" onClick={remove} style={{ display: "inline-block", marginLeft: "1rem", float: "right", fontSize: "2rem", cursor: "pointer" }}></i>
                            <i className="far fa-edit text-primary" onClick={formChange} style={{ float: "right", fontSize: "2rem", display: "inline-block", cursor: "pointer" }}></i>
                            <h5 style={{ textTransform: "uppercase" }} className="card-title fs-2">{post.title}</h5>
                            <h6 className="card-subtitle my-4 text-muted fs-4">{post.description}</h6>
                            <p className="card-text fs-5">{post.body}</p>
                            <div className="card-footer">
                                <span className="text-primary fs-4">{post.votes}</span>
                                <i onClick={() => dispatch(vote(post.id, "up"))} className="far fa-thumbs-up text-success fs-4 ml-3"></i>
                                <i onClick={() => dispatch(vote(post.id, "down"))} className="far fa-thumbs-down text-danger fs-4"></i>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary my-3" style={{ marginRight: "2rem" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">{post.comments.length} Comments</button>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body mb-3">
                            {post.comments.map(comment => (
                                <Comment comment={comment} postId={postId} key={comment.id} />
                            ))}
                        </div>
                    </div>

                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addCollapse" aria-expanded="false" aria-controls="addCollapse">
                        Add Comment
                    </button>

                    <div className="collapse" id="addCollapse">
                        <div className="card card-body">
                            <NewCommentForm postId={postId} />
                        </div>
                    </div>
                </div>

                :
                <i className="far fa-edit text-primary" onClick={formChange} style={{ float: "right", fontSize: "2rem", display: "inline-block", cursor: "pointer" }}></i>
            }

            {isFalse
                ?
                <Form submit={edit} id={post.id} title={post.title} description={post.description} body={post.body} />

                :
                null
            }
        </>
    )
}

export default Post