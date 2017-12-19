
/* *
 * Javascript 创建对象方法的总结
 * 分别列举
 *
 * */

//1. 使用Object构造函数来创建一个对象，下面代码创建了一个person对象，并用两种方式打印出了Name的属性值。
var person = new Object();
person.name = "kevin";
person.age = 31;

console.log(person.name);
console.log(person["name"]);

// 2. 使用对象字面量创建一个对象；不要奇怪person["5"],这里是合法的；另外使用这种加括号的方式字段之间是可以有空格的如person["my age"].
var person = {
    name: "Kevin",
    age: 31,
    5: "Test"
};
console.log(person.name);
console.log(person["5"]);

// 3. 使用工厂模式创建对象,返回带有属性和方法的person对象。
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = 31;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

createPerson("kevin", 31, "age").sayName();

//4. 使用自定义构造函数模式创建对象；这里注意命名规范，作为构造函数的函数首字母要大写，
// 以区别其它函数。这种方式有个缺陷是sayName这个方法，它的每个实例都是指向不同的函数实例，而不是同一个。
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var person = new Person("kevin","31","SE");
person.sayName();

// 5. 使用原型模式创建对象；解决了方法4中提到的缺陷，使不同的对象的函数（如sayFriends）指向了同一个函数。
// 但它本身也有缺陷，就是实例共享了引用类型friends，从下面的代码执行结果可以看到，两个实例的friends的值是一样的，这可能不是我们所期望的。
function PersonT() {

}

PersonT.prototype = {
    constructor : Person,
    name:"kevin",
    age:31,
    job:"SE",
    friends:["Jams","Martin"],
    sayFriends:function () {
        console.log(this.friends);
    }
};

var person1 = new PersonT();
person1.friends.push("Joe");
person1.sayFriends(); //["Jams", "Martin", "Joe"]
var person2 = new PersonT();
person2.sayFriends(); //["Jams", "Martin", "Joe"]

// 如下方法使用最为广泛
// 6. 组合使用原型模式和构造函数创建对象，解决了方法5中提到的缺陷，而且这也是使用最广泛、认同度最高的创建对象的方法。
function PersonC(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["James","Martin"];
}

PersonC.prototype.sayFriendsC = function () {
    console.log(this.friends);
}

var person3 = new PersonC("kevin",31,"SE");
var person4 = new PersonC("Tom",30,"SE");
person3.friends.push("Joe");
person3.sayFriendsC();  //"James", "Martin", "Joe"]
person4.sayFriendsC();  //["James", "Martin"]

// 7. 动态原型模式；这个模式的好处在于看起来更像传统的面向对象编程，具有更好的封装性，因为在构造函数里完成了对原型创建。
// 这也是一个推荐的创建对象的方法。
function PersonD(name,age,job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Jams","Martin"];
    // 方法
    if(typeof this.sayNameD != "function"){
        PersonD.prototype.sayNameD = function () {
            console.log(this.name);
        };
        PersonD.prototype.sayFriendsD = function () {
            console.log(this.friends);
        };
    }
}

var person5 = new PersonD("kevin",31,"SE");
person5.sayNameD(); //kevin
person5.sayFriendsD();  //["Jams", "Martin"]












