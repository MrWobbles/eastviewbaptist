'use strict';

$('.mobile-nav-toggle' ).on( 'click', function() {
  $(this).toggleClass( 'active' );
  $('nav').toggleClass('active');
});

$(document).ready(function(){
   /* $('#calendar-view').fullCalendar({
        header: {
          left: '',
          center: '',
          right: ''
        },
    	  googleCalendarApiKey: 'AIzaSyBydQpU-zp7Dxr6aSo-aSEKni3mcbePJGM',
        events: {
            googleCalendarId: 'eastview%40eastviewbaptist.church'
        }
    });*/

    $('.tab').click(function(){
        var tab = $(this).data('tab');
        $('.tab-container .text').removeClass('active');
        $('.tab-container .' + tab).addClass('active');
    });

    $('.sermon-link').click(function(){
        if(this.classList.contains('expanded')){
          this.classList.remove('expanded');
        } else {
          this.classList.add('expanded');
        }
    });
});