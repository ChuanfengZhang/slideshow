function prepareSlideshow(){
//Make sure the browser understands the DOM methods
  if(!document.createElement || !document.getElementById || !document.getElementsByTagName) {
    return false;
  }
//Make sure the Elements exist
  if(!document.getElementById("linklist")) return false;
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("id","preview");
  preview.setAttribute("src","topics.gif");
  preview.setAttribute("alt","building blocks of web design");
  slideshow.appendChild(preview);
  var list = document.getElementById("linklist");
  insertAfter(slideshow,list);
//Get all lists
  var links = document.getElementsByTagName("li");
//Attach the animation behavior to the mouseover event
  for(var i = 0; i < links.length; i ++){
    links[i].onmouseover = function (){
      var x = -(i + 1) * 100;
      moveElement("preview",x,0,10);
    }
  }
}
addLoadEvent(prepareSlideshow);
