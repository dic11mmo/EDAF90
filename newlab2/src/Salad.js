
class Salad {
    constructor() {
       // this.foundation= [];
       this.foundation= "";
        this.protein= [];
         this.extra= [];
         this.dressing= " ";
         this.priceList=[];
       this.totalPrice =0;// hur kan man updatera det 

      

      }

    addFoundation(f){
        //this.foundation.push(f);
        this.foundation= f ; 
    }
    addProtein(p){
        this.protein.push(p);
    }
    addExtra(e){
        this.extra.push(e);
    }
    addDressing(dres){
        this.dressing= dres;
    }
    
    addList(p){
        this.priceList.push(p)
    }

    TotalPrice( list) {
        /* this.Total = list.reduce(
        (acc , currentValue) => acc+currentValue
    );*/
    let Pris = list.reduce(
        (acc , currentValue) => acc+currentValue
    );
    //setState({...this.totalPrice,Pris});
    /*this.setState({[this.totalPrice]: Pris
    });*/
    return Pris;
         }
    
    remove(item){
        if (item.foundation){
            this.foundation = [];
        }
        if (item.protein){
            this.protein = [];
        }
        if (item.extra){
            this.extra = [];
        }
        if (item.dressing){
            this.dressing = [];
        }   
    }

    PrintItOut (){
        return(
            " Foundation: " + this.foundation + 
            ", Proteins: " + this.protein + ", Extras: " +  this.extra +
            ", Dressing: " +  this.dressing
            + " "
      );
    }
    


}

export default Salad; 











/*
class Salad {
    constructor() {
        this.insideSallad = {foundation: [],protein: [], extra: [],dressing: []}
      }

    addFoundation(f){
        this.insideSallad.foundation.push(f);
    }
    addProtein(p){
        this.insideSallad.protein.push(p);
    }
    addExtra(e){
        this.insideSallad.extra.push(e);
    }
    addDressing(dres){
        this.insideSallad.dressing.push(dres);
    }
    
    
    remove(item){
        if (item.foundation){
            this.insideSallad.foundation = [];
        }
        if (item.protein){
            this.insideSallad.protein = [];
        }
        if (item.extra){
            this.insideSallad.extra = [];
        }
        if (item.dressing){
            this.insideSallad.dressing = [];
        }   
    }

    price (){
        let listPrice = Object.values(this.insideSallad);
        const CalculatePrice= listPrice.reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);
        let totalPrice = listPrice.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
        console.log("Total price: " + totalPrice);
    }
    print(){
        return( 
            " Foundation: " +
              this.insideSallad.foundation + 
              ", Proteins: " +
              this.insideSallad.protein +
              ", Extras: " +
              this.insideSallad.extra +
              ", Dressing: " +
              this.insideSallad.dressing
              + " "
      );
    }

}

export default Salad;*/ 