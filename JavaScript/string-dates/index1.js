//string
const str1="sudaha";
const str2='sanu';
const day=18;
const str3=`strike
is comming on ${day}`;

console.log(str3);

const str4=`hello`;
console.log(str4.length);

//uppercase
console.log(str1.toUpperCase());

const str5=`hello core2web core`;
console.log(str5.indexOf('cow'));

console.log(str5.lastIndexOf('core'));

console.log(str5.substring(2,5));

const a="sudha";
const b="tambe";
const c=a+""+b;
console.log(c);

const user=" sudha ";
console.log(user.trim());

//date
const now =new Date();
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleDateString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());