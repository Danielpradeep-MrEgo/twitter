import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }) => {
    // function Post({displayName, userName, verified, text, image, avatar}) {
    //   displayName, userName, verified, text, image, avatar;
    return (
      <div className="post">
        <div className="post__avatar">
          {/* <Avatar src="https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg" /> */}
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* danielpradeep {" "} */}
                {displayName}{" "}
                <span className="post__headerSpan">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  {/* @danielpradee16 */}@{userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {/* <p>Challenge to build a twitter clone with the React</p> */}
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          {/* <img src="https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg" /> */}
          <div className="post__footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
