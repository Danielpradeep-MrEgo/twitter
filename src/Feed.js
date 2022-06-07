import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
	// this is a variable

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((doc) => doc.data()));
		});
	}, [posts]);

	// console.log(posts, "posts");

	return (
		<div className="feed">
			{/* header */}
			<div className="feed__header">
				<h2>Home</h2>
			</div>
			{/* Tweetbox */}
			<TweetBox />

			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.text}
						displayName={post.displayName}
						userName={post.userName}
						verified={post.verified}
						text={post.text}
						image={post.image}
						avatar={post.avatar}
					/>
				))}
			</FlipMove>

			{/* <Post
        displayName="Danielpradeep"
        userName="Danielpradeep16"
        verified={true}
        text="YOOO its working"
        image="https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg"
        avatar="https://pbs.twimg.com/profile_images/1251432525882290176/7NwAGk-m_400x400.jpg"
      /> */}

			{/* Post */}
			{/* Post */}
			{/* Post */}
			{/* Post */}
		</div>
	);
}

export default Feed;
