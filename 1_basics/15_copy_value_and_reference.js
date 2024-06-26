/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달 
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다 
 */

let original='안녕하세요';
let clone=original;

console.log(original);
console.log(clone);

clone+=' 안유진 입니다.';
console.log('-------------------');
console.log(original);
console.log(clone);

let originalObj={
    name:'안유진',
    group:'아이브',
};

let cloneObj=originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('--------------');

originalObj['group']='코드팩토리';
console.log(originalObj);
console.log(cloneObj);


console.log(originalObj===cloneObj);
console.log(original ===clone);

originalObj={
    name:'최지호',
    group:'코드팩토리'
};
cloneObj={
    name:'최지호',
    group:'코드팩토리'
};
console.log(originalObj==cloneObj);

const yujin1={
    name:'안유진',
    group:'아이브',
}
const yujin2=yujin1;
const yujin3={
    name: '안유진',
    group:'아이브',
}
console.log(yujin1===yujin2); //true  copy by reference
console.log(yujin1===yujin3); //false 
console.log(yujin2===yujin3); //false 


/**
 * Spread Operator 
 */
const yujin4={
    ...yujin3,
};
console.log(yujin4);

console.log(yujin4===yujin3);

const yujin5={
    year:2003,
    ...yujin3,
};
console.log(yujin5);

const yujin6={
    name: '코드팩토리',
    ...yujin3,
};
console.log(yujin6);
const yujin7={
    ...yujin3,
    name: '코드팩토리',
}
console.log(yujin7);

const numbers=[1,3,5];
const numbers2=[
    ...numbers,
    10,
];
console.log(numbers2);

