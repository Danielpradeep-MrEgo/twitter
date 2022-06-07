import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			displayName: "Daniel pradeep",
			username: "danielpradeep16",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				"https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg",
		});

		setTweetMessage("");
		setTweetImage("");
	};
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="what's happening?"
					/>
					{/* <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            placeholder="what's happening?"
          /> */}
				</div>
				<Button onClick={sendTweet} type="submit" className="tweetBox__button">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
