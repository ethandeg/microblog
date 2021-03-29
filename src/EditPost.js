import {Link} from "react-router-dom"
const EditPost = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className='card-title text-center'>Add a New Post</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input className="form-control" type ="text" id = "title" name = "title" value = {formData.title} onChange={handleChange} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input className="form-control" type ="text" id = "description" name = "description" value = {formData.description} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body:</label>
                            <textarea className="form-control" id="body" name="body" value={formData.body} onChange={handleChange}></textarea>                
                        </div>
                        
                        <button className="btn btn-md btn-primary mt-3">Save</button>
                        <Link to="/" className="btn btn-md btn-secondary mt-3 mx-3">Cancel</Link>
                    </form>
                </div>

            </div>
        </div>
}

export default EditPost