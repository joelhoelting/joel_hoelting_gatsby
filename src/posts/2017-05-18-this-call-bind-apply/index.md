---
path: '/javascript-call-apply-bind'
date: '2017-05-17'
title: "Javascript - .call(), .apply(), .bind()"
published: true
---

These three methods allow us to connect Javascript objects to existing methods that we've written. They each perform a similar task but they have subtle differences in how they are utilized.

Let's first create an object and a function.

```javascript

var obj = {number: 11}

var addNumbers = function(a,b,c) {
 return this.number + a + b + c;
};

```

Here we have an object with a property of `number`, with a value of 11. We also have a function that takes `this.number` and adds it to three numbers that will be inserted as arguments. `This` will take functional scope and will be the object we pass to the function when we use call, apply and bind.

## .call()

"The call() method calls a function with a given this value and arguments provided individually." ([Call - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call))

First, we are going to call our method. We will then pass in our object and the three required arguments.

```javascript

var obj = {number: 11}

var addNumbers = function(a,b,c) {
 return this.number + a + b + c;
};

>addNumbers.call(obj,2,3,4)
20

```

## .apply()

"The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object). ([Apply - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply))

.apply() is basically the same as .call(). The notable difference is that instead of passing in individual arguments, .apply() takes an argument of an array.

```javascript

var array = [2,4,6]

var obj = {number: 11}

var addNumbers = function(a,b,c) {
 return this.number + a + b + c;
};

>addNumbers.apply(obj,array)
23

```

## .bind()

"The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.). ([Bind - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind))

When we pass in our object using `.bind` we will get a new function that will require the arguments from our original function minus the object, which will be passed in automatically.

```javascript

var obj = {number: 11}

var addNumbers = function(a,b,c) {
 return this.number + a + b + c;
};

var bindObject = addNumbers.bind(obj)

> bindObject(1,2,3)
17

```
