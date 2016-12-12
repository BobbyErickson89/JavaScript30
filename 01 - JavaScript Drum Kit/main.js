window.addEventListener('keydown', function(e){
  // KeyCode represents code of the current key being pressed
  // The variable 'keys' is creating an array of each element on the page
  // with the class name 'key'
  var keyCode = e.keyCode;
  var keys = document.getElementsByClassName('key');

  // Below, we are looping through each element in our 'keys' array and
  // checking to see if it's data-key matches our keyCode variable.
  for(i = 0; i < keys.length; i++){
    var data_key = keys[i].dataset.key;

    if(keyCode == data_key){
      keys[i].classList.add("playing");
    }
  }
});
