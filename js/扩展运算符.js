/*** 扩展运算符*/

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