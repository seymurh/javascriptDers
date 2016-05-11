/**
 * Created by seymour.h on 04/19/2016.
 */
//alert('hey');
function foo(){
    k=10;
    console.log(this.k+' this k');
}
foo();
try{
    console.log(k+' k out of foo');
}catch (ex){

}

function boo(){
    l=10;
    console.log(this.l+' this l');
    console.log(l+' l from boo');
}

new  boo();
console.log(l+' l out of boo');
var arr=[10,"stri",{a:11},[1],"34"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2].a);
console.log(arr[3][0]);
console.log(arr[0]+arr[2].a);

console.log(arr[0]+arr[4]);

var k=[1,2,3];
k[0]=18;
console.log( k[0]);
