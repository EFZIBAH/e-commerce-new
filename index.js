$(document).ready(function(){
  
  $("#sub2").click(function (e) { 
    e.preventDefault();
    $("#main-img1").removeClass("active");
    $("#main-img3").removeClass("active");
    $("#main-img4").removeClass("active");
    $("#main-img2").addClass("active");
  });
  $("#sub3").click(function (e) { 
    e.preventDefault();
    $("#main-img1").removeClass("active");
    $("#main-img2").removeClass("active");
    $("#main-img4").removeClass("active");
    $("#main-img3").addClass("active");
  });
  $("#sub4").click(function (e) { 
    e.preventDefault();
    $("#main-img1").removeClass("active");
    $("#main-img3").removeClass("active");
    $("#main-img2").removeClass("active");
    $("#main-img4").addClass("active");
  });
  $("#sub1").click(function (e) { 
    e.preventDefault();
    $("#main-img2").removeClass("active");
    $("#main-img3").removeClass("active");
    $("#main-img4").removeClass("active");
    $("#main-img1").addClass("active");
  });
  $(".cart").click(function (e) { 
    e.preventDefault();
    $(".box").show();
  });
  
  var counter=0;
  $("#plus").click(function (e) { 
    if(counter<10){
      counter +=1
    }
    document.getElementById("counter").innerHTML= counter;
    
  });
  $("#minus").click(function (e) { 
    if (counter>0){
      counter -=1
    }
    document.getElementById("counter").innerHTML= counter;
    
  });
 
  $(".cart-btn").click(function (e) { 
    if(counter>0){
      $("#badge").show();
      document.getElementById("badge").innerHTML= counter;
    }  
    else if (counter = 0){
      $("#badge").hide();
    }  
  });
  $(".icon-menu").click(function (e) { 
    $(".menu").show();
    $(".section").addClass("opacity");
    
    
    
  });
  $(".move").click(function (e) { 
    $(".menu").hide();
    $(".section").removeClass("opacity");
    // console.log("ini")
    
  });

})