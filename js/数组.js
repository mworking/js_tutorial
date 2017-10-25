
/**
 *  es6 数组实例中的find() 和 findIndex()
 * */

/*
*
* find()
* 1. 用于找出第一个符合条件的数组成员
* 2. 他的参数是一个回调函数
* 3. 所有数组成员一次执行这个回调函数，知道找出第一个返回值为true的成员，然后返回该成员，如果没有符合条件的成员，就返回undefined
*
* **/

//找出数组中小于0的成员
var test = [1, 2, -4, 6].find( n => n < 0);
console.log(test); // -4

//find方法接受是三个参数，依次为当前成员，当前位置和原数组。
var test_1 = [1, 5, 15, 20, 25].find((value, index, arr) => {
    return value > 20
})
console.log(test_1);    //25


/*
* findIndex()
* findIndex()的方法与find()类似，返回第一个符合条件的数组成员的位置，如果所有的成员都不符合条件，就返回-1
*
* **/

var test_2 = [5,10,15,20].findIndex((value,index,arr) => {
    return value > 10
})
console.log(test_2);    //2

//find()和findIndex()这两个方法都可以接受第二个参数，用来绑定回调函数this对象
//另外，这两个方法都可以发现NaN,你补了数组的indexOf方法的不足
var test_3 = [NaN].indexOf(NaN);
console.log(test_3);    // -1       indexof 无法发现

var test_4 = [1,NaN].findIndex(n => Object.is(NaN,n));
console.log(test_4);    // 1