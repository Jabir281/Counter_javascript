const increaseBT=document.getElementById('increaseB');
const decreaseBT=document.getElementById('decreseB');
const resetBT=document.getElementById('resetB');
let label=document.getElementById('counterL');
let submitBT=document.getElementById('submitUser');
let num=0;
let num_2 =0;
increaseBT.onclick= function(){
    num++;
    label.textContent=num;
    
}
decreaseBT.onclick= function(){
    num--;
    label.textContent=num;
    
}
resetBT.onclick= function(){
    num=0;
    label.textContent=num;
    
}
submitBT.onclick=function(){
    num_2=document.getElementById('inputID').value;
    num_2=Number(num_2);
    num=num_2;
    if(num==0){
        alert('enter number first');
    }
    else{
        label.textContent=num;
    }

}