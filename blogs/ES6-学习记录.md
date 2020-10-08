---
title: ES6 学习记录
date: 2020-10-07
categories:
- 👨‍💻 编程
tags:
- ES6
---

## let const

`let` 用于声明变量,会形成局部作用域，不存在变量提升
`const` 用于声明常量，引用类型只是地址不发生变化，而不是至不发生变化。

```js
for(var i = 0;i<4;i++){
    console.log(i)
}
// 0 1 2 3 4
console.log(i)
for(let j = 0;j<4;j++){
    console.log(j)
}
console.log(j)
// 0 1 2 3
// ReferenceError: j is not defined
```

```js
const a = []
a.push(1) // 内容改变
console.log(a);
// [1]
let b = []
a = b //地址改变
// TypeError: Assignment to constant variable.
```

## 解构赋值

数组和字符串根据 `index` 解构
对象根据 `key` 解构
解构项为 `undefined` 允许使用 `=` 提供默认值
变量声明后再解构，需要加 `()` 转化为表达式

```js
// 数组按index解构按
let [a,b,c=3] = [1,2]
console.log(a,b,c);
// 1 2 3
// 对象按 key 解构
let {foo,bar='bar'}={foo:'foo'}
console.log(foo,bar)
// foo bar
// 字符串按 index 解构
let [d,e,f,g='g'] = 'def'
console.log(d,e,f,g)
// d e f g
// 如果解构项目为 undefined 都允许使用=提供默认值
let [h,i=2]=[1,undefined]
console.log(h,i)
// 1，2
let [j,k=2]=[1,null]
console.log(j,k)
// 1 null JavaScript中null的类型为对象
// 先声明再解构赋值，需要再赋值表达式外加括号
let name;
({name}={name:'xifan'})
console.log(name);
// name
```

## `...` 运算符

`...` 在函数中称为rest运算符,将参数序列转换为数组。
`...` 将一个数组转为用逗号分隔的参数序列。

```js
function a(a,...rest) {
    // 打印除第一个参数之外的参数数组，适合参数不确定的场景
    console.log(rest)
}
a(1,2,3,4,5)
// [2,3,4,5]
let b = [6,7,8]
// 扩展运算符可用来复制数组
let c = [...b]
console.log(b,...c)
// 等同于，console.log(b,6,7,8)
// [6,7,8] 6 7 8
```

## String

### 模板字符串

模板字符串，即用反引号包裹可使用 `$` 嵌套变量的字符串，相比传统的字符串拼接，其更简单易读。

```js
let xifan = '稀饭'
console.log(`你好，${xifan}`)
// 你好，稀饭
```

### 字符串扩展

```js
let str = 'hello world'
// 检测字符串中是否包含
console.log(str.includes('o'))
// true
// 检测是否为起始字符
console.log(str.startsWith('h'))
// true
// 检测是否为结束字符
console.log(str.endsWith('h'))
// false
// 重复字符串
console.log(str.repeat(2))
// hello worldhello world
```

## Number

```js
let result = 10/3
// 判断是否为整数
console.log(Number.isInteger(result));
// false
let result2 = 11/"a"
// 判断是否为 NAN
console.log(Number.isNaN(result2))
// true
console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)
// -9007199254740991
// 判断是否为安全整数
let result3 = Math.pow(2,53)
console.log(Number.isSafeInteger(result3))
// false
```

## Array

### 类方法

`Array.from()` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```js
let json = {
    0:1,
    1:2,
    2:3,
    length:3
}
console.log(Array.from(json))
// [ 1, 2, 3]

```

`Array.of()` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

```js
console.log(Array.of(1,2,3))
// [ 1, 2, 3 ]
```

### 实例方法

`arr.find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

```js
let arr = [1,2,3,4,5,6]
console.log(arr.find(item=>item>5));
// 6
```

`arr.fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引

```js
let arr = [1,2,3,4,5,6]
console.log(arr.fill（0）);
// [ 0, 0, 0, 0, 0, 0 ]
```

### 数组循环

```js

let arr = [1,2,3,4,5,6]
for(let item of arr){
    console.log(item);
}
// 1 2 3 4 5 6

for(let [index,item] of arr.entries()){
    console.log(`${index}:${item}`);
}
// 0:1 1:2 2:3 3:4 4:5 5:6

// 也可用于对象键值对遍历
let obj = {name:"xifan",age:25}
for(let[k,v] of Object.entries(obj)){
    console.log(`${k}:${v}`);
}
// name:xifan age:25
```

