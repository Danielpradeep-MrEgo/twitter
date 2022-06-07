import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"/>
        </div>

        <div className="widgets__widgetContainer">
            <h2>What's happening?</h2>
            {/* <TwitterTweetEmbed tweetId={"858551177860055040"}/> */}
            <TwitterTweetEmbed tweetUrl={"1304307249225953280"}/>
            <TwitterTimelineEmbed sourceType="profile" screenName="Danielpradeep16" options={{ height: 400 }}/>
            <blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/aylkHSrKiT">pic.twitter.com/aylkHSrKiT</a></p>&mdash; Daniel Pradeep (@DanielPradeep16) <a href="https://twitter.com/DanielPradeep16/status/1304307249225953280?ref_src=twsrc%5Etfw">September 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <TwitterShareButton url={"https://twitter.com/home"} options={{ text: "reactjs is awesome", via:"@evilJoker"}}/>
        </div>
    </div>
  );
}

export default Widgets;
