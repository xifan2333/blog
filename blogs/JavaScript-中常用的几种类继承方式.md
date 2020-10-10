---
title: JavaScript 中常用的几种类继承方式
date: 2020-10-10
categories:
- 👨‍💻 编程
tags:
- 继承
- 类
- JavaScript
---
:::tip 摘要

- 原型链继承
- 寄生组合式继承
- ES6 class继承与 ES5 继承异同

:::

## 原型链继承

原型链继承即将子类原型指向父类实例。

```js
function Parent(){
        this.nums = [1,2,3,4]
    }
    function Child() {

    }
    Child.prototype = new Parent()
    Child.prototype.constructor = Child

    var c1 = new Child()
    var c2 = new Child()
    c1.nums.push(5)
    console.log(c1.nums,c2.nums);
    // [1,2,3,4,5] [1,2,3,4,5]
```

如代码所示，原型链继承的缺点是:

:::warning 缺点

1. 所有子类共享父类的实例属性，当属性为引用值类型时，牵一发而动全身。
2. 没有办法在不影响所有对象实例的前提下给父类的构造参数传参。

:::

## 寄生组合式继承

寄生组合是继承是 ES5 中最理想的继承方式。

```js
function Parent(){
        this.nums = [1,2,3,4]
    }
    Parent.prototype = {
        constructor:Parent,
        log:function(){
            console.log(this.nums);
        }

    }
    function Child() {
        Parent.call(this)

    }
    Child.prototype = Object.create(Parent.prototype)
    // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    Child.prototype.constructor = Child
    var p = new Parent()
    var c1 = new Child()
    var c2 = new Child()
    console.log(p,c1);
    c1.nums.push(5)
    console.log(c1.nums,c2.nums);
```

![JavaScript-中常用的几种类继承方式-2020-10-10-14-16-56](https://images.xifan.fun/JavaScript-中常用的几种类继承方式-2020-10-10-14-16-56.png)

## ES6 中的继承

ES6 中使用 `class` 创建类，`extends` 继承类，`super` 调用父类方法及属性。


```js
class Parent{
        constructor(name,age){
            this.name = name
            this.age = age
        }
        say(){
            console.log(this.name);
        }
    }

    class Child extends Parent{
        constructor(name,age){
            this.name = name
            this.age = age
        }
    }

    let p = new Parent('稀饭',25)
    let c = new Child('憨豆',2)
    console.log(p,c);
    p.say()
    c.say()
```

![JavaScript-中常用的几种类继承方式-2020-10-10-15-11-33](https://images.xifan.fun/JavaScript-中常用的几种类继承方式-2020-10-10-15-11-33.png)

### 与 ES5 继承的异同

:::theorem 《ECMAScript 6 入门》

ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（`Parent.apply(this)`）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

:::

所以，当子类构造函数中不使用 `super()` ,调用 `this` 时会报错。

```js
class Parent{
        constructor(name,age){
            this.name = name
            this.age = age
        }
        say(){
            console.log(this.name);
        }
    }

    class Child extends Parent{
        constructor(name,age){
            this.name = name
            this.age = age
        }
    }

```

![JavaScript-中常用的几种类继承方式-2020-10-10-15-28-46](https://images.xifan.fun/JavaScript-中常用的几种类继承方式-2020-10-10-15-28-46.png)