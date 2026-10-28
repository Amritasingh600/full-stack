var array = [1, 2, 3, 4, 5];

array[0] = 10;
array = [1, 20, 30, 40, 50];
//array.push(6);
console.log(array);

var arr = [1, "hello", 3, null, true, undefined, { name: "John", age: 30 }];

arr.push(6);
console.log(arr);

var num = 121;
var a=num;
var b=0;
function anagram(a) {
    b=b+a%10*a%10;
    a=Math.floor(a/10);
}
while(a>0){
    anagram(a);
}
if(num==b){
    console.log("Anagram");
}
else{
    console.log("Not Anagram");
}


// ----------------------------------------------
let num=153;
let temp=num;
let digits=[1, 2, 3, 4, 5];
let sum=0;
for(let i=0;i<digits.length;i++){
    sum+=digits[i];
}   





