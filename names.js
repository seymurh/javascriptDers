/**
 * Created by seymour.h on 04/19/2016.
 */
var names=[];
function addName(){
    var name=document.getElementById('name').value;

    var ul=document.getElementById('names');
    var newElement='<li>'+name+'</li>';
    ul.innerHTML=ul.innerHTML+ newElement;
}
function addNamesArray(){
    var name=document.getElementById('name').value;
    names.push(name);
}

