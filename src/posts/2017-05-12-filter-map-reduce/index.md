---
path: '/javascript-filter-map-reduce'
date: '2017-05-12'
title: "Javascript - .filter(), .map(), .reduce()"
published: true
---

Parsing and manipulating objects and arrays in any programming language is a crucial skill for any web developer. Most programming languages offer different methods and tools for sorting, changing and displaying data.

Three of the most powerful methods for playing with Javascript arrays are `.filter()`, `.map()` and `.reduce()`. Each of these methods can be called on an array to either change array elements, consolidate object properties, filter out objects or for essentially any other reason that you can imagine.

Let's look at the following two arrays, one pretty simple and the other is an array filled with objects. Make sure to refer back to these arrays as you read on.

```javascript
var emotions = ['happy', 'sad', 'anxious', 'shocked', 'scared', 'excited', 'emo'];

const sandwiches = [
  {
    ingredients: ['tomato', 'lettuce', 'apples'],
    cost: 10,
    name: 'Apple Surprise',
    vegan: true
  },
  {
    ingredients: ['turkey', 'bacon', 'pastrami'],
    cost: 20,
    name: 'Mounds of Meat',
    vegan: false  
  },
  {
    ingredients: ['spinach', 'hummus', 'pesto', 'lettuce'],
    cost: 30,
    name: 'Pesto Pontification',
    vegan: true
  },
  {
    ingredients: ['mango', 'pineapple', 'avocado'],
    cost: 20,
    name: 'Fruit Fandango',
    vegan: true
  },
  {
    ingredients: ['hummus', 'bean sprouts', 'cucumbers'],
    cost: 15,
    name: "Hummus n' Sprouts",
    vegan: true
  },
  {
    ingredients: ['bacon', 'lettuce', 'tomato'],
    cost: 50,
    name: 'Butchery Loves Torture',
    vegan: false
   }
]
```
<br>
<h2>.filter()</h2>

"The filter method creates a new array with all elements that pass the test implemented by the provided function." ([Filter - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example))

Let's say we want to create an array filled with emotions that are greater than a length of three letters. In other words, we want to set a **filter** for all words that are greater than 3 letters.

```javascript
const longWords = emotions.filter(function(emotion) {
  return emotion.length > 3
})

>longWords
[ 'happy', 'anxious', 'shocked', 'scared', 'excited' ]
```

The `longWords` constant now returns an array of words that are greater than three words. In this new array, 'sad' and 'emo' have been filtered out.

Now let's create a filter for our more-complex array of sandwiches. Let's say we want to return an array of vegan-only sandwiches.

```javascript
const veganSandwiches = sandwiches.filter(function(sandwich) {
  return sandwich.vegan == true
})

> veganSandwiches
[ { ingredients: [ 'tomato', 'lettuce', 'apples' ],
    cost: 10,
    name: 'Apple Surprise',
    vegan: true },
  { ingredients: [ 'spinach', 'hummus', 'pesto', 'lettuce' ],
    cost: 30,
    name: 'Pesto Pontification',
    vegan: true },
  { ingredients: [ 'mango', 'pineapple', 'avocado' ],
    cost: 20,
    name: 'Fruit Fandango',
    vegan: true },
  { ingredients: [ 'hummus', 'bean sprouts', 'cucumbers' ],
    cost: 15,
    name: 'Hummus n\' Sprouts',
    vegan: true } ]
```

Final example: let's say we want an array filled with sandwiches that have lettuce as one of their ingredients. We can use Array.prototype.includes() to accomplish that.

```javascript
const hasLettuce = sandwiches.filter(function(sandwich) {
  return sandwich.ingredients.includes('lettuce')
})

> hasLettuce
[ { ingredients: [ 'tomato', 'lettuce', 'apples' ],
    cost: 10,
    name: 'Apple Surprise',
    vegan: true },
  { ingredients: [ 'spinach', 'hummus', 'pesto', 'lettuce' ],
    cost: 30,
    name: 'Pesto Pontification',
    vegan: true },
  { ingredients: [ 'bacon', 'lettuce', 'tomato' ],
    cost: 50,
    name: 'Butchery Loves Torture',
    vegan: false } ]
```

The take away: unlike `.map()` and `.reduce()`, with `.filter()` we aren't changing or manipulating the elements of an array. Instead, we put a filter on an existing array and return a new array filled with elements that meet a certain criteria.

<br>
<h2>.map()</h2>

"The map() method creates a new array with the results of calling a provided function on every element in the calling array." ([Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example))

