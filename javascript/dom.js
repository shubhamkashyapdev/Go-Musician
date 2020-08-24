document.addEventListener('DOMContentLoaded',function(e){
 window.addEventListener("load",function(e){

  document.body.style.display = 'block';

  let tl = new TimelineMax();
  tl.staggerFrom('section', 1,{
    opacity:0,
    scale:.7,
    ease:Power2.easeOut
  },0.2);
 
  tl.staggerFrom('h1,h2',.5,{
    opacity:0,
    y:-40,
    ease:Power2.easeInOut
  },0.2,"-=1.2")
  tl.staggerFrom('.anim-panel',.8,{
    opacity:0,
    y:-40,
    ease:Power2.easeInOut
  },0.2,"-=0.8")


 },false);
});





















