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
        return curIndex;
    }
   $('.nextButton').click(function(){
      // console.log(curIndex);
       curIndex++;
       
       cycleThroImages(curIndex);
   }); 
    $('.backButton').click(function(){
        curIndex--;
        cycleThroImages(curIndex);
    });
    
    $('.circles').click(function(){
        
    });
        
});




