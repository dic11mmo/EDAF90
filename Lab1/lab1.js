/*var imported = require('./inventory.js'); 
console.log( imported.inventory[ " Sallad "]);*/

" use strict";
const imported = require( "./inventory.js" );
console.log ( "  new new new new ");
console.log(" Foundation : " + Object.keys(imported.inventory));
console.log(" Start from here");

let inventory2 = {
    Sallad: {price: 10, foundation: true, vegan: true},
    Pasta: {price: 10, foundation: true, gluten: true},
    'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
    'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
    'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
    'Sallad + Quinoa': {price: 10, foundation: true, vegan: true}};

    console.log(" Invetory2 Start s  " ); 
    let InvetVal = Object.values(inventory2 );
console.log(InvetVal);

console.log(InvetVal[1].price);
console.log(" slute Invetory2 " ); 

//let f = "Handskalade räkor från Smögen"  ;
//console.log(imported.inventory[f].price);

//console.log(imported.inventory["Krutonger"]);

//console.log(imported.inventory[" Tomat "]);  
 

// uppgift 4 
let result = { foundation: " " ,protein: " " ,   extra: " " , dressing:" "
};

let v = Object.keys(imported.inventory);
v.forEach(key => {
    if (imported.inventory[key].foundation == true) {
        result.foundation += key + ",";
    } else if (imported.inventory[key].extra == true) {
        result.extra += key + ",";
     } else if (imported.inventory[key].protein == true) {
            result.protein += key + ",";

    }else if (imported.inventory[key].dressing == true) {
        result.dressing += key + ",";
    }
});

// console.log(result);

console.log( " Foundation : " + 
    result.foundation +
        "\n" +  "\n"  + " Proteins : " +
        result.protein + 
        "\n" + "\n"  +  " Extra :  " + 
        result.extra +
        "\n" + "\n"  +  " Dressing : " +
        result.dressing + "\n" 
);

/// Salad 
// 5. create Salad klass
class Salad {
    // kan det finnas mer än en construction i en klass ? 
   /* constructor(f , p , e , d ){
     
        this.foundation = f ;
        this.proteins = p;
        this.extra= e;
        this.dressing = d;
    }*/ 
    constructor( ){
        this.foundation =[] ;
        this.proteins =  [];
        this.extra=  [];
        this.dressing = [];
        this.price_list = [];
        //this.Total= 0;
    }
     
     
    add( type, selections){
        switch(type){
            case( " foundation "):
            this.addFoundation( selections );
           this.priceTo( selections );
            //this.foundation += "," + selections ;
            break ;
            case ( " proteins "):
               this.addProteins( selections );
               this.priceTo( selections );
               //this.proteins += "," + selections;
                break;
                case( " extra "):
               this.addExtra( selections);
               this.priceTo( selections );
              // this.extra += "," +  selections;
                break;
                case( " dressing "):
                 this.addDressing( selections );
                 this.priceTo( selections );
               // this.dressing += "," + selections;
                break;



            }
        }

        remove(type , selections){

            switch( type ){
                   case ( " foundation "):
                      //result.splice( result.foundation.indexOf(ingridient , 1 )) ; 
                      //this.foundation = " "; 
                      this.foundation.splice( this.foundation.indexOf(selections ,1 )) ; 
                      this.DrawBack( selections);
                     
                      break;
                       case( " proteins "):
                       this.proteins.splice( this.proteins.indexOf(selections , 1 )) ; 
                       this.DrawBack( selections);
                       break; 
                       case( " extra "):
                       this.DrawBack( selections);
                       this.extra.splice(this.extra.indexOf(selections,1)); 
                       break; 
                       case( " dressing "):
                     
                       //result.splice( result.dressing.indexOf(selections , 1 )) ; 
                       this.dressing.splice(this.dressing.indexOf(selections , 1));
                       this.DrawBack( selections);
                       break; 
         
                        }
                
                    
                       
                        
         }

    getFoundation(){
        return this.foundation ;
    }
    addFoundation( f1 ){
        this.foundation.push(f1);
        
    }
    addProteins( p1 ){
        this.proteins.push(p1);
       
    }
    addExtra( e1 ){
        this.extra.push(e1);
       
    }
    addDressing( d1 ){
        this.dressing.push(d1);
       
    }
    // uppgift 7  
     priceTo(p ){

       this.price_list.push(imported.inventory[p].price) ;
     } 
// uppgift 7  
     TotalPrice( list) {
    /* this.Total = list.reduce(
    (acc , currentValue) => acc+currentValue
);*/
return list.reduce(
    (acc , currentValue) => acc+currentValue
);
     }
// uppgift 6 
     DrawBack( p){
        let draw = imported.inventory[p].price;
        //this.Total  = this.Total-draw; 
       for( var i = 0 ; i<this.price_list.length; i++){
            if( this.price_list[i]=== draw){
                this.price_list.splice(i,1);
                this.Total = this.price_list.reduce(
                    (acc , currentValue) => acc+currentValue
                );
                break;
            }
           
        }

     }

  
}
// försöker använda prototype men funkar ej 
/*Salad.prototype={
    priceTo:function(p ){

        this.price_list.push(imported.inventory[p].price) ;
      } 
}*/
// 6. Create an object for a caesar salad:  
let  myCesarSalad = new Salad()
myCesarSalad.add( " foundation "  , "Salad + Pasta");
myCesarSalad.add( " extra "  , "Fetaost");
myCesarSalad.add( " extra "  , "Norsk fjordlax");
myCesarSalad.add( " extra "  , "Kycklingfilé");  
myCesarSalad.add( " proteins " , "Kycklingfilé");
myCesarSalad.add( " dressing ", "Rhodeisland");
myCesarSalad.add( " dressing ", "Ceasardressing");
//myCesarSalad.add( " dressing ", "Blandadsås"); 
//console.log( myCesarSalad);
let Pay = myCesarSalad.TotalPrice(myCesarSalad.price_list);

