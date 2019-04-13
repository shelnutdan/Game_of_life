$(document).ready(function(){


let counter=0;

var $container = $("<div></div>").css("float","left");

for(var i = 0; i < 35; i++) {
    for (var j = 0; j < 35; j++){
        $(`<div>${0}</div>`).addClass("box").appendTo($container);

    }
    $("<div></div>").css("clear", "both").appendTo($container);
}

$container.appendTo($("#game_board"));
let box=document.getElementsByClassName("box");
let array=jQuery.makeArray(box);
console.log(array)

$(".box").on("click",function(){
  $(this).toggleClass('active')
  console.log(array.indexOf(this))
})
$("#start").on('click',function(){
  let generations=$('#generations').val();
  console.log(generations)
  counter++;
  console.log(counter);
  while (generations>0){
  console.log("The game of life has started");
  array.forEach( element =>{
    element.innerHTML=0});

  for(let i=0;i<array.length;i++){
    if(i==0){
      if($(array[i]).hasClass('active')){
        array[1].innerHTML=parseInt(array[1].innerHTML)+1;
        array[35].innerHTML=parseInt(array[35].innerHTML)+1;
        array[36].innerHTML=parseInt(array[36].innerHTML)+1;

      }
    }
    if(i==34){
      if($(array[i]).hasClass('active')){
        array[33].innerHTML=parseInt(array[33].innerHTML)+1;
        array[68].innerHTML=parseInt(array[68].innerHTML)+1;
        array[69].innerHTML=parseInt(array[69].innerHTML)+1;

      }
    }if(i==1190){
      if($(array[i]).hasClass('active')){
        array[1155].innerHTML=parseInt(array[1155].innerHTML)+1;
        array[1156].innerHTML=parseInt(array[1156].innerHTML)+1;
        array[1191].innerHTML=parseInt(array[1191].innerHTML)+1;

      }
    }
    if(i==1224){
      if($(array[i]).hasClass('active')){
        array[1188].innerHTML=parseInt(array[1188].innerHTML)+1;
        array[1189].innerHTML=parseInt(array[1189].innerHTML)+1;
        array[1123].innerHTML=parseInt(array[1123].innerHTML)+1;

      }
    }
    if(0<i && i<34){
      if($(array[i]).hasClass('active')){
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
        array[i+34].innerHTML=parseInt(array[i+34].innerHTML)+1;
        array[i+35].innerHTML=parseInt(array[i+35].innerHTML)+1;
        array[i+36].innerHTML=parseInt(array[i+36].innerHTML)+1;


      }
    }
    if(1190<i && i<1224){
      if($(array[i]).hasClass('active')){
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
        array[i-34].innerHTML=parseInt(array[i-34].innerHTML)+1;
        array[i-35].innerHTML=parseInt(array[i-35].innerHTML)+1;
        array[i-36].innerHTML=parseInt(array[i-36].innerHTML)+1;

      }
    }
    if(i==35 || i==70 || i==105 || i==140 || i==175 || i==210 || i==245 || i==280 ||i==315 || i==350 || i==385 || i==420 || i==455 || i==490 || i==525 || i==560 ||i==595 || i==630 || i==665 || i==700 || i==735 || i==770 || i==805 || i==840||i==875 || i==910 || i==945 || i==980 || i==1015 || i==1050 || i==1085 || i==1120 ||i==1155){
      if($(array[i]).hasClass('active')){
        array[i-35].innerHTML=parseInt(array[i-35].innerHTML)+1;
        array[i+35].innerHTML=parseInt(array[i+35].innerHTML)+1;
        array[i+36].innerHTML=parseInt(array[i+36].innerHTML)+1;
        array[i-34].innerHTML=parseInt(array[i-34].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;

      }
    }
    if(i==69 || i==104 || i==139 || i==174 || i==209 || i==244 || i==279 || i==314 ||i==349 || i==384 || i==419 || i==454 || i==489 || i==524 || i==559 || i==594||i==629 || i==664 || i==699 || i==734 || i==769 || i==804 || i==839 || i==874||i==909 || i==944 || i==979 || i==1014 || i==1049 || i==1084 || i==1119 || i==1154 ||i==1189){
      if($(array[i]).hasClass('active')){
        array[i-35].innerHTML=parseInt(array[i-35].innerHTML)+1;
        array[i+35].innerHTML=parseInt(array[i+35].innerHTML)+1;
        array[i-36].innerHTML=parseInt(array[i-36].innerHTML)+1;
        array[i+34].innerHTML=parseInt(array[i+34].innerHTML)+1;
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;

      }
    }
    else{
      if($(array[i]).hasClass('active')){
        if( (0<i && i<34) ||(1190<i && i<1224) || i==35 || i==70 || i==105 || i==140 || i==175 || i==210 || i==245 || i==280 ||i==315 || i==350 || i==385 || i==420 || i==455 || i==490 || i==525 || i==560 ||i==595 || i==630 || i==665 || i==700 || i==735 || i==770 || i==805 || i==840||i==875 || i==910 || i==945 || i==980 || i==1015 || i==1050 || i==1085 || i==1120 ||i==1155 || i==69 || i==104 || i==139 || i==174 || i==209 || i==244 || i==279 || i==314 ||i==349 || i==384 || i==419 || i==454 || i==489 || i==524 || i==559 || i==594||i==629 || i==664 || i==699 || i==734 || i==769 || i==804 || i==839 || i==874||i==909 || i==944 || i==979 || i==1014 || i==1049 || i==1084 || i==1119 || i==1154 ||i==1189){
          return null;
        }
      array[i-35].innerHTML=parseInt(array[i-35].innerHTML)+1;
      array[i+35].innerHTML=parseInt(array[i+35].innerHTML)+1;
      array[i+36].innerHTML=parseInt(array[i+36].innerHTML)+1;
      array[i-36].innerHTML=parseInt(array[i-36].innerHTML)+1;
      array[i+34].innerHTML=parseInt(array[i+34].innerHTML)+1;
      array[i-34].innerHTML=parseInt(array[i-34].innerHTML)+1;
      array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
      array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;



    }
  }


  }
  array.forEach( element =>{
    if($(element).text()==3 && !$(element).hasClass('active')){
      console.log(element)
      $(element).addClass('active');

    }
    if( $(element).text()>3 && $(element).hasClass('active')){
      $(element).removeClass('active')
      $(element).innerHTML=0;
    }
    if($(element).text()<2 && $(element).hasClass('active')){
      $(element).removeClass('active')

    }


  })

   generations--;

   console.log(generations)
 }


})


})
