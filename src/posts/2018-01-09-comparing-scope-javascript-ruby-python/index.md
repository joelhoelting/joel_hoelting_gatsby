---
path: '/comparing-scope-javascript-ruby-python'
date: '2018-01-09'
title: 'Comparing Scope in Javascript, Ruby and Python'
published: true
---

I spend most of my time eating, drinking and breathing JavaScript. I'm either reading and writing code and I've made a habit of reading documentation whenever I'm on the subway. However, I recently made a decision to spend a small amount of time refreshing my Ruby knowledge every day.

I noticed some interesting differences in how each language handles scope. In Javascript, if a variable is declared and assigned in the global namespace it will be accessible to any child function.

Take the following code:

```javascript
var vegetable = 'tomato'

function logVegetable() {
  console.log(vegetable);
}

logVegetable()
// console will log 'tomato'
tomato
```

In Ruby scope is handled differently. A variable that is assigned in the global space will be out of scope for a method defined on the same level.

Take the following code:

```ruby
vegetable = 'tomato'

def print_vegetable
  puts vegetable
end

# Calling print_vegetable will fail with an error due to the variable being out of scope
print_vegetable

NameError: undefined local variable or method 'vegetable' for main:Object
```

The method will only be able to access the variable if we pass it in as an argument:

```ruby
vegetable = 'tomato'

def print_vegetable(vegetable)
  puts "#{vegetable}"
end

print_vegetable(vegetable)
# Now 'tomato' will print

tomato
```

Another way to access variables outside the scope of a method is using instance and class variables. Simply prepend `@` or `@@` to the beginning of a variable declaration and the variable will be available inside the method. For example: `@vegetable = 'tomato'`. However, it is important to understand best practices for using instance/class variables before using them.

How do you think Python handles scope?

Like Javascript, Python will know about the variable assigned in global space:

```python

x = 5

def math():
  print(x + 3)

>>> math()
# math() returns 8
8
