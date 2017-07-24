# jsset

A tiny library for extending the JavaScript Set prototype with methods for common set operations.

## About

This library is mostly a thought experiment in using various array methods (primarily `reduce` and `filter`, no explicit `for` loops) to extend the ES2015 `Set` built-in set object.

Disclaimer: I don't have a Math/Stats/CompSci/etc. degree, so there's almost certainly places to improve the time complexity of some of these operations. Contributions are welcome.

## Usage

```js
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);
let setC = new Set([7, 8, 9, 10]);
let setD = new Set([1, 10, 3]);
let setE = new Set([3, 4]);

/**
 * Union method 
 */

setA.union(setB, setC, setD);
// returns Set { 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 }

/**
 * Intersection method
 */

setA.intersection(setB, setD);
// returns Set { 3 }

/**
 * Set difference method
 */

setA.setDifference(setB, setD);
// Set { 2 }

/**
 * Relative complement method
 */

setA.relativeComplement(setB, setD);
// Set { 5, 6, 10 }

/**
 * Symmetric Difference method
 */

setA.symmetricDifference(setB, setC, setD);
// returns Set { 2, 5, 6, 7, 8, 9 }

/**
 * Subset method
 */

setE.isSubset(setA);
// returns true

/**
 * Superset method
 */

setB.isSuperset(setE);
// returns true
```

## License

This program is free software and is distributed under an MIT License.
