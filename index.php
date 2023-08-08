<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
</head>
<body>
  <section class="section">
    <header>
      <ul class="hello">
        <img class="icon-menu" src="./images/icon-menu.svg" alt="">
        <div class="menu">
        <div class="list2">
        <div class="move">  <div><img src="./images/icon-close.svg" alt=""></div></div>
          <a href="#"> <li>Collections</li></a>
          <hr>
        <a href="#"> <li>Women</li> </a>
        <hr>
        <a href="#"> <li>Men</li> </a>
        <hr>
        <a href="#"> <li>About</li> </a>
        <hr>
        <a href="#"> <li>Contacts</li> </a>
        </div></div>
        <div class="logo"> <img src="./images/logo.svg" alt=""> </div>
        <div class="list">
          <a href="#"> <li>Collections</li></a>
        <a href="#"> <li>Women</li> </a>
        <a href="#"> <li>Men</li> </a>
        <a href="#"> <li>About</li> </a>
        <a href="#"> <li>Contacts</li> </a>
        </div>
      </ul>
      <ul>
        <div id="cart"> <img class="cart" src="./images/icon-cart.svg" alt="">
          <div id="badge">0</div>
          <div class="box">
            <div class="top">Cart</div>
            <div class="line"></div>
            <div class="text">Your cart is empty</div>
          </div>
         </div>
        <a href="./form/index.html"> <img class="profile-pics" src="./images/image-avatar.png" alt=""> </a>
      </ul>
    </header>
    <div class="hero-section">
      <div class="first">
        <div class="sub-first">
          <div class="main">
            <img id="main-img1"  class="active" src="./images/image-product-1.jpg" alt="">
            <img id="main-img2"  src="./images/image-product-2.jpg" alt="">
            <img id="main-img3"src="./images/image-product-3.jpg" alt="">
            <img id="main-img4" src="./images/image-product-4.jpg" alt="">
          </div>
          <div class="sub-image">
            <img class="sub" id="sub1" src="./images/image-product-1-thumbnail.jpg" alt="">
            <img class="sub" id="sub2" src="./images/image-product-2-thumbnail.jpg" alt="">
            <img class="sub" id="sub3" src="./images/image-product-3-thumbnail.jpg" alt="">
            <img class="sub" id="sub4" src="./images/image-product-4-thumbnail.jpg" alt="">
            
            
          </div>
        </div>
      </div>
      
      <div class="second">
       <div>
        <h1 id="greet"></h1>
        <h3>Sneakers Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere non omnis a in blanditiis tempore eveniet obcaecati laudantium quisquam?</p>
        <h4>$125.00   <span>50%</span></h4>
        <strike>$250.00</strike>
        <div class="add-cart">
          <div class="btn">
            <div id="minus">
            <img src="./images/icon-minus.svg" alt="">
            </div>
            <p id="counter">0</p>
            <div id="plus">
              <img id="plus" src="./images/icon-plus.svg" alt="">
            </div>
          </div>
          <button class="cart-btn">
            <img src="./images/icon-cart.svg" alt="">
            <p>Add to cart</p>
          </button>
        </div>
       </div>
      </div>
    </div>
  
  </section>



  <script src="./form/index.js"></script>
</body>
</html>