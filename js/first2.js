window.addEventListener('DOMContentLoaded', function() {
  var scrollBox = document.querySelector('.scroll-box');

  // Calculate the maximum scrollable width
  var maxScrollWidth = scrollBox.scrollWidth - scrollBox.clientWidth;

  // Set up the timer to scroll every 30 seconds
  setInterval(function() {
    var newScrollLeft = Math.floor(Math.random() * (maxScrollWidth + 1));
    scrollBox.scrollLeft = newScrollLeft;
  }, 110);
});

window.addEventListener('DOMContentLoaded', function() {
  var scrollBox = document.querySelector('.scroll-box1');

  // Calculate the maximum scrollable width
  var maxScrollWidth = scrollBox.scrollWidth - scrollBox.clientWidth;

  // Set up the timer to scroll every 30 seconds
  setInterval(function() {
    var newScrollLeft = Math.floor(Math.random() * (maxScrollWidth + 1));
    scrollBox.scrollLeft = newScrollLeft;
  }, 110);
});


window.addEventListener('DOMContentLoaded', function() {
  var scrollBox = document.querySelector('.scroll-box2');

  // Calculate the maximum scrollable width
  var maxScrollWidth = scrollBox.scrollWidth - scrollBox.clientWidth;

  // Set up the timer to scroll every 30 seconds
  setInterval(function() {
    var newScrollLeft = Math.floor(Math.random() * (maxScrollWidth + 1));
    scrollBox.scrollLeft = newScrollLeft;
  }, 110);
});
