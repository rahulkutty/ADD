// function fun(a,b,){
//     console.log();
    
// }
// fun()


// if(true){
//     console.log("inside if")
// }
// else{
//     console.log("inside else")
// }


// function cal(a,b,c){
//     if(c=='+'){
//         console.log(a+b)

//     }
//     else if(c=='-'){
//         console.log(a-b)

//     }
//     else if(c=='*'){
//         console.log(a*b)
        
//     }
//     else if(c=='%'){
//     console.log(a%b)

// }

// }

// var a=prompt("enter a number");
// var b=2;
//  var c='*';
//  cal(a,b,c)

// var arr=[1,2,3,4,
// ]
// var item={
//     firstname:"linges",age:19,city:"dgl",
  
//     sam(a,b){
//       console.log(a+b)
//     }
  
//   }
  
//   console.log(item)
//   console.log(item.age)
//   item.sam(2,7)
  
  
  
  
  
  // item.age=20;
  
  // console.log(item.age)
  // item.state="tam"
  // item['pho']='9787634501'
  // console.log(item)
  // console.log(item['age'])
  // item['state']="goa"
  // console.log(item)
  
  
  // let a='age'
  // item[a]=25
  
  // console.log(item['age'])
  
  // let item1 =new Object();
  
  // item1.name="linges";
  
  // console.log(item1)


// var stu1 = {Fname:"rahul",Lname:"kutty",age:"19"}
// var stu2 = {Fname:"arul",Lname:"charles",age:"20"}
// var stu3 = {Fname:"linges",Lname:"giri",age:"21"}
// var student = [stu1,stu2,stu3]
// var fn = [];
// var ln = [];
// var age = [];
// for(let i=0;i<3;i++)
// {
//     ln.push(student[i].Lname);
//     fn.push(student[i].Fname);
//     age.push(student[i].age);
// }

// console.log(fn);
// console.log(ln );
// console.log(age);

// const arr=[1,2,3,4,5]
// const even = arr.filter((i)=> i%2==0)
// console.log(even)

// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]
// const hi = users.filter((user)=> user.age>=25)
// console.log(hi)



// var arr=[1,2,3,4,5];
// var output = arr.map((i)=> {
//     if(i%2==0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }
// })

// console.log(output)


// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
//   const hi = companies.filter((Company)=> Company.name>=25)
//  console.log(hi)

// var age=[12,45,32,54,89,90]
// var sortedArray = age.sort((a,b)=> a-b)
// console.log(sortedArray)

//  var arr=[1,2,3]
//  var [a,b,c] =arr
//  console.log(a+""+b+""+c)


// const student = {name: "rahul",roll:1,city:"ten"}
// var { name,roll,city} = student
// console.log(name + "" + "" + roll + "" +city)

// var para =document.getElementById("one")
// console.log(para.textContent)

// function change(){
//   para.textContent="kutty"
 
// }

// function change(){
//   document.body.style.backgroundColor="red";
//   console.log("click")

// }
 var input1 = document.getElementById("in1")
 var input2 = document.getElementById("in2")
 var sum=document.getElementById("three")

function cal(){
  sum.textContent= Number(input1.value) + Number(input2.value)
  console.log(sum.textContent)
}
 
