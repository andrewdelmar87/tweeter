$(() => {
  console.log('page successfully loaded')
  //what element to target?
  const $tweetBox = $('#tweet-text')
  //find remaining characters
  let $counter = $('.counter')
  let $charLeft = $counter.val()
  //make something happen on another element when event happens

  //onkeystroke
  $tweetBox.keyup(() => {
    // console.log('tweetBox length', $tweetBox.val().length)
    // console.log('charLeft inside tweetBox', $charLeft)
    // console.log('counter inside tweetBox', $counter)

    let $keyPresses = $tweetBox.val().length;
    // console.log('keyPresses', keyPresses)

    counter = $charLeft - $keyPresses;
    
    // console.log('counter', counter)
    counter < 0 ? $counter.css('color', 'red') : $counter.css('color', 'white')

    $('.counter').html(counter);
  })
  

});

