function addLoadEvent(func){
  var oldE = window.onload;
  if(typeof oldE != "function" ){
    oldE = func;
  }else{
    window.onload = function(){
      oldE();
      func();
    }
  }
}
