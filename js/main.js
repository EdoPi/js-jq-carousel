var active = 0;


//
$('.fa-angle-right').click(function(){
  $('.images > img').eq(active).hide();
  if(active < 3){
    active++
  } else{
    active = 0
  }
  $('.images > img').eq(currentImage).fadeIn();
})
