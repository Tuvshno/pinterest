import share from './assets/upload.png'
import more from './assets/more.png'
import arrowdown from './assets/arrowdown-white.png'

import {useNavigate} from 'react-router-dom';


function Post(props) {

  const navigate = useNavigate();

  const navigateToPin = () => {
    navigate(`/pin/${props.object._id}`)
  };

  return (
    <div class="grid-image-container" onClick={() => navigateToPin()}>
      <img class="grid-image" src={props.object.imageURL} alt="post" />
      <button class="overlay-image-button">
        <span>collection</span>
        <img class="overlay-arrow-image" src={arrowdown} alt="arrowdown" />
      </button>
      <button class="overlay-image-save">Save</button>
      <button class="overlay-button-share">
        <img class="overlay-button-image" src={share} alt="share" />
      </button>
      <button class="overlay-image-etc">
        <img class="overlay-button-image" src={more} alt="more" />
      </button>
    </div>
  )
}

export default Post