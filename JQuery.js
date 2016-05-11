/**
 * Created by seymour.h on 05/10/2016.
 */
//var getName=null;
$(document).ready(function(){
  //  $('body').append("<div class='alert-info'><h1> header</h1> </div>");
  //  $('body').prepend("<div class='alert-info'><h1> header</h1> </div>");
   // $('body').text("<div class='alert-info'><h1> header</h1> </div>");
  //  $('body').html("<div class='alert-info'><h1> header</h1> </div>");
  // jQuery('.alert-danger')
  //     .appendTo('.main')
  //     .css("border","3px solid black")
  //     .append("<p>Paragraph</p>");
   //descendant selector  main-in bilavasitə və ya dolayısı ilə daxilindəki bütün elementlər
   $('.main p').css("border","2px solid green");
    $('.main p:not(.main>p):last').append("<span class='badge'>1</span>");
    $('.main p:nth-child(2)').append("<span class='badge'>2</span>");

    //child selector
    $('.main>p').css("color","red");
    //next sibling selector
    $('.main+p').css("color","blue");
    $('.main~p').css("background-color","red");
   // $('#form input[type="hidden"]').val();
   function getId(){
     var id=  $('#form input[name="id"]').val();
       alert(id);
   }

   //getName= function getName(){
   //     var name= $('#form input[name="Name"]').val();
   //     alert(name);
   // }
  $('button.name').click(function getName(){
      var name= $('#form input[name="Name"]').val();
      alert(name);
  });
    $('button.id').click(getId);
  $('button.sibling').click(function(){
     // $(this)
      var id=   $(this).siblings('[type="hidden"]').val();
      alert(id);
  });
   // $('button').on('click',function(){});
  //  $('button').off('click');

});

//function JQuery(selector){
//
//   this.element=document.querySelector(selector);
//
//    this.append=function(st){
//        element.forEach(function(){});
//        return this;
//    }
//    this.css=function(){
//        //adsfj;l
//        //adslfj;lasd
//        return this;
//    }
// return this;
//}

//var jQuery=new JQuery();
