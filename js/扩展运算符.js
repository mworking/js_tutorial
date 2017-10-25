/*** 解构*****************************
 *
 * 解构的作用是可以快速取得数组或对象当中的元素或属性，而无需使用arr[x]或者obj[key]等传统方式进行赋值
 *
 * */

/* *数组解构赋值*/
var array = ['this is a string', 2, 3];

// 传统的方式
var a = array[0], b = array[1], c = array[2];

// 解构赋值， 简洁
var [a, b, c] = array;

console.log(a); // this is a string
console.log(b); // 2
console.log(c); // 3

/* *嵌套数组解构*/
var array = [[1,2,[3,4]],5,6];
var [[d,e,[f,g]],h,i] = array;
console.log(d); // 1
console.log(f); // 3
console.log(i); // 6

/* *函数传参解构：*/
var array = ['this is a string', 2, 3];
function fn1([a,b,c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

fn1(array);
//this is a string
//2
//3

/* *for 循环解构*/
var array = [[11,12],[21,22],[31,32]];
for (let [a,b] of array){
    console.log(a);
    console.log(b);
}
//11
//12
//21
//22
//31
//32

/* *对象赋值解构*/
var obj = {
    name:'chris',
    sex:'male',
    age:'28',
    son:{
        sonname:'apple',
        sonsex:'male',
        sonage:1
    }
};

var {name,sex,age,son} = obj;
console.log(name + " " + sex + " " + age);   //chris male 28
console.log(son);       //{sonname: "apple", sonsex: "male", sonage: 1}


/* 对象传参解构*/
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        sonname: '大熊',
        sonsex: 'male',
        sonage: 1
    }
};

function fn2({sex, age, name}) {
    console.log(name + " " + sex + " " + age)
}

fn2(obj);   //chris male 26

/* 变量名与对象属性名不一致解构*/
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26
};
var {name: nickname, age: howold} = obj;
console.log(nickname + ' ' + howold); //chris 26

/*嵌套对象解构：*/
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        sonname: '大熊',
        sonsex: 'male',
        sonage: 1
    }
};
var {name, sex, age, son: {sonname, sonsex, sonage}} = obj;
console.log(sonname + ' ' + sonsex + ' ' + sonage);
//大熊 male 1

//Babel暂不支持这种嵌套解构
obj = {
    name: 'chris',
    sex: 'male',
    age: [1, 2, 3]
}

var {name, sex, age: [a, b, c]} = obj;
console.log(c);

/*嵌套对象属性重名，解构时需要更改变量名：*/
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        name: '大熊',
        sex: 'male',
        age: 1
    }
};
//赋值解构
var {name: fathername, son: {name, sex, age}} = obj;
console.log(fathername); //chris
console.log(name); //大熊

//传参解构
function fn3({sex, age, name, son: {name: sonname}}) {
    console.log(name + ' ' + sex + ' ' + age + ' ' + sonname);
}

fn3(obj);
//chris male 26 大熊

/*循环解构对象：*/
var arr = [{name: 'chris', age: 26}, {name: 'jack',    age: 27}, {name: 'peter',age: 28}];

for (let {age, name} of arr) {
    console.log(name + ' ' + age);
}
//chris 26
//jack 27
//peter 28

/*解构的特殊应用场景*/
//变量互换
var x = 1,
    y = 2;
var [x, y] = [y, x];
console.log(x); //2
console.log(y); //1

//字符串解构
var str = 'love';
var [a, b, c, d] = str;
console.log(a);//l
console.log(b);//o
console.log(c);//v
console.log(d);//e


/*** 扩展运算符*****************************
 *
 * 扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值
 *
 * */

var foo = function (a,b,c) {
    console.log("a: " + a + " b: " + b + " c: " + c);
}

var arr = [1, 2, 3]

// 传统写法
foo(arr[0],arr[1],arr[2]);

//扩展运算符
foo(...arr)


/* **特殊应用场景*/

//数组的深拷贝
var arr2 = arr;
var arr3 = [...arr];
console.log(arr === arr2);  //true, 说明arr和arr2指向同一个数组
console.log(arr === arr3);  //false, 说明arr3和arr指向不同数组

//把一个数组插入另一个数组字面量
var arr4 = [...arr,4,5,6];
console.log(arr4);  // [1, 2, 3, 4, 5, 6]

//字符串转数组
var str = 'Hello';
var arr5 = [...str];

console.log(arr5);  // ["H", "e", "l", "l", "o"]


/*** rest运算符*****************************
 *
 * rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组
 *
 * */

//主要用于不定参数，所以ES6开始可以不再使用arguments对象
var bar = function (...args) {
    for (let el of args){
        console.log(el)
    }
}

bar(1,2,3,4);
//1
//2
//3
//4

bar = function (a, ...args) {
    console.log(a);
    console.log(args);
}

bar(1,2,3,4);
// 1
// [2, 3, 4]



























