$(function(){
    var curIndex = 0;
    var images = $('.carousel .myImages');
    var numOfImages = images.length;
    cycleThroImages(curIndex);

    
    function cycleThroImages(val){
        if(val > images.length - 1){
          curIndex = 0;  
        }
        if(val < 0){
            curIndex = images.length - 1;
        }
        var image = $('.carousel div').eq(curIndex); 
        images.css('display', 'none'); 
        image.css('display', 'inline-block');
    }
    
    function goToSlide(n){
        curIndex = n;
        cycleThroImages(curIndex);
    }
    
    var startAutoSlide = setInterval(function(){
        curIndex++;
        if(curIndex > images.length - 1){
          curIndex = 0;  
        }
        cycleThroImages(curIndex);
    }, 5000);
   $('.nextButton').click(function(){
       curIndex++;
       
       cycleThroImages(curIndex);
   }); 
    $('.backButton').click(function(){
        curIndex--;
        cycleThroImages(curIndex);
    });
        
});




