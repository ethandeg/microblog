import PostPreview from "./PostPreview"
import { useSelector } from "react-redux"
const PostList = () => {
    const posts = useSelector(store => store.posts)

    return (
        <>
            <h1>Post List</h1>
            <div className="row">
                {posts.map(post => (
                    <PostPreview post={post} key={post.id} />
                ))}
            </div>
        </>
    )
}

export default PostList