//myCesarSalad.remove( " dressing ", "Ceasardressing");
//myCesarSalad.remove( " extra ", "Fetaost"); 
console.log(myCesarSalad);

// uppgift 7 
//console.log ( " Totalt summan blev : " + myCesarSalad.Total);
console.log ( " Totalt summan blev : " + myCesarSalad.TotalPrice(myCesarSalad.price_list ));
//console.log ( " price_list : " + myCesarSalad.price_list);

///// Uppgift 8 . create ExtraGreenSalad 

class ExtraGreenSalad extends Salad{

   /* constructor(){
        super(foundation, proteins, extra,dressing,price_list);
    }*/
    add( type, selections){
        let pris = imported.inventory[selections].price;
        switch(type){
            case( " foundation "):
            this.addFoundation( selections );
           this.priceTo( pris*1.3);
            //this.foundation += "," + selections ;
            break ;
            case ( " proteins "):
               this.addProteins( selections );
              
           this.priceTo( pris-pris*.5);
               //this.proteins += "," + selections;
                break;
                case( " extra "):
               this.addExtra( selections);
               
               this.priceTo( pris-pris*.5);
              // this.extra += "," +  selections;
                break;
                case( " dressing "):
                 this.addDressing( selections );
               
                 this.priceTo( pris-pris*.5);
               // this.dressing += "," + selections;
                break;



            }
        }
       
        priceTo(p){ 
            this.price_list.push(p);

        }
        
               /* priceTo(p){
            let pris = imported.inventory[p].price;

            Object.keys(imported.inventory);
            v.forEach(key => {
                if (imported.inventory[key].foundation == true && ) {
           
            this.price_list.push(pris+pris*0.3);
            break;
          } else 
          this.price_list.push(pris-pris*0.5);
        });
    }*/
        
  // fungera ej bra 
 /*TotalPricet(list){ 
    list[0] = list[0]+list[0]*.3;
    for( var i= 1; i<list.length; i++){
        let valu= list[i]*0.5;
          list[i] = list[i]-valu;
       
    }
    return list.reduce((acc , currentValue) => {
        return acc+currentValue;
                },0 ); ;
  
  }*/
      
}
/// 9.  
let EGreenSalad = new ExtraGreenSalad ();
EGreenSalad.add( " foundation " , "Salad + Matvete" );
EGreenSalad.add( " proteins " , "Kycklingfilé" );
EGreenSalad.add( " extra " , "Norsk fjordlax" );
EGreenSalad.add( " extra "  , "Fetaost");
EGreenSalad.add( " extra "  , "Kycklingfilé");  
EGreenSalad.add( " dressing ", "Rhodeisland");
EGreenSalad.add( " dressing ", "Ceasardressing");
console.log(EGreenSalad);
console.log (EGreenSalad.price_list);


  console.log(" Summan av ExtraGreenSalad blev : " +  EGreenSalad.TotalPrice(EGreenSalad.price_list));
        

  
//// Upgift 10
 class GourmetSalad extends ExtraGreenSalad{
    PrepareSalad( f, p, e,d , size){
        //this.foundation= f;
       if( size=1 ){
           let myCesarSalad = new  Salad( )
           myCesarSalad.add( " foundation "  , f);
    // myCesarSalad.add( " extra "  , "Fetaost");
    myCesarSalad.add( " extra "  , e);
    //myCesarSalad.add( " extra "  , "Kycklingfilé");  
    myCesarSalad.add( " proteins " , p);
    myCesarSalad.add( " dressing ", d);
    
    console.log( " Here is ur sald enjoy  " + Object.values(myCesarSalad) + " and u can pay only " + myCesarSalad.TotalPrice(myCesarSalad.price_list));
    //myCesarSalad.add( " dressing ", "Ceasardressing");
       }else if( size > 1){
        let EGreenSalad = new ExtraGreenSalad ();
    EGreenSalad.add( " foundation " , f );
    EGreenSalad.add( " proteins " , p);
    EGreenSalad.add( " extra " , e );
    //EGreenSalad.add( " extra "  , "Fetaost");
    //EGreenSalad.add( " extra "  , "Kycklingfilé");  
    EGreenSalad.add( " dressing ", d);
    //EGreenSalad.add( " dressing ", "Ceasardressing");
    console.log( " Here is ur sald enjoy  " + Object.values(EGreenSalad) + " and u can pay only " + EGreenSalad.TotalPrice(EGreenSalad.price_list));
         console.log( EGreenSalad.price_list);
    }
    }
 
}
  let GourmSalad = new GourmetSalad();
  let sal = GourmSalad.PrepareSalad("Salad + Pasta","Kycklingfilé" ,"Kycklingfilé", "Rhodeisland", 2 );

  //console.log( " Here is ur sald enjoy  " + sal);

      
  