## 箭头函数

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 `this`，`arguments`，`super`或 `new.target`。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。

```js
let add = (a,b)=>{
    console.log(this);
    return a+b
}
add(1,2)
// 3
// 当参数为一个时，可省略（）
// 当{}语句为依据时可省略{}
```

## in

`in` 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true

```js
let obj = {foo:'bar'}
let arr = [,,,]
console.log('foo' in obj)
// true
// 判断数组是否为空
console.log(0 in arr);
// false
```

## Object

### 赋值

```js
let name = '稀饭'
let age = 25
let obj = {name:name,age:age}
// 当键名与变量名相同时可简写
let es6obj = {name,age}
console.log(obj,es6obj);
// { name: '稀饭', age: 25 } { name: '稀饭', age: 25 }
```

### 构建键名

即可以使用变量为键名

```js
let key = 'name'
let obj = {
    [key]:'稀饭'
}
console.log(obj);
// { name: '稀饭' }
```

### 对象方法

```js
let obj = {
    add:function(a,b){
        return a+b
    },
    // 简写
    addNew(a,b){
        return a+b
    }
}
console.log(obj.add(1,2),obj.addNew(1,2));
// 3 3
```

### 类方法

```js
let a = {name:'xifan'}
let b = {age:25}
let c = {hobby:'comedy'}
// Object.assign 合并对象
console.log(Object.assign(a,b,c));
// { name: 'xifan', age: 25, hobby: 'comedy' }
// Object.is() 方法判断两个值是否是相同的值。
let d = a
console.log(Object.is(a,d));
// true
// == 比较前会隐式转换
// === 同值相等
// Object.is() 严格相等
console.log(+0===-0);
// true
console.log(NaN===NaN);
// false
console.log(Object.is(+0,-0));
// false
console.log(Object.is(NaN,NaN));
// true
```

## Symbol

每个从`Symbol()` 返回的 `symbol` 值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。`Symbol`函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
let name = Symbol('name')
let obj = {
   [name]:'xifan',
   age:25
}
console.log(name);
// Symbol(name)
console.log(Symbol('name')==name);
// false
// 每次生成的值不同
console.log(obj[name]);
// xifan
for (let key in obj){
    console.log(key);
}
// age Symbol 对对象属性有保护作用
```

## Set WeakSet

### Set

```js
// 声明
let set = new Set([1, 2, 3, 4, 4])
console.log(set);
// Set { 1, 2, 3, 4 }
// Set 类型元素不允许重复

// 增
set.add(5)
console.log(set);
// Set { 1, 2, 3, 4, 5 }

// 删
set.delete(5)
console.log(set);
// Set { 1, 2, 3, 4 }

// 删除所有
// set.clear()
// console.log(set);
// Set {}

// 查
console.log(set.has(5));
// false

// 查长度
console.log(set.size);
// 4

// 遍历
for (let item of set) {
    console.log(item);
}
// 1 2 3 4

set.forEach(item => {
    console.log(item)
})
// 1 2 3 4

```

### WeakSet

```js
// 声明
let weakSet = new WeakSet()

// 增
let obj = {name:'xifan',age:25}
weakSet.add(obj)
console.log(weakSet)

// 查
console.log(weakSet.has(obj))
// true

// 删
weakSet.delete(obj)
```

> WeakSet 存在于需要考虑生命周期防止内存泄漏的地方。

:::warning 重要提示

目前未接触到常用场景，待回顾

:::

## Map

`Map` 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

```js
// 声明
let map = new Map()
let keyobj = {name:'xifan',age:25}

// 增
map.set(keyobj,'稀饭')
console.log(map);
// Map { { name: 'xifan', age: 25 } => '稀饭' }

// 查
// map.get(key) 查值
// map.has(key) 查是否存在
// map.size 查长度

// 删
// map.delete(key) 删除指定值
// map.clear() 删除所有
```

---

剩余知识点还有 `proxy` 、`promise` 、`class` 、`import/export` , `proxy` 与 装饰器的区别还是不够清晰，`class` 及 `import/export` 在许多项目中都有使用相对比较熟悉，`promise` 的异步出力，后面结合 `async/await` 再写一篇。

