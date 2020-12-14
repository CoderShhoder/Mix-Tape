//---------------------get eleement by Id and Query selector-------------------//
//var counter=document.getElementById("countdown");

//var run_counter=counter.innerHTML;


/*var bg_image=document.getElementById("bg-image");
var count_bg=bg_image.scroll;
setInterval(function(){
    run_counter=run_counter>0 ? run_counter-1:0;
    counter.innerHTML=run_counter;
    //---------------------Changing background with consedring odd and even-------------------//
    count_bg=run_counter % 2==0 ? 'bg1.jpg' : 'bg-2.jpg';
    bg_image.src=count_bg;

    //----------------Decreasing background size with decreasing counter---------//
    //counter.style.fontSize= run_counter * 100 + "px"
    //bg_image.style.width=run_counter * 10 + "%"
},900);*/
//-------------Changing background color on click--------------//
/*var btn=document.getElementById("bttn");
var bgcolor=document.querySelector("header div");
function fn1(){
    bgcolor.style.backgroundColor="rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
}
//btn.onclick=fn1;
btn.addEventListener('click',fn1);*/
//------------------toggle menu  on adding and deleting element-------------------------//
/*var menuIcon=document.getElementById("menu-icon");

var sideBar=document.getElementById("side-bar");

menuIcon.addEventListener('click',function(){
    if(sideBar.classList.contains('show')){
        sideBar.classList.add('show');
        sideBar.classList.remove('hide');
    }
    else{
        sideBar.classList.remove('show');
        sideBar.classList.add('hide');
    }
});*/
/*var username=document.getElementById("username");
var password=document.getElementById("password");
var loginForm=document.getElementById("login-form");

username.addEventListener('input',function(event){
    console.log(event.button);
});

loginForm.addEventListener('submit',function(){
    alert("SUBMITTED");
});*/

var audioA = document.getElementById('audio1');
var audioB = document.getElementById('audio2');
var audioC = document.getElementById('audio3');
var audioD = document.getElementById('audio4');
var audioE = document.getElementById('audio5');
var audioF = document.getElementById('audio6');
var audioG = document.getElementById('audio7');
var audioH = document.getElementById('audio8');
var audioI = document.getElementById('audio9');

var a=document.getElementById('box1');
var b=document.getElementById('box2');
var c=document.getElementById('box3');
var d=document.getElementById('box4');
var e=document.getElementById('box5');
var f=document.getElementById('box6');
var g=document.getElementById('box7');
var h=document.getElementById('box8');
var i=document.getElementById('box9');

a.addEventListener('click',function (){
    audioA.play();
});
b.addEventListener('click',function (){
    audioB.play();
});
c.addEventListener('click',function (){
    audioC.play();
});
d.addEventListener('click',function (){
    audioD.play();
});
e.addEventListener('click',function (){
    audioE.play();
});
f.addEventListener('click',function (){
    audioF.play();
});
g.addEventListener('click',function (){
    audioG.play();
});
h.addEventListener('click',function (){
    audioH.play();
});
i.addEventListener('click',function (){
    audioI.play();
});