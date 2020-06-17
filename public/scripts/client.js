/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const data = [
    {
      "user": {
        "name": "Andrew Delmar",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@ajd"
      },
      "content": {
        "text": "You know what they say. \"Fool me once, strike one. But fool me twice... strike three.\" - Micheal Scott."
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Andrew Delmar",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@ajd" },
      "content": {
        "text": "Hi"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = (tweetData) => {

    let userName = tweetData.user.name;
    let handle = tweetData.user.handle;
    let avatar = tweetData.user.avatar; //add
    let tweetBody = tweetData.content.text;
    let timeStamp = tweetData.created_at;
    let currentDay = new Date();
    let timeConvert = currentDay.getTime();
    let timeAgo = timeConvert - timeStamp;
    // console.log('timeAgo', timeAgo);
    // console.log('timeStamp', timeStamp);
    // console.log('currentDay', currentDay);
    // console.log('timeConvert', timeConvert);

    let daysAgo = Math.round(timeAgo / (1000*60*60*60*24));
    // console.log('daysAgo', daysAgo)

    const $tweet = 
      `<article>
        <header class="tweet-header">
          <p class="header-name">${userName}</p>
          <p class="header-handle">${handle}</p>
        </header>
        <div class="tweet-main">
          <p class="tweet-text">${tweetBody}</p>
          <div class="inner">
          </div>
        </div>
        <footer class="tweet-footer">
          <p>${daysAgo} days ago</p>
          <div class="tweet-symbols">
            <img src="https://img.icons8.com/small/16/000000/filled-flag2.png" alt="flag icon"/>
            <img src="https://img.icons8.com/small/16/000000/environment.png" alt="retweet icon "/>
            <img src="https://img.icons8.com/ios-filled/16/000000/melting-hert.png" alt="heart icon"/>
          </div>
        </footer>
      </article>`
    
  return $tweet;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    // console.log('tweet', tweet)
    // console.log('createTweetElement(tweet)', createTweetElement(tweet))
    $(`.posted-tweets`).append(createTweetElement(tweet));
  }
};

renderTweets(data);















