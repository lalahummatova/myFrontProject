$(document).ready(function(){

    $(window).scroll(function () { 
    
        if($("html").scrollTop() >= 45){
            $("#login-navigation .navbar").addClass("scrolled");
      
        }else{
            $("#login-navigation .navbar").removeClass("scrolled");
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