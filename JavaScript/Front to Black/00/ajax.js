// =========================================== XMLHttpRequest =============================================== //

// document.querySelector('.changeBtn').onclick = function loadDoc() {
//   var xhttp = new XMLHttpRequest;
//   xhttp.onreadystatechange = function () {
//     if ((this.readyState == 4 && this.status == 200) && (JSON.parse(this.responseText))) {
//       const responseObj = JSON.parse(this.responseText);
//       document.querySelector('.mainH2').innerHTML = responseObj.title;
//       document.querySelector('.textToBeChanged').innerHTML = responseObj.text;
//       document.querySelector('.changeBtn').innerHTML = 'Changed with XMLHttpRequest';
//     }
//   }
//   // Can use txt or other extension as long as the text format is json, but i'm sure you know that;
//   xhttp.open("GET", "sample.json", true);
//   xhttp.send();
// }

// ======================================== Info about Response ============================================= //

// window.onload = requestInfo();
// function requestInfo () {
//   var xhttp = new XMLHttpRequest;

//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(xhttp);
//     }
//   }

//   xhttp.open("GET", "sample.json", true);
//   xhttp.send();
// }

// ============================================= Fetch () =================================================== //

document.querySelector('.changeBtn').onclick = function () {
  fetch('sample.json')
    .then(resp => resp.json())
    .then(resp => {
      document.querySelector('.mainH2').innerHTML = resp.title;
      document.querySelector('.textToBeChanged').innerHTML = resp.text;
      document.querySelector('.changeBtn').innerHTML = 'Changed with Fetch';
    })
}