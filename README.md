# Filter Lab

## Problem Statement

The `filter` method is one of the core iterator methods in JavaScript. It's a powerful
tool for reducing a set of data into a set of data _you want_.

## Objectives

1. Use `filter` to work with `String`s as well as `Object`s
2. Write a function to case-insensitively match `string`s
3. Write a function to partially match substrings
4. Write a function to match `object` values to a provided `string`

## Use `filter` to work with `String`s as well as `Object`s

This lab contains an array of drivers with various information. We need to
write methods using the `filter` method so that Scuber employees can easily
query the data. Be sure to run the tests to get a feel for the types of
problems this lab is asking you to solve _before_ you start writing JavaScript
code.

## Write a Function To Case-insensitively Match `string`s

Write `findMatching`- This function takes an array of `drivers` and a `string`
as arguments, and returns the matching list of drivers. The function should be
case insensitive.

## Write a Function To Partially Match Substrings

Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
as arguments for querying the array, and returns all drivers whose names begin
with the provided letters.

## Write a Function To Match `object` Values To a Provided `string`

Write `matchName` - This function takes an array of `drivers` and a `string` as
arguments. In this function, each element of the `drivers` array is a
JavaScript object that has a property of `name`. The function should return
each element whose `name` property matches the provided `string` argument.

## Conclusion

While its simple truthy / falsey "testing" of each element in a collection is
conceptually simple, the power of rejecting or selecting the things you want
(or don't want) from a set is an awesome capability. Further, that `filter`
returns an `Array` means that you can apply `map` or `reduce` immediately
after e.g.

```js
students.filter( s => !!s.permissionSlip && s.isVegetarian)
  .reduce( (orders, s) => orders.push(s.preferredMeal), [])`

// => "What are the preferred meals for vegetarian students who are allowed to
go on the field trip?"
```

means you can write terse code that loses little expressivity.

## Resources

- [MDN: Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-looping-and-iteration-filter-lab'>Filter Lab</a> on Learn.co and start learning to code for free.</p>
