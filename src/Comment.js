import {useContext} from "react"
import PostContext from "./contexts/postContext"
const Comment = ({comment, postId}) => {
    const {removeComment} = useContext(PostContext)
    const deleteComment = () => {
        removeComment(postId, comment.id)
    }
    return (
        <p className="fs-4" style={{paddingRight: "4rem"}}>
            <i onClick={deleteComment} className="fas fa-times text-danger" style={{display: "inline-block", marginLeft: "1rem", float:"right", fontSize:"2rem", cursor: "pointer"}}></i>
            {comment.text}
        </p>
    )
}

export default Comment