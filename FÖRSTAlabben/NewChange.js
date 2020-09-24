
" use strict";
const imported = require( "./inventory.js" );
// uppgift 4 

/// new 
let result = { foundation:[] ,protein: [] ,   extra: [] , dressing:[]
};
 
 //Hjälpfunktion för att seperera ingrediens typer
/*Object.filter = (obj, predicate) => 
Object.keys(obj)
.filter( key => predicate(obj[key]) )
.reduce( (res, key) => (res[key]=obj[key], res), {} ) */

 function FilterIt(obj, predicate) {
     return Object.keys(obj)
     .filter( key => predicate(obj[key]) )
     .reduce( (res, key) => (res[key]=obj[key], res), {} )   
 }


 result.foundation = FilterIt(imported.inventory, item => item.foundation);
 result.protein = FilterIt(imported.inventory, item => item.protein);
 result.extra = FilterIt(imported.inventory, item => item.extra);
 result.dressing= FilterIt(imported.inventory, item => item.dressing); 

 /// eller nedan stående kan också användas 
/*result.foundation = Object.filter(imported.inventory, item => item.foundation);
result.protein = Object.filter(imported.inventory, item => item.protein);
result.extra = Object.filter(imported.inventory, item => item.extra);
result.dressing= Object.filter(imported.inventory, item => item.dressing);*/


console.log(" foundation :  ");
console.log(result.foundation);
console.log(" protein :   \n ");
console.log(result.protein );
console.log(" extra :   \n ");
console.log( result.extra );
console.log(" dressing :   \n ");
console.log( result.dressing  ); 
console.log( " Test it ");
 

/// Salad 
// 5. create Salad klass
class Salad {
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
         break;
            
            //this.foundation += "," + selections ;
            break ;
            case ( " proteins "):
               this.addProteins( selections );
                 break;
            
                case( " extra "):
               this.addExtra( selections);
           
               break;
              
                case( " dressing "):
               
                 this.addDressing( selections );
              
                 break;



            }
        }

        price() {
            return this.foundation.concat(this.protein, this.extra, this.dressing).reduce((acc, curr) => {
                return acc + imported.inventory[curr].price;
            }, 0); 
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

// chicken breast, bacon, crutons ( krutonger),cherry tomato = körsbärstomat ,lettuce = ( sallad ),parmesan cheese = parmesanost ,caesar dressing = Ceasardressing 
// 6. Create an object for a caesar salad:  
let  myCesarSalad = new Salad()
myCesarSalad.add( " foundation "  , "Sallad");
myCesarSalad.add( " foundation "  , "Sallad");
myCesarSalad.add( " extra "  , "Fetaost");
myCesarSalad.add( " extra "  , "Krutonger");
myCesarSalad.add( " extra "  , "parmesanost");  
myCesarSalad.add( " proteins " , "Kycklingfilé");
myCesarSalad.add( " dressing ", "Rhodeisland");
myCesarSalad.add( " dressing ", "Ceasardressing");


console.log(myCesarSalad);
console.log(" total kost är " + myCesarSalad.price()); 

///// Uppgift 8 . create ExtraGreenSalad 

class ExtraGreenSalad extends Salad{

    constructor(){
       // super(foundation, proteins, extra,dressing,price_list);
       super();
    }
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
              
           this.priceTo( pris*.5);
               //this.proteins += "," + selections;
                break;
                case( " extra "):
               this.addExtra( selections);
               
               this.priceTo( pris*.5);
              // this.extra += "," +  selections;
                break;
                case( " dressing "):
                 this.addDressing( selections );
               
                 this.priceTo(pris*.5);
               // this.dressing += "," + selections;
                break;

    default:
        console.log( " Sorry we dont have " + selections );
          
            }
        }
       
        priceTo(p){ 
            this.price_list.push(p);

        }
      
}
/// 9. 
//chicken breast, bacon, crutons,cherry tomato,lettuce,parmesan cheese,caesar dressing
let EGreenSalad = new ExtraGreenSalad ();
EGreenSalad.add( " foundation " , "Sallad" );
EGreenSalad.add( " proteins " , "Kycklingfilé" );
EGreenSalad.add( " extra " , "Krutonger" );
EGreenSalad.add( " extra "  , "Krutonger");
EGreenSalad.add( " extra "  , "Kycklingfilé");  
EGreenSalad.add( " dressing ", "Rhodeisland");
EGreenSalad.add( " dressing ", "Ceasardressing");
console.log(EGreenSalad);
//console.log ( " ExtraGreenSalad price_list = " + EGreenSalad.price_list);

console.log(" Summan av myCesarSalad blev : " +  myCesarSalad.TotalPrice(myCesarSalad.price_list)); 
  console.log(" Summan av ExtraGreenSalad blev : " +  EGreenSalad.TotalPrice(EGreenSalad.price_list));

  
  

    class GourmetSalad extends ExtraGreenSalad{

        add( type, selections, selections_Size ){
            let pris = imported.inventory[selections].price;
            switch(type){
                case( " foundation "):
                this.addFoundation( selections );
               this.priceTo( pris*selections_Size);
                //this.foundation += "," + selections ;
                break ;
                case ( " proteins "):
                   this.addProteins( selections );
                  
               this.priceTo( pris*selections_Size);
                   //this.proteins += "," + selections;
                    break;
                    case( " extra "):
                   this.addExtra( selections);
                   
                   this.priceTo(pris*selections_Size);
                  // this.extra += "," +  selections;
                    break;
                    case( " dressing "):
                     this.addDressing( selections );
                   
                     this.priceTo( pris*selections_Size);
                   // this.dressing += "," + selections;
                    break;
    
    
    
                }
            }
        PrepareSalad( f, fsize,  p ,psize , e, esize , d , dsize, size){
            
           var myCesarSalad = new GourmetSalad();
          
            myCesarSalad.add( " foundation "  , f , fsize);
            myCesarSalad.add( " proteins " , p,psize);
            myCesarSalad.add( " extra "  , e, esize );
        // myCesarSalad.add( " extra "  , "Fetaost");
        //myCesarSalad.add( " extra "  , "Kycklingfilé");  
        myCesarSalad.add( " dressing ", d,dsize );
        //console.log( " keys " + myCesarSalad)
        console.log( " Here is ur sald enjoy  " + Object.values(myCesarSalad) + " and u can pay only " + myCesarSalad.TotalPrice(myCesarSalad.price_list));
        
        }
        
     
    }
      let GourmSalad = new GourmetSalad();
      console.log( " My ccesarSalad ");
      GourmSalad.PrepareSalad("Salad + Pasta",1,"Kycklingfilé" ,1,"Kycklingfilé",1, "Rhodeisland",1  );
      console.log( "\n" + " ExtraGreenSalad " );
      GourmSalad.PrepareSalad("Salad + Matvete",1.3,"Kycklingfilé" ,.5,"Kycklingfilé",.5, "Rhodeisland",.5  ); 
      /*GourmSalad.add(" extra", "Fetaost" , 0.5 );
      GourmSalad.add(" extra", "Norsk fjordlax" , 0.5 );
      console.log( "\n" + " After addinf more ExtraGreenSalad " + GourmSalad.price_list); 
      */
      //console.log(GourmSalad);
      console.log( "\n" + " GourmetSalad  ");
      GourmSalad.PrepareSalad("Salad + Pasta",3,"Kycklingfilé" ,.5,"Kycklingfilé",.5, "Rhodeisland", .3 );

  
