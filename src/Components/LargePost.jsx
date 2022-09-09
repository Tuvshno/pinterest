import more from './assets/more.png'
import share from './assets/upload.png'
import link from './assets/link.png'
import dropdown from './assets/arrowdown.png'

function LargePost(props) {
  return (
    <div class="large-post-container">
      <img class="large-post-image" src={props.data.post.imageURL} alt="post" />
      <div>
        <div class="large-post-information">
          <img class="large-post-image-hidden" src={props.data.post.imageURL} alt="post-hidden" />
          <div class="large-post-metadata">
            <div class="information-header">
              <div class="information-buttons">
                <button class="large-post-small-button">
                  <img src={more} alt="more" />
                </button>
                <button class="large-post-small-button">
                  <img src={share} alt="share" />
                </button>
                <button class="large-post-small-button">
                  <img src={link} alt="more" />
                </button>
              </div>

              <div class="information-save-buttons flex">
                <button class="large-post-collection flex">
                  <p>Art</p>
                  <img src={dropdown} alt="dropdown"/>
                </button>
                <button class="button-save">Save</button>
              </div>
            </div>

            <div class="information-metadata">
              <a href={props.data.post.imageURL}>LINK</a>
              <h2>Title</h2>
              <p>UNDER TITLE</p>
              <button class="flex">
                <h4>COMMENTS</h4>
                <img src={dropdown} alt="dropdown"/>
              </button>
              <input type="text" placeholder="Add a comment" class="information-comment" />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default LargePost