With `.map()` we are manipulating the elements themselves and returning a brand new array.

```javascript
const changeEmotions = emotions.map(function(emotion) {
  return "I am feeling " + emotion
})

> changeEmotions
[ 'I am feeling happy',
  'I am feeling sad',
  'I am feeling anxious',
  'I am feeling shocked',
  'I am feeling scared',
  'I am feeling excited' ]
```

Or let's say the cost of each of our sandwiches increases by 5 dollars due to a sagging economy:

```javascript
const increaseCosts = sandwiches.map(function(sandwich) {
  return {
    ingredients: sandwich.ingredients,
    cost: sandwich.cost + 5,
    name: sandwich.name,
    vegan: sandwich.vegan
  }
})

> increaseCosts
[ { ingredients: [ 'tomato', 'lettuce', 'apples' ],
    cost: 15,
    name: 'Apple Surprise',
    vegan: true },
  { ingredients: [ 'turkey', 'bacon', 'mayonaisse' ],
    cost: 25,
    name: 'Meat Makes Me Mad',
    vegan: false },
  { ingredients: [ 'spinach', 'hummus', 'pesto', 'lettuce' ],
    cost: 35,
    name: 'Pesto Pontification',
    vegan: true },
  { ingredients: [ 'mango', 'pineapple', 'avocado' ],
    cost: 25,
    name: 'Fruit Fandango',
    vegan: true },
  { ingredients: [ 'hummus', 'bean sprouts', 'cucumbers' ],
    cost: 20,
    name: 'Hummus n\' Sprouts',
    vegan: true },
  { ingredients: [ 'bacon', 'lettuce', 'tomato' ],
    cost: 55,
    name: 'Butchery Loves Torture',
    vegan: false } ]

```

The take away: with `.map()` we are manipulating elements in an array and returning a new array with the manipulated elements.

##reduce()

"The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value." ([Reduce - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example))

Reduce is more aimed at consolidating elements or element properties into one value. However, `.reduce()` is extremely powerful and can be used similarly to `.map()`.

Example 1: We can combine all of our emotions into one super-string.

```javascript
const superEmotions3 = emotions.reduce(function(all, emotion, index) {
  if (index === emotions.length - 1) {
    return all + " and " + emotion
  }
  return all + ", " + emotion
})

> superEmotions3
'happy, sad, anxious, shocked, scared, excited and emo'
```

Example #2: Consolidation is more useful when we want to add numbers together. For example, let's say we want to find the total cost of all of our sandwiches. Also note that we are setting a starting value of sum = 0 after the anonymous function. That number can be set to any starting number if you'd rather not start at 0. `.reduce()` will then iterate over the array and add the cost of each element to the total sum.

```javascript
const totalSandwichCosts = sandwiches.reduce(function(sum, sandwich, index) {
  return sum + sandwich.cost
}, 0)

> totalSandwichCosts
145
```

The initial value that you set can be anything (it doesn't have to be zero). For example we can take an array and get a new object by making the starting value equal to `{}`. We can easily make this starting value `[]` and the new return value will be an array instead of an object. In the below example I am using `.reduce()` to create one object with the sandwich names as the keys and the array of ingredients as the value of each key.

```javascript
const sandwichObject = sandwiches.reduce(function(all, sandwich, index) {
  all[sandwich.name] = sandwich.ingredients
  return all
}, {})

> sandwichObject
{ 'Apple Surprise': [ 'tomato', 'lettuce', 'apples' ],
  'Meat Makes Me Mad': [ 'turkey', 'bacon', 'mayonaisse' ],
  'Pesto Pontification': [ 'spinach', 'hummus', 'pesto', 'lettuce' ],
  'Fruit Fandango': [ 'mango', 'pineapple', 'avocado' ],
  'Hummus n\' Sprouts': [ 'hummus', 'bean sprouts', 'cucumbers' ],
  'Butchery Loves Torture': [ 'bacon', 'lettuce', 'tomato' ] }
```

Example 3: And finally, lets get the total cost of all of our sandwiches.

```javascript
const totalSandwichCosts = sandwiches.reduce(function(sum, sandwich, index) {
  return sum + sandwich.cost
}, 0)

> totalSandwichCosts
145

// In this example I am setting the starting value to 100 so you can see how that works.

const totalSandwichCostsPlusOneHundred = sandwiches.reduce(function(sum, sandwich, index) {
  return sum + sandwich.cost
}, 100)

> totalSandwichCostsPlusOneHundred
245
```

Hopefully you now have some understanding of these three powerful methods and an idea of which situations they might prove useful.
