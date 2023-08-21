$(document).ready(function () {

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

    $("#image2 img").each(function (index, element) {
        $(element).click(function (e) {
            alert("sdf")
            e.preventDefault();
            $("#image1").html(element);
        });
    });

    var counter = 0;
    $("#plus").click(function (e) {
        if (counter < 10) {
            counter += 1
        }
        document.getElementById("counter").innerHTML = counter;

    });
    $("#minus").click(function (e) {
        if (counter > 0) {
            counter -= 1
        }
        document.getElementById("counter").innerHTML = counter;

    });

    $(".cart-btn").click(function (e) {
        if (counter > 0) {
            $("#badge").show();
            document.getElementById("badge").innerHTML = counter;
        }
        else if (counter == 0) {
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

    $.ajax({
        type: "get",
        url: "https://fakestoreapi.com/products",
        data: {
            limit: 5
        },
        dataType: "json",
        success: function (response) {
            if(response.statusCode == 200){
                alert("login successful")
            }
            else{
                alert(response.error)
            }
            response.forEach((product, index) => {
                const el2 = `<img class="sub" id="sub${index}" src="${product.image}" alt="">`
                $("#image2").append(el2);
            });
            const el = `<img id="main-img1"  class="active" src="${response[0].image}" alt="">`
            $("#image1").append(el);

        },
        error: function (error) {
            console.log(error)
        }
    });
})