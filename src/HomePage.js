import PostList from "./PostList"
import { useSelector } from "react-redux"
import {useState} from "react"
const HomePage = () => {
    const posts = useSelector(state => state.titles)
    posts.sort(compare)
    const [p] = useState(posts)


    function compare(a,b){
        if(a.votes > b.votes) return -1
        if(a.votes < b.votes) return 1
        return 0
    }
    return (
        <div className="container">
            <h1 className="text-center display-3 text-info">Check Out our Microblogs</h1>
            <PostList posts={p} />
        </div>
    )
}

export default HomePage