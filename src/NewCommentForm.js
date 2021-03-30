import { useState } from "react"
import { useDispatch } from "react-redux"
import { addComment } from "./actions"

const NewCommentForm = ({ postId }) => {
    const INITIAL_STATE = { text: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const dispatch = useDispatch()
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.postId = postId
        dispatch(addComment(formData))
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-3">
                <div className="input-group">
                    <input style={{ border: "none" }} className="form-control" type="text" id="text" name="text" value={formData.text} onChange={handleChange} placeholder="Comment Text" />
                    <button className="btn btn-sm btn-primary">+</button>
                </div>
            </div>
        </form>
    )
}

export default NewCommentForm