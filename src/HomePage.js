import PostList from "./PostList"
const HomePage = ({posts}) => {
    return (
        <div className="container">
            <h1 className="text-center display-3 text-info">Check Out our Microblogs</h1>
            <PostList posts={posts} />
        </div>
    )
}

export default HomePage