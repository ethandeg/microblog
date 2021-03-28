import {useState} from "react"


const NewPost = () => {
    const INITIAL_STATE = {title:'', description: '', body: ''}
    const [formData, setFormData] = useState({INITIAL_STATE})
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <>
        <form>
            <label htmlFor="title">Title:</label>
                <input type ="text" id = "title" name = "title" value = {formData.title} onChange={handleChange} />
            <label htmlFor="description">Description:</label>
                <input type ="text" id = "description" name = "description" value = {formData.description} onChange={handleChange} />
            <label htmlFor="body">Body:</label>
                <textarea id="body" name="body" value={formData.body} onChange={handleChange}></textarea>
                <button>Save</button>
                <button>Cancel</button>
        </form>
        </>
    )
}

export default NewPost