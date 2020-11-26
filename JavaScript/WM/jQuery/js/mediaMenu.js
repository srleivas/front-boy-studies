 const $ = require('./ExternalJs/jquery.min.js')
 
 // Toggle Menu when button or link is clicked; 
 $('button').click(e => $('.container-left').slideToggle(500))
 $('.container-left .link').click(e => {
   if(window.innerWidth <= 1150) 
     $('.container-left').slideToggle(400);
 });

 
 // Show or Hide Container-left according to whether is on mobile or not and to size;
 const windowSizeMobile = $(window).width();
 $(window).on('resize', e => {
   if (window.innerWidth > 1150) {
     $('.container-left').css('display', 'inline-flex');
   }
   else if(window.mobileCheck()) {}
   else {
     $('.container-left').css('display', 'none');
   }
 });