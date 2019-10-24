var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;
var arr = [];
var art0 = new Art("Reclining Nude With Blue Cushion", "$118 million", "reclining.jpg");
var art1 = new Art("Otahi", "$120 million", "Otahi.jpg");
var art2 = new Art("Three Studies of Lucian Freud", "$142.4 million", "freud.jpg");
var art3 = new Art("Les Femmes d' Alger", "$179.4 million", "femmes.jpg");
var art4 = new Art("Wasserschlangen II", "$183.8 million", "wasser.jpg");
arr.push(art0);
arr.push(art1);
arr.push(art2);
arr.push(art3);
arr.push(art4);

// set img src to #
// $(#image) + i.attr("src", gallery[i].image)

function Art(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-275px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

function init(){
    $("p").hide();
    for (var i in arr){
        $("#image" + i).attr("src", arr[i].image);
    }
    $("#largeImage").attr("src", arr[0].image);
}

function display(num){
    $("#largeImage").fadeOut(function() {
        $(this).attr("src",arr[num].image).fadeIn(2000);
    });
}

function info(num){
    $("#image" + num).hide().delay(5500).fadeIn();
    $(".text" + num).html(arr[num].name + ' <br /> ' + arr[num].price);
    $(".text" + num).show().delay(5000).fadeOut();
}

$(document).ready (
	function() 
	{   		
        init();
        $("#image0").hover( function(){
            display(0);
        });
        $("#image0").click( function(){
            info(0);
        });
        $("#image1").hover( function(){
            display(1);
        });
        $("#image1").click( function(){
            info(1);
        });
        $("#image2").hover( function(){
            display(2);
        });
        $("#image2").click( function(){
            info(2);
        });
        $("#image3").hover( function(){
            display(3);
        });
        $("#image3").click( function(){
            info(3);
        });
        $("#image4").hover( function(){
            display(4);
        });
        $("#image4").click( function(){
            info(4);
        });
        
    }
);