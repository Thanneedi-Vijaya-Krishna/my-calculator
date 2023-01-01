const txt1 = document.getElementById('in');
const ANSWER = document.querySelector(".Answer");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const mod = document.querySelector(".mod");
const square = document.querySelector(".square");
const equal = document.querySelector(".equal");
const AC = document.querySelector(".AC");





add.addEventListener("click",addi)
function addi(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var num2=document.getElementById('in').value;
    var result=parseFloat(num1)+parseFloat(num2);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;

}

}
sub.addEventListener("click",subi)
function subi(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var num2=document.getElementById('in').value;
    var result=parseFloat(num1)-parseFloat(num2);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;
}

}
mul.addEventListener("click",muli)
function muli(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var num2=document.getElementById('in').value;
    var result=parseFloat(num1)*parseFloat(num2);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;
}

}
div.addEventListener("click",divi)
function divi(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var num2=document.getElementById('in').value;
    var result=parseFloat(num1)/parseFloat(num2);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;
}

}
mod.addEventListener("click",modi)
function modi(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var num2=document.getElementById('in').value;
    var result=parseFloat(num1)%parseFloat(num2);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;
}

}
square.addEventListener("click",squarei)
function squarei(e){
    var num1=document.getElementById('in').value;
    document.getElementById('in').value='';
    equal.addEventListener("click",eq);
       
function eq(e){
    var result=parseFloat(num1)*parseFloat(num1);
    document.getElementById('in').value='';
    document.getElementById("demo").innerHTML = result;
}

}









