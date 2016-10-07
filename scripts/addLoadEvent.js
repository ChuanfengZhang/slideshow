function addLoadEvent(func){
  var oldE = window.onload;
  if(typeof oldE != "function" ){
    window.onload = func;
  }else{
    window.onload = function(){
      oldE();
      func();
    }
  }
}
