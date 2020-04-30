
  $(document).ready(function(){

    $(window).scroll(function () { 
        console.log("tesr");
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

  })