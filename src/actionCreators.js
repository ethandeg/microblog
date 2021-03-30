import axios from "axios"
import {LOAD_POSTS} from "./actionTypes"
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

export function getPostsFromAPI() {
    return async function(dispatch) {
      let res = await axios.get(`${BASE_URL}/posts`);
      dispatch(gotPosts(res.data.todos));
    };
  }

  function gotPosts(posts) {
    return { type: LOAD_POSTS, posts };
  }