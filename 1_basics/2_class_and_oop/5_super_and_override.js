/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
     }
}

class FemaleIdolModel extends IdolModel{
    //노래 / 춤 
    part;

 constructor(name,year,part){
    super(name,year); //부모 클래스를 의미 
    this.part=part;
 }
sayHello(){
    return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
 //constructor가 아닌 곳에는 this 쓰기
}

}

const yuJin=new FemaleIdolModel('안유진',2003,'보컬');
console.log(yuJin);

const wonYoung=new IdolModel('장원영',2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());