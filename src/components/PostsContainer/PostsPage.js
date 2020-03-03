//Complete the necessary code in this file
// import useState

import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data.js'




// pass the data from App.js down as props then map through the data

  const PostsPage = (props) => {
    // set up state for your data
    // eslint-disable-next-line
  const [data, updateData] = useState(dummyData)
  
  
    return (
      <div className="posts-container-wrapper">
        {/* map through data here to return a Post and pass data as props to Post */}
      
        {data.map((elem,i) => {
          return <Post post = {elem} key = {i} />
        })}
  
       </div>
       )
      }
    
    
export default PostsPage;

