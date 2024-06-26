/**
 * Array Fuctions
 */
let iveMebers=[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMebers);

// push()
iveMebers.push('코드팩토리');
console.log(iveMebers);
console.log('---------------');
// pop()
console.log(iveMebers.pop()); //마지막 값 삭제 
console.log(iveMebers);

//shift()
console.log(iveMebers.shift()); //첫번째 값 삭제 
console.log(iveMebers);

//unshift()
console.log(iveMebers.unshift('안유진'));
console.log(iveMebers);

console.log(iveMebers.splice(0,3))
console.log(iveMebers);

iveMebers=[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMebers);
//concat() *연결하다*
console.log(iveMebers.concat('코드팩토리'));
console.log(iveMebers);

// slice()
console.log(iveMebers.slice(0, 3)); //0 - 2까지 
console.log(iveMebers);

// spread operator
let iveMebers2=[
...iveMebers,
];
console.log(iveMebers2);

let iveMebers3=[
    iveMebers,
];

console.log(iveMebers3);
console.log('----------------');
let iveMebers4=iveMebers;
console.log(iveMebers4);
console.log(iveMebers4===iveMebers);



/*console.log([
    ...iveMebers,
] === iveMebers);
*/

//join()
console.log(iveMebers.join());
console.log(iveMebers.join('/'));
console.log(iveMebers.join(', '));

//sort()
//오름차순
iveMebers.sort();
console.log(iveMebers);


console.log(iveMebers.reverse());

let numbers=[
    1,
    9,
    7,
    5,
    3,
]
console.log(numbers);

//a, b를 비교했을때
//1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
//2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환 
//3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
return a>b?1:-1;
});

console.log(numbers);

numbers.sort((a,b)=>a>b?-1:1);
console.log(numbers);

// map()
console.log('--------------------');
console.log(iveMebers.map((x)=>x));
console.log(iveMebers.map((x)=> `아이브: ${x}`));
console.log(iveMebers.map((x)=>{
    if(x==='안유진'){
        return `아이브: ${x}`;
    }
    else{
        return x;
    }
}));
console.log(iveMebers);

// filter()
numbers=[1,8,7,6,3];

console.log(numbers.filter((x)=>x%2===0));

// find()
console.log(numbers.find((x)=>x%2===0));

//findIndex()
console.log(numbers.findIndex((x)=>x%2===0));

//reduce()
console.log(numbers.reduce((p,n)=> p+n,0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMemvers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다. 
console.log(iveMebers.reduce((p,n)=>p+n.length,0))