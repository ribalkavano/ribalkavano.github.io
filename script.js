$(document).ready(function() {
   $('a.page-scroll').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
  });

  $('body').scrollspy({ 
    target: '#navbar',
    offset: 60
  });  

  $('.header').affix({
        offset: {
            top: 100
        }

    });

});

function postFunc(){
  if(submitted){
    window.location='file:///Users/Vano/Desktop/my_projects/myPortolio/index.html#contacts';
    $(".form-control").val('');
    alert("Your message has been successfully sent");
  }
}

