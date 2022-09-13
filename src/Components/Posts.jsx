import { useState } from "react";
import { useEffect } from 'react';
import Post from './Post'

function Posts() {

  const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  //Fetch Base Images From Database
  useEffect(() => {
    console.log("in use effect")
    fetchNewPosts(20)
  }, [])

  //Fetch New Posts and Update Posts
  async function fetchNewPosts(limit) {
    console.log("fetching posts...")
    const res = await fetch(`http://localhost:3000/api/v1/posts/?page=${pageNumber}&limit=${limit}`)
    const data = await res.json()

    console.log(data)
    console.log(data.posts.length)

    if (data.posts.len === 0) {
      console.log("No Entries Left")
    } 
    else {
    let newPosts = data.posts.map(x => {
      let object = x
      return object
    })

    setPosts(prevPosts => [...prevPosts, ...newPosts])
    setPageNumber(prevPageNumber => prevPageNumber + 1)
    
  }
  }

  //Add Scroll Event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  //Check Scroll Event
  function handleScroll(e) {
    if((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight){
      fetchNewPosts(20)
    }
  }

  //Render
  return (
    <div class="post-container">
      {posts.map((post) => <Post object={post}/>)}
    </div>
  )

}

export default Posts