( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );

var checkforit = document.getElementById('.swipebox');
if (checkforit != null) {
  $( '.swipebox' ).swipebox();
}else{

};


$(document).ready(function(){
  $("body").css("height","auto");
});
$(document).resize(function(){
  $("body").css("height","auto");
});


    var quotes = new Array();
    quotes[0] = "<h2>Superb service and customer care. Top notch quality and design. Can't go wrong here!!!</h2><p>Shane, 25, Miami</p>";
    quotes[1] = "<h2>Finally got the puller cover on. Perfect fit. Great quality product.</h2><p>Clyde, 25, Miami</p>";
    quotes[2] = "<h2>Awesome product and super clean finish and perfect fitment that's what counts</h2><p>Andy, Miami</p>";
    quotes[3] = "<h2>Great product with very good fit and finish. I really like that he has the the ability to do custom engravings!</h2><p>Louis, 25, Miami</p>";
    var counter = 0;
    var presenttextslide = document.getElementById('textslide');

    if (presenttextslide != null) {
      function loop() {
        if (counter > 3) counter = 0;
        document.getElementById('textslide').firstElementChild.innerHTML = quotes[counter];
        counter++;
        setTimeout(loop, 4000);
      }
      loop();
    };

    var slider = new Array();
    slider[0] = "url('images/slider-01.jpg')";
    slider[1] = "url('images/slider-03.jpg')";
    slider[2] = "url('images/slider-05.jpg')";
    slider[3] = "url('images/slider-02.jpg')";
    var sliderCounter = 0;
    var checkSlider = document.getElementById('bcg');
    if (checkSlider != null) {
      function sliderLoop() {
        if (sliderCounter > 3) sliderCounter = 0;
        document.getElementById("bcg").style.backgroundImage = slider[sliderCounter];
        sliderCounter++;
        setTimeout(sliderLoop, 3000);
      }
      sliderLoop();
    };

/* START This is the script for each of the product pages sliders */
    var productSlide = new Array();
    productSlide[0] = "subaru-sti-pulley-cover/subaru-sti-pulley-cover-image-01.jpg";
    productSlide[1] = "subaru-sti-pulley-cover/subaru-sti-pulley-cover-image-02.png";
    productSlide[2] = "subaru-sti-pulley-cover/subaru-sti-pulley-cover-image-03.jpg";
    productSlide[3] = "subaru-sti-pulley-cover/subaru-sti-pulley-cover-image-04.jpg";
    var productSlideCounter = 0;
    var checkforit = document.getElementById('productSlide');
    if (checkforit != null) {
      function productSliderLoop() {
        if (productSlideCounter > 3) productSlideCounter = 0;
        document.getElementById('productSlide').src = productSlide[productSlideCounter];
        productSlideCounter++;
        setTimeout(productSliderLoop, 3500);
        }
      productSliderLoop();
    };
/* END It Ends here */
