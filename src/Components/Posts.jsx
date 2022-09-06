import { useState } from "react";
import { useEffect } from 'react';
import Post from './Post'

function Posts() {

  const [posts, setPosts] = useState([])

  //Fetch Base Images From Database
  useEffect(() => {
    fetchNewPosts()
    console.log("fetched posts")
  }, [])

  //Fetch New Posts and Update Posts
  async function fetchNewPosts() {
    const res = await fetch('http://localhost:3000/api/v1/posts')
    const data = await res.json()

    let newPosts = data.post.map(x => {
      let object = x.imageURL
      return object
    })

    setPosts(prevPosts => [...prevPosts, ...newPosts])
  }

  //Add Scroll Event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  //Check Scroll Event
  function handleScroll(e) {
    if((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight){
      console.log("THIS IS BOTTOMED OUT: " + window.scrollY)
      fetchNewPosts()
    }
    console.log(window.scrollY)
      
  }

  //Render
  return (
    <div class="post-container">
      {posts.map((post) => <Post url={post}/>)}
    </div>
  )

}

export default Posts