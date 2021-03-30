import { useDispatch } from "react-redux"
import { removeComment } from "./actions"
const Comment = ({ comment }) => {
    const dispatch = useDispatch()
    const deleteComment = () => {
        dispatch(removeComment(comment))
    }
    return (
        <p className="fs-4" style={{ paddingRight: "4rem" }}>
            <i className="fas fa-times text-danger" onClick={deleteComment} style={{ display: "inline-block", marginLeft: "1rem", float: "right", fontSize: "2rem", cursor: "pointer" }}></i>
            {comment.text}
        </p>
    )
}

export default Comment