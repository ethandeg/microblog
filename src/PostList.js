import PostPreview from "./PostPreview"
import {useContext} from "react"
import PostContext from "./contexts/postContext"
const PostList = () => {
    const {posts} = useContext(PostContext)

    return (
        <>
        <h1>Post List</h1>
        <div className="row">
            {posts.map(post => (
                <PostPreview post={post} key={post.id}/>
            ))}
        </div>
            </>
    )
}

export default PostList