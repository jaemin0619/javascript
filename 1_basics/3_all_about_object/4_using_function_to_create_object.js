/**
 * Using function to create objects
 */

function IdolModel(name,year){
    if(!new.target){
        return new IdolModel(name,year);
    }
    
    
    this.name=name;
    this.year=year;

    this.dance=function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin= new IdolModel('안유진',2003);
console.log(yuJin);
//console.log(yuJin.dance());

const yuJin2= IdolModel('안유진',2003);
console.log(yuJin2);
//console.log(global.name);

const IdolModelArrow=(name,year)=>{
    this.name=name;
    this.year=year;

};
const yuJin3=new IdolModelArrow('안유진',2003);
// error 발생 -> new 키워드는 생성자 함수에서만 가능 
// arrow 함수에선 사용 x 