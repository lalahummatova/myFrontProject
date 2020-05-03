
  $(document).ready(function(){

    $(window).scroll(function () { 
    
        if($("html").scrollTop() >= 45){
            $("#shop-navigation .navbar").addClass("scrolled");
      
        }else{
            $("#shop-navigation .navbar").removeClass("scrolled");
        }
      });


      // smooth scroll effect 
      $(".top-link").click(function (e) { 
        e.preventDefault();
      console.log("klik");
            $("html,body").animate({scrollTop:"0"},1000);  
           return false;
      
      });





  })


$(document).ready(  (function(){

    'use strict';

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $(".elements .btn").on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $(".elements .btn").removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

}))
