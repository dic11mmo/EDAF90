var s = require( "./NewInventory.js" ); 
console.log(s);
console.log(Object.values(s));
console.log(Object.keys(s).name);

/*let arr = [ 1,2,3,4,5 ];
function filterIt( s){
    s.filter( x=> s => 2 ); 
}
/*function FilterIt(item, obj){
obj.filter( x=> x === item );

}
*/

/// working 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//const result = words.filter(word => word== "elite");

function filterIt(s){
    //return  result = s.filter(s => s== "elite");
const result = s.filter(s => s== "elite");
    console.log(result ); 
}

filterIt( words) ;

const words = [];
function filterIt2(s, obj){
    //return  result = s.filter(s => s== "elite");
const result = obj.filter(item => === "elite");
    console.log(result ); 
}

filterIt( words) ; 
//console.log(filterIt( words) );

//var foundation = filterIt( arr);
//console.log(foundation);
