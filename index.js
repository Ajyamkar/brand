function validation(){
  var x,text;
   x=document.querySelector(".input1").value;
  if(x.search('@'+"")==-1 || x.search('\\.'+"")==-1){
    text="Please provide a valid email";
    var answer=document.getElementById("answer");
    answer.innerHTML = text;
    answer.style.position="relative";
    answer.style.bottom="43px";
    answer.style.left="7px";
    answer.style.fontSize="12px";
    answer.style.color="hsl(0, 93%, 68%)";
    return false;
  }

}
