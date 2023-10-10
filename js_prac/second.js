
//389
console.log("----Hoisting-----");

console.log(aa);
var aa=10;
console.log(aa);
console.log("---using let for Hoisting----");
console.log('error');

/*console.log(aa);
let aa=10;
console.log(aa);*/
console.log("---using const for Hoisting----");
console.log('error');
 
/*
console.log(aa);
let aa=10;
console.log(aa);*/
console.log('--scope');

for(var n=0; n<5;n++)
console.log(n);
console.log('--out of for value of n');

console.log(n);

console.log('--using let in scope');

for(let n=0; n<5;n++)
console.log(n);
console.log('--out of for value of n');

//console.log(n);

console.log('error');

console.log('----const keyword');
const num=10;
console.log(num);
//num=110;
console.log("error if num=110");
console.log(num);

var n="arun";
console.log(n+" is 23 year old");
//console.log('${n} is 23 year old');

var name='arun';
console.log(typeof(name));
var e='12';
console.log(typeof(e));
var inte=3;
console.log(typeof(inte));
var me=8.2;
console.log(typeof(me));


//data type
var obj={
    name:"arun kumar",
    roll_no:10021,
    play(){
        console.log(`${this.name} plays`);
    }
};
console.log(obj.name);
obj.play();
console.log(obj["roll_no"]);

console.log("NaN==NaN",NaN==NaN);
console.log("Object.is(+0,-0)",Object.is(+0,-0));


console.log("+0==-0",+0==-0);
console.log("NaN===NaN",NaN===NaN);

console.log("Object.is(NaN,NaN)",Object.is(NaN,NaN));

console.log("-------array------");
var arr=[1,2,3,4,5];
console.log(arr);
console.log("arr[2]=",arr[2]);

var arr1=[2,,3,4,54,54,2,2,,43];
console.log(arr1);

console.log("arr1[1]=",arr1[1]);

let arr2=new Array(23,'cst',new Object())
console.log("arr2=",arr2);
console.log("typeof(arr2)=",typeof(arr2));

console.log("arr2=",arr2);

arr2.push(3)
console.log("after push arr2=",arr2);
arr2.pop();
console.log("after pop arr2=",arr2);
console.log("arr2=",arr2);

arr2.unshift(3)
console.log("after unshift arr2=",arr2);
arr2.shift();
console.log("after shift arr2=",arr2);
console.log("arr2=",arr2);

console.log("---- Split and slice ---");
arr2.splice(1,3,"9999")
console.log("arr2=",arr2);
arr2.splice(1,2)
console.log("arr2=",arr2);


console.log("----  slice ---");
var new_barr=arr1.slice(0,3)
console.log("new_barr =",new_barr);
var c=[1,2,3,4,4,5,6,7];
var cc=c.slice(3)

console.log("cc =",cc);
var ccnew=cc.slice(3,6)
console.log("ccnew =",ccnew);

console.log("----  function and sccope ---");

var ab =0;
console.log(ab);
print();
function print()
{
    var b=0;
    a=10;
}
console.log("a=",a);
console.log('b= ',b);
var prnt =function() {
    console.log('awe');
}

prnt();
(function(a,b){
    console.log(a+b);
}
)(4,4)
console.log("----  call and apply ---");

function print()
{
    console.log("hello");
}

print.call();
print.apply();

console.log("----  call  ---");
let animal={
    name:'dog',
    eat(a,b){
        console.log(this.name+' is eating'+" "+" "+b);
    }
};
let human={
    name:"arun kumar nv"
};
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
console.log("----  apply ---");
animal.eat.call(human,[10,'chips']);
console.log("----  bind ---");
let human_eat=animal.eat.bind(human);
human_eat(5,'apples')

/*//window function
let obb =
{
    name:'fur',
prnttt:function (){
    console.log('a',this);
    var an_prnt=function(){
        console.log('b',this);
    }
    an_prnt();
} 
};
obb.prnttt(); */
//to remove window function
let obb =
{
    name:'fur',
prnttt:function (){
    console.log('a',this);
    var an_prnt=()=>{
        console.log('b',this);
    }
    an_prnt();
} 
};
obb.prnttt();
console.log("h1---function inside another function hof");

function printt(){
    console.log("h1");
}
//setInterval(printt,1000);
// clearInterval(1);

//insted of using multipe function we use 1 funtion returns function
function age_req(r_age){
    return function(age){
        return age>=r_age;
    }
}
let can_Vote=age_req(18);
console.log(can_Vote(27));
let can_Drive=age_req(18);
console.log(can_Drive(27));
let can_marry =age_req(20);
console.log(can_marry(27));

console.log("redused code");

console.log(age_req(18)(13));
console.log(age_req(16)(32));
console.log(age_req(21)(13));
console.log("--- constructor---");


class box
{
    constructor(length)
    {
        this.length=length;
        console.log("constructor called");
    }
    display(){
        console.log(this);
    }
};

var objj = new box(20);
objj.display();

console.log("---without constructor---");

class boxx
{
    
    display(){
        console.log(this);
    }
};

var objjj = new boxx();
objjj.display();

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(Array.prototype);

let father = {
    name:'jhon'
};
let son1={};
let son= Object.create(father);
console.log("father.isPrototypeOf(son1)",father.isPrototypeOf(son1));
console.log("father.isPrototypeOf(son)",father.isPrototypeOf(son));

var parent = {
    name: "Fathers",
sing(){
    console.log("singing");
},
eat: function() {
    console.log("eating");

    drink: ()=>{
        console.log("drinking");
    }
}
};
var child={
    name:"son",
    eat()
    {
        console.log("eating");

    }
};
child.__proto__=parent;
for (let p in child)
console.log(p+" ",child.hasOwnProperty(p));

console.log("--- inheritance-----");

