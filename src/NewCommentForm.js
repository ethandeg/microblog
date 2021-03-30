import { useState, useContext } from "react"
import PostContext from "./contexts/postContext"

const NewCommentForm = ({ postId }) => {
    const INITIAL_STATE = { text: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const { addComment } = useContext(PostContext)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(formData, postId)
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="text" name="text" value={formData.text} onChange={handleChange} placeholder="Comment Text" />
            <button className="btn btn-sm btn-primary">+</button>
        </form>
    )
}

export default NewCommentForm