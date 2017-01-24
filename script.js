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

   // Send Mail Form

  $(".contact-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку!");
      $(".contact-form").trigger("reset");
    });
    return false;
  });



});


