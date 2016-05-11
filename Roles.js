/**
 * Created by seymour.h on 04/26/2016.
 */

function getRoles(){
    var xhr = new XMLHttpRequest();
    var url ="http://localhost:63342/ders/Roles.html";
    xhr.open('GET',url);
    xhr.onload = function(){
        document.getElementById("roles").innerHTML=this.response;
    }
    xhr.send(null);
}