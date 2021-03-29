import PostList from "./PostList"
import {useContext} from "react"
import PostContext from "./contexts/postContext"
const HomePage = () => {
    const {posts} = useContext(PostContext)
    return (
        <div className="container">
            <h1 className="text-center display-3 text-info">Check Out our Microblogs</h1>
            <PostList posts={posts} />
        </div>
    )
}

export default HomePage