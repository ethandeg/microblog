import PostPreview from "./PostPreview"
const PostList = ({posts}) => {


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