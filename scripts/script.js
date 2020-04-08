let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");

btn.addEventListener("click", function() {

    let url = "https://api.generated.photos/api/v1/faces?per_page=1&order_by=random";
    let myInit = {
      method: 'GET',
      headers: {'Authorization': 'API-Key 7QQrSAiAgLmHnjvzriLTPQ'}
    };

    fetch(url, myInit)
    .then((response) => {
      console.log(response);
      return response.json();
    }).then((data) => {
      console.log(data);
      let image = data.faces[0].urls[4]["512"];
      img.src = image;
    });
  });


//Random Dogs Here:

// XHR

// btn.addEventListener("click", function() {
//
//     var XHR = new XMLHttpRequest();
//     //Make the request
//     XHR.onreadystatechange = function(){
//         if(XHR.readyState == 4 && XHR.status == 200) {
//             var url = JSON.parse(XHR.responseText).message;
//             img.src = url;
//         } else {
//             console.log("There was a problem!");
//         }
//     }
//
//     XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
//     XHR.send();
// });


//New Feature

//Listen for Clicks
// const url = "https://dog.ceo/api/breeds/image/random";
//
//
//
// btn.addEventListener("click", function() {
//   fetch(url)
//   .then(function(response){
//     console.log(response);
//     return response.json();
//   }).then(function(data){
//       console.log(data.message);
//       var image = data.message;
//       img.src = image;
//     });
// });