class Parents{
    live(){
        console.log("Iran");
    }
}
class childs extends Parents{
    live(){
        console.log("India");

    }
}
var ob=new childs();
ob.live();
console.log("--- errors-----");

console.log("error :         console.log(fyt)");
console.log("below erroe nothng will be displayed ");
//console.log(fyt)
//console.log("arun");


function a() {
    const b=new Error("hi an error is raised ");
    return b;
}
console.log("   a()   =  ",a());

console.log("--- exception handling-----");
try{
    console.log(a);

}
catch
{
    console.log("we got error");

}
console.log("--- exception handling  using try catch-----");

agee=19
if (agee<18){
    try{
        throw  new Error("you are under age");

    }
    catch(error)
    {
        console.log(error);
    }
}
else {
    console.log("you can vote");
}

console.log("--- exception handling  using finally-----");
try{
    console.log(a);
}
finally{
    console.log("program ended");

}


console.log("--- document and methods-----");
console.log(document);
console.log(document.domain);
console.log(document.url);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[2]);

document.title=1234
console.log("new title= ",document.title);
document.all[2].textContent="adfafdfasfafasfasfda";
console.log(document.all[2]);

console.log("--- window-----");
console.log(window);

console.log("document.__proto__=",document.__proto__);
console.log("---type on console or copy and paste above stmt-----");
console.log("window.open( '','' ,width=100,height=100)");
//window.open("","",width=100,height=100);
console.log("---type on console or copy and paste above stmt-----");
console.log("window.open( 'https://google.com','' ,width=100,height=100)");
window.open("https://google.com","",width=100,height=100);

console.log("---type on console 'close()' it will close the brouser-----");

//close()
var ages=prompt("Enter your age:");
    if (ages>20)
    alert("grater you are a valid user");
    else
        alert("try again");

console.log("--- ----- DOM  getElementById -----");
var headd=document.getElementById("heading")
console.dir(headd);
console.log("--- ----- DOM  getElementsByClassName -----");
var headd=document.getElementsByClassName("hobby")
console.dir(headd);
console.log("--- ----- DOM  getElementsByTagName -----");
var headd=document.getElementsByTagName("heading")
console.dir(headd);

document.querySelector(".hobby");
console.log("---type on console 'document.querySelector(`.hobby`)' it will close the brouser-----");
document.querySelectorAll(".hobby");
console.log("---type on console 'document.querySelectorAll(`.hobby`)' it will close the brouser-----");
document.querySelector("p");
console.log("---type on console 'document.querySelector(`p`)' it will close the brouser-----");
document.querySelectorAll("p");
console.log("---type on console 'document.querySelectorAll(`p`)' it will close the brouser-----");

var I_D=
document.getElementById("heading");
I_D
console.log("---type on console 'var I_D=document.getElementById('heading');I_D' it will close the brouser-----");
I_D.style.color='red';

I_D.style.background='gray';

console.log("--- ----- Manipulating Text and Content -----");

I_D.textContent=' It replaced the existing content header';

I_D.innerHTML='Head';

I_D.textContent;
console.log("---type on console 'I_D.textContent;' it will close the brouser-----");
console.log("---type on console 'I_D.innerHTML;' it will close the brouser-----");

function change(id) {
    id.innerHTML="Clicked";
}

console.log("---type on console 'var button = document.getElementById('btn');btn.addEventListener('click', function(){console.log('Butten Was Clicked');}) repace duble quots with single quots");
console.log("---type on console 'var lis=document.querySelectorAll('li') repace duble quots with single quots");
console.log("---type on console 'for (var i=0;i<lis.length;i++){lis[i].addEventListener('mouseover',function(){this.style.color='oink'});}repace duble quots with single quots");

console.log("---nested function ---");
function paren(){
    var x=10;
    function child()
    {
        console.log(x+10);
    }
    return child;
}

paren()();
function pren(gf){
    var x=10;
    return function(f)
    {
        return function(s){
        console.log(`${gf}-- ${f}-- ${s}`);
        }
    }
}

pren('aaa')('bbb')('ccc');
console.log("---using arrow  function ---");

let f1=(gf)=>(f)=>(s)=> console.log(`${gf}-- ${f}-- ${s}`);
f1('aaaaaa')('bbsasb')('ccadfsasc');

console.log("---Advanced function  currying---");

let mult=(a,b)=> a*b;

let curriedMultiply=(a)=>(b)=>a*b;

curriedMultiply(5,5);

let mul =function(x,y)
{
    console.log(x*y);
}
let mulBy10=mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);

let mull =(x)=>(y)=> console.log(x*y);
let mul10=mull(10);
mulBy10(10);
mulBy10(8);
mulBy10(9);

console.log("---Promis---");
const p=new Promise((resolve,reject)=>{
    if (true)
    resolve("it worked");
    else 
    reject("it did not work ")
})
console.log(p);
/*const pp=new Promise((resolve,reject)=>{
    if (false)
    resolve("it worked");
    else 
    reject("it did not work ")
})
//pp.then(result+ "haha ").catch(result=> result+" hehe")
//console.log(pp);*/
console.log("---map---");

let xz=2;
const add=(y)=>{
    return xz+=y;
};
console.log(add(6));

let arraay=[1,2,3,4];
let newarr=arr.map(num=>num*6)
console.log(newarr);

console.log("---map var---");
let arraaay=[1,2,3,4];
let newaarr=arr.map(num=>num>2)
console.log(newaarr);
console.log("---filter---");
let rraaay=[1,2,3,4];
let ewaarr=arr.filter(num=>num>2)
console.log(ewaarr);
console.log("---reduce---");

let c_arr=[10,20,2,30,40,4];
let redarr=c_arr.reduce((acc,num)=> acc+num,100);
console.log(redarr);

