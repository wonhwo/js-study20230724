const emp = {
  empName: "뽀로로",
  age: 4,
  hireDate: "2020-01-01",
  birthDay: '2020-01-01'  
};
console.log(`내 이름은 ${emp.empName}이고 ${emp.age}살입니당. 생일은 ${emp.birthDay}이에용`);

const {empName,birthDay,age}=emp;

console.log(`내 이름은 ${empName}이고 ${age}살입니당. 생일은 ${birthDay}이에용`);


const {empName:en,birthDay:bd,age:a}=emp;

console.log(`내 이름은 ${en}이고 ${a}살입니당. 생일은 ${bd}이에용`);

const {birthDay:bDay, ...others}=emp;
console.log('=======================================================');
console.log(others);

console.log('=======================================================');
// 객체 복사
const cpEmp={
    ...emp,
    address:'청양군',
    hobbies: ['산책','수영']
};
cpEmp.empName='루우피'
console.log(emp);
console.log(cpEmp);
