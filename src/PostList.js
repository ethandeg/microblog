import PostPreview from "./PostPreview"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "./actions"
import { useEffect } from "react"
const PostList = () => {
    const titles = useSelector(store => store.titles)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])
    return (
        <>
            <h1>Post List</h1>
            <div className="row">
                {titles ? titles.map(post => (
                    <PostPreview post={post} key={post.id} />
                )) : null}
            </div>
        </>
    )
}

export default PostList