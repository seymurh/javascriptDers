/**
 * Created by seymour.h on 04/19/2016.
 */
function getCount(){
    console.log(this);

    this.innerHTML="this button";
    var elem=  document.getElementById('count');
    var count=elem.value;
    console.log('count is '+count);
}
//$(document).ready(function(){
//    $('#getcount').click(getCount);
//});
function getNum(){
    var elems=document.getElementsByName('num');
    var elem=elems[0];
    var num=elem.value;
    console.log('num is '+num);
    return num;
}

function setCount(val){
    var elem=  document.getElementById('count');
    elem.value=val;
}
function  clearAll(){
    clearInputsInClass('in');
}
function clearNum(){
clearInputsInClass('number');
}
function clearCount(){
clearInputsInClass('count');
}
//getCount();