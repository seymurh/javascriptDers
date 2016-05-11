/**
 * Created by seymour.h on 04/26/2016.
 */
var loadUsers=null;
  $(document).ready(function(){
       loadUsers=function(){
          var xhr=new XMLHttpRequest();
          var url='http://localhost:63342/ders/users.html';
          xhr.open('GET',url);
          xhr.onload=function(){
              var divUsers=document.getElementById('users');
              divUsers.innerHTML=divUsers.innerHTML+ this.response;
             // $('#loadUsers').click(loadUsers);
              //console.log(this.response);
              //console.log(this);
          }
          xhr.send(null);
      }

      //$('#loadUsers').click(loadUsers);
  });
