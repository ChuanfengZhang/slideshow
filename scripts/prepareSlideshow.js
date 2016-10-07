function prepareSlideshow() {
  //Make sure the browser understands the DOM methods
  if (!document.createElement || !document.getElementById || !document.getElementsByTagName) {
    return false;
  }
  //Make sure the Elements exist
  if (!document.getElementById("linklist")) return false;
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id", "slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("id", "preview");
  preview.setAttribute("src", "topics.gif");
  preview.setAttribute("alt", "building blocks of web design");
  slideshow.appendChild(preview);
  var list = document.getElementById("linklist");
  insertAfter(slideshow, list);
  //Get all lists
  var links = document.getElementsByTagName("li");
  //Attach the animation behavior to the mouseover event
  links[0].onmouseover = function() {
    moveElement("preview", -100, 0, 10);
  }
  links[1].onmouseover = function() {
    moveElement("preview", -200, 0, 10);
  }
  links[2].onmouseover = function() {
    moveElement("preview", -300, 0, 10);
  }
}
addLoadEvent(prepareSlideshow);
