
  $(document).ready(function(){

    $(window).scroll(function () { 
    
        if($("html").scrollTop() >= 45){
            $("#about-navigation .navbar").addClass("scrolled");
            $("#about-navigation .navbar").css({"background-color": "white"});
            $("#about-navigation .nav-link").css({"color":"black"});
            $("#about-navigation .mylogo").attr("src","./img/logo-dark.png" );
            $("#about-navigation .ikons i").css({"color":"black"});

        }else{
            $("#about-navigation .navbar").removeClass("scrolled");
            $("#about-navigation .navbar").css({"background-color": "transparent"});
            $("#about-navigation .nav-link").css({"color":"white"});
            $("#about-navigation .mylogo").attr("src","./img/logo.png" );
            $("#about-navigation .ikons i").css({"color":"white"});

        }
      });


      // smooth scroll effect 
      $(".top-link").click(function (e) { 
        e.preventDefault();
      console.log("klik");
            $("html,body").animate({scrollTop:"0"},1000);  
           return false;
      
      });




      $(window).scroll(function () { 
    
        if($("html").scrollTop() >= 45){
            $("#contact-navigation .navbar").addClass("scrolled");
            $("#contact-navigation .navbar").css({"background-color": "white"});
            $("#contact-navigation .nav-link").css({"color":"black"});
            $("#contact-navigation .mylogo").attr("src","./img/logo-dark.png" );
            $("#contact-navigation .ikons i").css({"color":"black"});

        }else{
            $("#contact-navigation .navbar").removeClass("scrolled");
            $("#contact-navigation .navbar").css({"background-color": "transparent"});
            $("#contact-navigation .nav-link").css({"color":"white"});
            $("#contact-navigation .mylogo").attr("src","./img/logo.png" );
            $("#contact-navigation .ikons i").css({"color":"white"});

        }
      });

  })