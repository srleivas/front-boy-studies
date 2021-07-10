var firebaseConfig = {
  apiKey: "AIzaSyBvOnqYwdE3C30zVMi3jNvGWiL0moiFDIM",
  authDomain: "recursoscasa00.firebaseapp.com",
  databaseURL: "https://recursoscasa00-default-rtdb.firebaseio.com",
  projectId: "recursoscasa00",
  storageBucket: "recursoscasa00.appspot.com",
  messagingSenderId: "152125207302",
  appId: "1:152125207302:web:dac314229d4ca42cca6487",
  measurementId: "G-GVVPKWL914"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const mainFolder = database.ref();
const mainContainer = $('#container');


mainFolder.once('value', snapshot => {
  fetchData("#categoryList", snapshot.val())
    .then(toggleBtn(), $('#categoryList > div').find('div').toggle())
    .then(addOrRemoveBtn());
})

// Self explanatory
const fetchData =
  function (parent = "body", categoryObj) {
    return new Promise((resolve, reject) => {
      for (const [key, value] of Object.entries(categoryObj)) {
        if (typeof value === "object" && value != null) {
          $(parent).append(`<div id="${key}" class="category"><span class="toggleBtn">${key} +</span></div>`)
          $(`div [id="${key}"]`)
          fetchData(`#${key}`, value);
        }
        else {
          $(parent).append(`<div id="${key}" class="category"><span>${key}: 
          <span class="counter">${value}</span></span>
          <i class="add-btn add-or-remove fas fa-plus-circle"></i>
          <i class="remove-btn add-or-remove fas fa-minus-circle"></i></div>`);
          $(`div [id="${key}"]`)
        }
      }
    })
  }
  ;

function toggleBtn() {
  $('.toggleBtn').click(function (e) {
    $(e.target).siblings().slideToggle();
  })
}

// addOrRemoveBtn
function addOrRemoveBtn() {
  $('.add-btn').click(e => {
    let parent = $(e.target.parentElement);
    let counter = parseInt(parent.find('.counter').text());
    parent.find('.counter').text(counter + 1)
    changeOnDb(e.target.parentElement, 1);
  });
  
  $('.remove-btn').click(e => {
    let parent = $(e.target.parentElement);
    let counter = parseInt(parent.find('.counter').text());
    parent.find('.counter').text(counter <= 0 ? counter = 0 : counter = counter - 1)
    changeOnDb(e.target.parentElement, -1);
  });
}

// Fullscreen
$('#fullscreenBtn').click(() => {
  document.querySelector('html').requestFullscreen();
});

// Darkmode
$('#darkmode').click(() => {
  $('body').toggleClass('darkmode');
  $('#darkmode').toggleClass('fa-moon fa-sun')
});

// Side Panel
$('.side-panel-btn').click(() => {
  $('#sidePanel').css('width', '100%');
  $('body').css('overflow', 'hidden')
});

$('#sidePanel').click(function (e) {
  if ($(e.target).attr('id') == 'sidePanel') {
    $('#sidePanel').css('width', '0');
    $('body').css('overflow', 'auto')
  }
});

let path = "";
// function getPathAndCallDbSet() {
//   if ($(parent).parent().attr('id') == 'categoryList') {
//     console.log('Pass');
//   }
//   else {
//     console.log('Redo', $(parent).parent());
//     path = path + $(parent).parent().attr('id')
//     getPathAndCallDbSet($(parent).parent());
//   }
// }

function changeOnDb (parent, increment) {
  // console.log(database.ref().child($(parent).attr('id')).set(firebase.database.ServerValue.increment(increment)));
  console.log(mainFolder.child())
}

// List Download Types
mainFolder.once('value', snapshot => {
  const text = JSON.stringify(snapshot.val(), null, 2)
  const legibleText = text.replace(/[{},"]/g, '');
  
  $('#downloadLi').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(legibleText));
  $('#downloadLi').attr('download', 'lista.txt');
});
