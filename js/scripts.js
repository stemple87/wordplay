$(document).ready(function(){
  var resultArray = [];
  var moreThanThreeCharsArray = [];
  $(".form").submit(function(event){
    event.preventDefault();

    var wordList = $("#input").val(); //saves form value
    resultArray = wordList.split(" "); //splits all words into array

    for (var i = 0; i < resultArray.length; i++) {
      if(resultArray[i].length > 2) { //checks array at index location to see if it is longer than three characters
        moreThanThreeCharsArray.push(resultArray[i]); //if it is, it is puched to different array
      }
    }

    var reversedArray = moreThanThreeCharsArray.reverse(); //reverses the contents of array

    var joinedArray = reversedArray.join(" "); //joins array to string, seperated by parameter " "

    $(".wordList").text(joinedArray); //displays joined string to page
    moreThanThreeCharsArray = []; //clears array
  });
});
