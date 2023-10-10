console.log("connected with js");
var a=1;
var b=2;
console.log("if and else stat");
if(a+b>2)
console.log(a+b);
else if(a+b<1)
console.log(a+b);
else{
console.log(a+b);
console.log("hi");
}
console.log("for");

for (var n=0;n<11;n=n+2){
    console.log(n);
}
console.log("for each");

var a=[2,343,345,456,56,67,7]
a.forEach(ele => console.log(ele));
console.log("for in");

for (var item in a)
console.log(item);

console.log("for of");

for (var item of a)
    console.log(item);

console.log("while loop");
var i=0;
while(i<10) {
   
    console.log(i);
    i+=1
}
console.log("-- do while loop");
var i=0;
do {
   
    console.log(i);
    i+=1;
}while(i<0)

console.log("-- bitwise operator");

var itr=10;
console.log(itr++);
console.log(itr);
var itr=10;
console.log(++itr);
console.log(itr);

console.log("-- bitwise shift operator");
var n1=8,n2=2;
console.log(n1<<n2);
console.log(n1>>n2);
console.log("-- bitwise and operator");
var n1=8,n2=2;

console.log(n1,n2);
console.log(n1&&n2);
console.log("-- bitwise or operator");
var n1=8,n2=2;
console.log(n1,n2);
console.log(n1||n2);
console.log("-- not operator");
var n1=true
console.log("true");
console.log(!n1);

