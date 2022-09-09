import { useState } from "react"
import {useNavigate} from 'react-router-dom';

import FollowingProfile from "./FollowingProfile";

function FollowingPanel() {

  const navigation = useNavigate()

  const [topic, setTopic] = useState("All")

  function tagButtonClicked(event) {
    setTopic(event.target.innerText)
  }

  function navigateToHome() {
    navigation('/')
  }

  return (
    <div class="following-panel">
      <div class="following-panel-header flex">
        <button class="following-panel-button" onClick={navigateToHome}>Back</button>
        <h1>Following Feed</h1>
        <button class="following-panel-button" onClick={navigateToHome}>Done</button>
      </div>

      <div class="following-panel-topics flex">
        <button class={topic==="All" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>All</button>
        <button class={topic==="Trending" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>Trending</button>
        <button class={topic==="Animals" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>Animals</button>
        <button class={topic==="Architecture" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>Architecture</button>
        <button class={topic==="Art" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>Art</button>
        <button class={topic==="Beauty" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>Beauty</button>
        <button class={topic==="More" ? "topic-selected" : "topic"} onClick={tagButtonClicked}>More</button>
      </div>

      <div class="following-panel-profiles">
        <FollowingProfile />
      </div>
    </div>
  )
}

export default FollowingPanel