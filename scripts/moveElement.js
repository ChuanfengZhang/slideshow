function moveElement(elementID,final_X,final_Y,interval){
//Make sure the browser understands the DOM methods and the elementID exists
  if(!document.getElementById || !document.getElementById(elementID)) return false;
  var ele = document.getElementById(elementID);
  if(ele.movement){
    clearTimeout(ele.movement);
  }
  if(!ele.style.left){
    ele.style.left = "0px";
  }
  if(!ele.style.right){
    ele.style.top = "0px";
  }
  var xpos = parseInt(ele.style.left);
  var ypos = parseInt(ele.style.top);
  if( xpos == final_X && ypos == final_Y) return true;
  if(xpos < final_X){
    xpos += Math.ceil((final_X - xpos) / 10 ) ;
  }
  if(xpos > final_X){
    xpos -= Math.ceil((xpos - final_X) / 10 );
  }
  if(ypos < final_Y){
    ypos += Math.ceil((final_Y - ypos) / 10 );
  }
  if(ypos > final_Y){
    ypos -= Math.ceil((ypos - final_Y) / 10 );
  }
  ele.style.left = xpos + "px";
  ele.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_X+","+final_Y+","+interval+")";
  ele.movement = setTimeout(repeat,interval);
}
