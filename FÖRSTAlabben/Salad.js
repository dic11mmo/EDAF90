/// Salad 

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
        this.Total= 0;
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
    // fungerar bra 
     priceTo(p ){

       this.price_list.push(imported.inventory[p].price) ;
     } 

     TotalPrice( list) {
     this.Total = list.reduce(
    (acc , currentValue) => acc+currentValue
);
     }

       /* let v = Object.keys(imported.inventory);
        v.forEach(key => {
            if (imported.inventory[key] == p) {
                //price.foundation_price = imported.inventory[key].price;
                price_list.push(imported.inventory[key].price);
            }
        });
     }*/
    /* TotaltPrice( price){
        const sum = price.reduce((acc , currentValue) => {
return acc+currentValue;
        },0 ); 
     }*/

    /*remove( f1 ){
       this.foundation.delate
        console.log(remove );
    }*/

    
    remove(type , selections){

    switch( type ){
           case ( " foundation "):
              //result.splice( result.foundation.indexOf(ingridient , 1 )) ; 
              //this.foundation = " "; 
              this.foundation.splice( this.foundation.indexOf(selections ,1 )) ; 
              break;
               case( " proteins "):
               this.proteins.splice( this.proteins.indexOf(selections , 1 )) ; 
               break; 
               case( " extra "):
               this.extra.splice(this.extra.indexOf(selections,1)); 
               break; 
               case( " dressing "):
             
               //result.splice( result.dressing.indexOf(selections , 1 )) ; 
               this.dressing.splice(this.dressing.indexOf(selections , 1));
               break; 
 
                }
        
            
      
                
 }

 
}

 //let sal = new Salad (" Fou", " kyckilg " ,  " jalapinio " , " vitlöksås" ) ;
 //console.log( sal);
/*sal.addFoundation( " f2 ");
sal.addFoundation( " f3 ");
sal.addFoundation( " f4 ");
sal.addDressing( " hamgurgare dressing" )*/
let  myCesarSalad = new Salad()
myCesarSalad.add( " foundation "  , "Salad + Pasta");
myCesarSalad.add( " extra "  , "Fetaost");
myCesarSalad.add( " proteins " , "Kycklingfilé");
myCesarSalad.add( " dressing ", "Rhodeisland");
myCesarSalad.add( " dressing ", "Ceasardressing");
//myCesarSalad.add( " dressing ", "Blandadsås"); 
//console.log( myCesarSalad);
let Pay = myCesarSalad.TotalPrice(myCesarSalad.price_list);
console.log ( " Totalt summan blev : " + myCesarSalad.Total);
//let va = smyCesarSalad.dressing.indexOf(" Blandadsås ") ;
//sal.dressing.splice(va , 1) ;
/*console.log( myCesarSalad);
myCesarSalad.remove( " dressing " , " Blandadsås " );
console.log( " removed ");
//console.log(myCesarSalad.price);
 // working perfect 

 /*const sum = myCesarSalad.price.reduce(
    (acc , currentValue) => acc+currentValue
);*/
    /*function price(p ){
    const sum = p.reduce(
        (acc , currentValue) => acc+currentValue
    );
    }*/

/*for( var i = 0; i < b.length; i++){ 
    console.log(Object.keys(b[i]));// skrivas ut objekts prototyp eller attribute 
    //console.log(Object.values(arr[i]));// skrivas ut objeckts värde 
    //console.log(arr[i].name);// skrivas personen namn 
   if ( b[i].foundation == true) {
       
    myCesarSalad.price.push(Object.values(b[i]).price)
       //console.log( arr[i].name + " age is " + arr[i].age);
     //arr.splice(i, 1); 
   }
}*/

//TotaltPrice( price) 


//console.log( sal.dressing.indexOf(" Blandadsås " , 1));
//let ind = sal.dressing.indexOf(" Blandadsås " , 1) ;
//console.log( sal.dressing.splice(ind, 1));











/*class Salad {
    constructor(f , p , e , d ){
        this.foundation = f ;
        this.proteins = p;
        this.extra= e;
        this.Dressing = d;
    }
     
     
    add( vad , lägg){
        switch(vad){
            case( " foundation "):
           // addFoundation( lägg );
            this.foundation += " , " +  lägg ;
            break ;
            case ( " proteins"):
                addProteins( lägg );
                break;
                case( " extra "):
                addExtra( lägg );
                break;
                case( " Dressing "):
                addDressing( lägg );
                break;



            }
        }

    getFoundation(){
        return this.foundation ;
    }
    addFoundation( f1 ){
        this.foundation += " , " +  f1;
    }
    addProteins( p1 ){
        this.proteins += " , " +  p1;
    }
    addExtra( e1 ){
        this.extra += " , " +  e1;
    }
    addDressing( d1 ){
        this.Dressing += " , " + d1;
    }


    /*remove( f1 ){
       this.foundation.delate
        console.log(remove );
    }*/

    
    /*remove(ingridient){
        if(imported.inventory[ingridient].foundation === true){
          this.foundation = "";
        }else if (imported.inventory[ingridient].extra === true){
          this.extras.splice(this.extras.indexOf(ingridient),1);
        }else if (imported.inventory[ingridient].protein === true){
          this.proteins.splice(this.proteins.indexOf(ingridient),1);
        }else if(imported.inventory[ingridient].dressing === true){
          this.dressing = "";
                }
 }
}

 let sal = new Salad (" Fou", " kyckilg " ,  " jalapinio " , " vitlöksås" ) ;
 console.log( sal);
/*sal.addFoundation( " f2 ");
sal.addFoundation( " f3 ");
sal.addFoundation( " f4 ");
sal.addDressing( " hamgurgare dressing" )*/
/*sal.add( " foundation "  , " new ");
sal.add( " foundation "  , " newf1 ");
sal.add( " proteins " , " Nötkött ");
console.log( sal);


// fungerar ej 
/* let v = Object.keys(sal).forEach(key =>{ 
     if ( sal[key]== "foundation" ){
         console.log( key.valueOf);
     }
});

console.log( v) ;*/ 

