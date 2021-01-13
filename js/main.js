var active = 0;


//Immagine Successiva
$('.fa-angle-right').click(function(){
  $('.images > img').eq(active).hide();
  if(active < 3){
    active++
  } else{
    active = 0
  }
  $('.images > img').eq(active).fadeIn();
})


//IMMAGINE PRECEDENTE
$('.fa-angle-left').click(function(){
  $('.images > img').eq(active).hide();
  if(active > 0){
    active --
  } else{
    active = 3
  }
  $('.images > img').eq(active).fadeIn();
})
