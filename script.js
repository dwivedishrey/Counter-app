let countEL=document.getElementById('countEL')
let count=0;
let previous=document.getElementById('previous')
function increement(){
  count=count+1
  countEL.innerText=count
}
function save(){
   let p=count+' - '
   previous.textContent+= p
   count=0
   countEL.textContent=count
}
