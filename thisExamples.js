/**
 * Created by seymour.h on 04/23/2016.
 */

    var k = 12;
    function foo (callPlace) {
     //   {k:null}
        //this.k=15;
        console.log(callPlace + this.k);
        // console.log(this);
        // return this.k;
    };
    var ob = {
        k:17,
        foo:foo
    }

    ob.foo('ob ');
    foo('foo ');

    var z = new foo();
//this= {};
//console.log(z);

