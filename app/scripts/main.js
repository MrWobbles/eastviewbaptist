'use strict';

$('.mobile-nav-toggle' ).on( 'click', function() {
  $(this).toggleClass( 'active' );
  $('nav').toggleClass('active');
});

$(document).ready(function(){
    $('#calendar-view').fullCalendar({
        header: {
          left: '',
          center: 'month year',
          right: ''
        },
    	googleCalendarApiKey: 'AIzaSyAUNBuJ0uvpsy1SH8QEu0P_RHUQLQHHDz8',
        events: {
            googleCalendarId: 'l6qg606uc1koc41i3c68kii64c@group.calendar.google.com'
        }
    })

    $('.tab').click(function(){
        var tab = $(this).data('tab');
        $('.tab-container .text').removeClass('active');
        $('.tab-container .' + tab).addClass('active');
    });
});