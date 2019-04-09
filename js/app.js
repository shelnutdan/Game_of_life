$(document).ready(function(){
let counter=0;

var $container = $("<div></div>").css("float","left");

for(var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++){
        $(`<div>${0}</div>`).addClass("box").appendTo($container);

    }
    $("<div></div>").css("clear", "both").appendTo($container);
}

$container.appendTo($("body"));
let box=document.getElementsByClassName("box");
let array=jQuery.makeArray(box);
console.log(array)

$(".box").on("click",function(){
  $(this).toggleClass('active')
  console.log(array.indexOf(this))
})
$("#start").on('click',function(){
  counter++;
  console.log(counter);
  console.log("The game of life has started");

  console.log($(array[13]).hasClass('active') )
  for(let i=0;i<array.length;i++){
    if(i==0){
      if($(array[i]).hasClass('active')){
        array[1].innerHTML=parseInt(array[1].innerHTML)+1;
        array[10].innerHTML=parseInt(array[10].innerHTML)+1;
        array[11].innerHTML=parseInt(array[11].innerHTML)+1;
        console.log(array[1])
        console.log(array[10])
        console.log(array[11])
      }
    }
    if(i==9){
      if($(array[i]).hasClass('active')){
        array[8].innerHTML=parseInt(array[8].innerHTML)+1;
        array[18].innerHTML=parseInt(array[18].innerHTML)+1;
        array[19].innerHTML=parseInt(array[19].innerHTML)+1;
        console.log(array[8])
        console.log(array[18])
        console.log(array[19])
      }
    }if(i==90){
      if($(array[i]).hasClass('active')){
        array[80].innerHTML=parseInt(array[80].innerHTML)+1;
        array[81].innerHTML=parseInt(array[81].innerHTML)+1;
        array[91].innerHTML=parseInt(array[91].innerHTML)+1;
        console.log(array[80])
        console.log(array[81])
        console.log(array[91])
      }
    }
    if(i==99){
      if($(array[i]).hasClass('active')){
        array[88].innerHTML=parseInt(array[88].innerHTML)+1;
        array[89].innerHTML=parseInt(array[89].innerHTML)+1;
        array[98].innerHTML=parseInt(array[98].innerHTML)+1;
        console.log(array[88])
        console.log(array[89])
        console.log(array[98])
      }
    }
    if(0<i && i<9){
      if($(array[i]).hasClass('active')){
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
        array[i+9].innerHTML=parseInt(array[i+9].innerHTML)+1;
        array[i+10].innerHTML=parseInt(array[i+10].innerHTML)+1;
        array[i+11].innerHTML=parseInt(array[i+11].innerHTML)+1;
        console.log(array[i-1])
        console.log(array[i+1])
        console.log(array[i+9])
        console.log(array[i+10])
        console.log(array[i+11])

      }
    }
    if(90<i && i<99){
      if($(array[i]).hasClass('active')){
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
        array[i-9].innerHTML=parseInt(array[i-9].innerHTML)+1;
        array[i-10].innerHTML=parseInt(array[i-10].innerHTML)+1;
        array[i-11].innerHTML=parseInt(array[i-11].innerHTML)+1;
        console.log(array[i-1])
        console.log(array[i+1])
        console.log(array[i-9])
        console.log(array[i-10])
        console.log(array[i-11])
      }
    }
    if(i==10 || i==20 || i==30 || i==40 || i==50 || i==60 || i==70 || i==80){
      if($(array[i]).hasClass('active')){
        array[i-10].innerHTML=parseInt(array[i-10].innerHTML)+1;
        array[i+10].innerHTML=parseInt(array[i+10].innerHTML)+1;
        array[i+11].innerHTML=parseInt(array[i+11].innerHTML)+1;
        array[i-9].innerHTML=parseInt(array[i-9].innerHTML)+1;
        array[i+1].innerHTML=parseInt(array[i+11].innerHTML)+1;
        console.log(array[i-10])
        console.log(array[i+10])
        console.log(array[i-9])
        console.log(array[i-10])
        console.log(array[i+1])
      }
    }
    if(i==19 || i==29 || i==39 || i==49 || i==59 || i==69 || i==79 || i==89){
      if($(array[i]).hasClass('active')){
        array[i-10].innerHTML=parseInt(array[i-10].innerHTML)+1;
        array[i+10].innerHTML=parseInt(array[i+10].innerHTML)+1;
        array[i-11].innerHTML=parseInt(array[i-11].innerHTML)+1;
        array[i+9].innerHTML=parseInt(array[i+9].innerHTML)+1;
        array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;
        console.log(array[i-10])
        console.log(array[i+10])
        console.log(array[i+9])
        console.log(array[i-11])
        console.log(array[i-1])
      }
    }
    else{
      if($(array[i]).hasClass('active')){
      array[i-10].innerHTML=parseInt(array[i-10].innerHTML)+1;
      array[i+10].innerHTML=parseInt(array[i+10].innerHTML)+1;
      array[i+11].innerHTML=parseInt(array[i+11].innerHTML)+1;
      array[i-11].innerHTML=parseInt(array[i-11].innerHTML)+1;
      array[i+9].innerHTML=parseInt(array[i+9].innerHTML)+1;
      array[i-9].innerHTML=parseInt(array[i-9].innerHTML)+1;
      array[i+1].innerHTML=parseInt(array[i+1].innerHTML)+1;
      array[i-1].innerHTML=parseInt(array[i-1].innerHTML)+1;

      console.log(array[i-10])
      console.log(array[i+10])
      console.log(array[i+9])
      console.log(array[i-9])
      console.log(array[i-11])
      console.log(array[i+11])
      console.log(array[i+1])
      console.log(array[i-1])

    }
  }
  }



})

})
