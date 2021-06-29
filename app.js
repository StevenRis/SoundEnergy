//left side menu
$(document).ready(function () {
  $('.menu-btn').click(() => {
    $('.sidenav').toggleClass('open');
    console.log('toggle');
  });
  $('.closebtn, section').click(() => {
    $('.sidenav').removeClass('open');
  });
});
