// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$(".search-button").click(function(){
  let userSearch=$(".search-term").val();
//console.log(userSearch);
  //let randomNum= Math.random()*//# of gifs in response;
  
  let giphyApi = "https://api.giphy.com/v1/gifs/search?q="+userSearch+"&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY"
  fetch(giphyApi)
  .then(function(response) {
    return response.json()
  })
    
       .then(function(data){
          //console.log(data.data[0].images.downsized_large.url)
          
          let randomInt = Math.floor(Math.random() *30);
          let firstGif = data.data[randomInt].images.downsized_large.url;
          $(".main").html(`<img src=${firstGif} >`);
  })     
  
});

