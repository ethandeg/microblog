import {useContext} from "react"
import {Link, useHistory} from 'react-router-dom'
import PostContext from "./contexts/postContext"
import Form from "./Form"

const NewPost = () => {
    const {addPost} = useContext(PostContext)

    const handleSubmit = (data) => {
        addPost(data)
    }

    return (
        <Form submit={handleSubmit}/>
    )
}

export default NewPost