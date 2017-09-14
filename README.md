# JavaScript Filter Lab

## Overview

In this lab, we'll use the `filter` method to write functions that properly query our data.

## Instructions

In this lab we are given arrays with various information about drivers.  We need to write methods using the `filter` method so that Scuber employees can easily query the data.  Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve.

You'll be writing four functions:

 * `findMatching`- this function takes our array of `drivers` and a `string` to then return the matching list of drivers.  The function should be case insensitive.  
 * `fuzzyMatch` - This function also takes arguments of an array of `drivers` and a `string` for querying the array.  The function should return all drivers whose names begin with the provided letters.
 * `matchName` = This function takes `drivers` array and a `string` to then return the matching list of drivers.  In this method, each element of the `drivers` array is a JavaScript object that has a property of `name`.  The function should return each element whose `name` property matches the provided `string`.

## Resources

- [MDN: Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-looping-and-iteration-filter-lab'>Javascript Filter Lab</a> on Learn.co and start learning to code for free.</p>
