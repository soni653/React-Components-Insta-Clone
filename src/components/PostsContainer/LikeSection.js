// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";


import "./Posts.css"

const LikeSection = props => {
  // eslint-disable-next-line
  const [color, setColor] = useState(document.getElementsByClassName('far fa-heart'))
  const [like,setLike]= useState(props.likes)

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
        <button onClick = {()=>{ 
          console.log(like)
          setLike(like+ 1);
        }}>like</button>
      </div>
    </div>
    <p className="like-number">
    {like} <strong>likes</strong>
    </p>
</div>
  )
};
export default LikeSection;