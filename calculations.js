/**
 * Created by seymour.h on 04/23/2016.
 */
function calculate(f,a,b){
    return f(a,b);
}
function add(x,y){
    return x+y;
}
function  multiply(x,y){
    return x*y;
}

var hesab=add;
var k=calculate(hesab,3,4);
var j=calculate(multiply,3,4);
var l=calculate(function(a,b){
    return a*2+b*2;
},3,4);



console.log('k=' +k);
console.log('j='+ j);
console.log(l);



