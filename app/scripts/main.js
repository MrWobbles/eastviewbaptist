'use strict';

$('.mobile-nav-toggle' ).on( 'click', function() {
  $(this).toggleClass( 'active' );
  $('nav').toggleClass('active');
});

$(document).ready(function(){
    $('#calendar-view').fullCalendar({
    	height: 450,
    	left:   'title',
    	center: false,
    	right:  false,
    	googleCalendarApiKey: 'AIzaSyCBxIozpJqFt_ZFiVrXJoAlS2-0djnN3_k',
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