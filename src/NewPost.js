import { useDispatch } from "react-redux"
import { addPost } from "./actions"
import Form from "./Form"

const NewPost = () => {
    const dispatch = useDispatch()

    const handleSubmit = (data) => {
        dispatch(addPost(data))
    }

    return (
        <Form submit={handleSubmit} />
    )
}

export default NewPost