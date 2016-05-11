/**
 * Created by seymour.h on 04/19/2016.
 */
function  clearInputsInClass(className){
var elems=document.getElementsByClassName(className);
    for(var i=0;i<elems.length;i++){
        elems[i].value=null;
    }
}