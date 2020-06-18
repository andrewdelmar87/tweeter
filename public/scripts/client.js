/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const createTweetElement = (tweetData) => {

    let userName = tweetData.user.name;
    let handle = tweetData.user.handle;
    let avatar = tweetData.user.avatar; //add
    let tweetBody = tweetData.content.text;
    let timeStamp = tweetData.created_at;
    let currentDay = new Date();
    let timeConvert = currentDay.getTime();
    let timeAgo = timeConvert - timeStamp;

    let daysAgo = Math.round(timeAgo / (1000*60*60*60*24));

    const escape =  function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
    
    const $tweet = 
      `<article>
        <header class="tweet-header">
          <p class="header-name">${userName}</p>
          <p class="header-handle">${handle}</p>
        </header>
        <div class="tweet-main">
          <p class="tweet-text">${escape(tweetBody)}</p>
          <div class="inner">
          </div>
        </div>
        <footer class="tweet-footer">
          <p>${daysAgo} days ago</p>
          <div class="tweet-symbols">

            <span class="material-icons">flag</span>
            <span class="material-icons">repeat</span>
            <span class="material-icons">favorite</span>
          </div>
        </footer>
      </article>`
    
  return $tweet;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(`.posted-tweets`).prepend(createTweetElement(tweet));
  }
};


const validateTweet = function(str) {
  if ((str === "") || (str === null)) {
    $('.form-error-message').text('Text field empty!').slideDown();
    return true;
  } else if (str.length > 145) {
    $('.form-error-message').text('Exceed character limit').slideDown();
    return true;
  } 
};


$('.new-tweet-form').on('submit', function(event) {
  event.preventDefault();
  
  //
  const text = $('#tweet-text').val().trim();
  console.log('text', text)
  const validate = validateTweet(text);
  if (validate) {
    return;
  } else {
    $('.form-error-message').slideUp();
  }
  //

  const data = $(this).serialize();
  $.post('/tweets', data)
    .then(function() {
      loadTweets();
      $('.tweet-text').val('');
    })
})

const loadTweets = () => {
  $.getJSON('/tweets')
    .then(function(data) {
      
      $('.posted-tweets').empty()
      renderTweets(data);
    })
  }
  loadTweets();
});













