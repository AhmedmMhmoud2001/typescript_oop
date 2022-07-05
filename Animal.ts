class Animal
{
    //variables
    name:string;
    width:number;
    height:number;
    //constructor
    constructor(name,width,height){
       this.name= name;
       this.width=width;
       this.height= height;
    }
    //properties
    getPrice()
    {
      return this.width*10*this.width/18
    }

}

let animal=new Animal("dog",20,15);
console.log(animal.getPrice())
