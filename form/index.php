<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
</head>

<body>
  <section>
    <div class="container">
      <div class="btn">
        <button id="signupBtn" class="on" >Sign Up</button>
        <button id="loginBtn">Log In</button>
      </div>
      <div class="form" id="signupForm" action="./">
        <h1>Sign Up For Free</h1>
        <div class="name">
          <div>
            <input type="text" id="signupfname" placeholder="First Name">
            <p id="signupdemo1">Input First Name</p>
          </div>
          <div>
            <input type="text" id="signuplname" placeholder="Last Name">
            <p id="signupdemo2">Input Last Name</p>
          </div>
        </div>
        <div>
          <input type="text" id="signupemail" placeholder="E-mail">
          <p id="signupdemo3">Input Email</p>
        </div>
        <div>
          <input type="text" id="signuppassword" placeholder="Password">
          <p id="signupdemo4">Password must contain 8words,one letter,one number and one symbol</p>
        </div>
        <input type="submit" id="signupsubmit" value="Get Started">
      </div>
      <form id="loginForm"
      action="./">
        <h1>Login In</h1>
        <div>
          <input type="text" id="loginemail" placeholder="E-mail">
          <p id="logindemo3">Input Email</p>
        </div>
        <div>
          <input type="text" id="loginPassword" placeholder="Password">
          <p id="logindemo4">Password must contain 8words,one letter,one number and one symbol</p>
        </div>
        <button id="loginsubmit">LOG IN</button>
        
      </form>
    </div>
  </section>


  <script src="./index.js"></script>
</body>

</html>