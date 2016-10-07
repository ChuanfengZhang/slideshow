function insertAfter(newE,tarE){
  var parent = tarE.parentNode;
  if(tarE == parent.lastChild){
    parent.appendChild(newE);
  }else{
    parent.insertBefore(newE,tarE.nextSibling);
  }
}
