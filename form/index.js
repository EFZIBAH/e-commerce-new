$(document).ready(function(){
  const loginBtn = $("#loginBtn") ;
  const signupBtn = $("#signupBtn") ;
  const loginForm =  $("#loginForm");
  const signupForm =  $("#signupForm");
loginBtn.click(function (e) { 
  signupBtn.removeClass("on");
  loginBtn.addClass("on");
  signupForm.hide();
  loginForm.show();

});
signupBtn.click(function (e) { 
  loginBtn.removeClass("on");
  signupBtn.addClass("on");
  loginForm.hide();
  signupForm.show();

})

 $("#signupsubmit").click(function (e) {
  e.preventDefault(); 
  let regex = /^([0-9]|[\-+#])*$/;
  let signupfname = $("#signupfname").val();
  let result = regex.test(signupfname); 
  if (result){
    $("#signupdemo1").show();
  }
  else{
    $("#signupdemo1").hide();
  }

 });
 $("#signupsubmit").click(function (e) {
  e.preventDefault(); 
  var fname = $("#signupfname").val();
  // $("#greet").innerHTML= "Hi" + fname;

  console.log( "hi " + fname)

 })

  $("#signupsubmit").click(function (e) {
  e.preventDefault(); 
  let regex = /^([0-9]|[\-+#])*$/;
  let signuplname = $("#signuplname").val();
  let result = regex.test(signuplname); 
  if (result){
    $("#signupdemo2").show();
  }

  else{
    $("#signupdemo2").hide();
  }
  
  
 });
 

$("#signupsubmit").click(function (e) { 
  e.preventDefault();
  const email = $("#signupemail");
  const emailValue = email.val();
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let result = regex.test(emailValue); 
  if(!result){
      $("#signupdemo3").show();
  }
  
  else{
    $("#signupdemo3").hide();
  }
})

$("#signupsubmit").click(function (e) { 
  e.preventDefault();
  const password = $("#signuppassword");
  const passwordValue = password.val();
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let result = regex.test(passwordValue); 
  if(!result){
      $("#signupdemo4").show();
  }
  else{
    $("#signupdemo4").hide();
  }
})

$("#loginsubmit").click(function (e) { 
  e.preventDefault();
  const loginpassword = $("#loginPassword");
  const loginpasswordValue = loginpassword.val();
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let result = regex.test(loginpasswordValue); 
  if(!result){
      $("#logindemo4").show();
  }
  else{
    $("#logindemo4").hide();
  }
})

$("#loginsubmit").click(function (e) { 
  e.preventDefault();
  const loginemail = $("#loginemail");
  const loginemailValue = loginemail.val();
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let result = regex.test(loginemailValue); 
  if(!result){
      $("#logindemo3").show();
  }
  else{
    $("#signupsubmit").attr("../index.html");
  }
  
})

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
  else if (counter == 0){
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
  
});



  
});


