$(() => {
  const $tweetBox = $('#tweet-text')
  let $counter = $('.counter')
  let $charLeft = $counter.val()

  $tweetBox.keyup(() => {
    
    let $keyPresses = $tweetBox.val().length;

    counter = $charLeft - $keyPresses;
    
    counter < 0 ? $counter.css('color', 'red') : $counter.css('color', 'white')

    $('.counter').html(counter);
  })
});

