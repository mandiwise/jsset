/**
 * jsset 0.1.0
 * (c) 2017 Mandi Wise
 * MIT licensed
 */

/**
 * Union helper
 * 
 * @param {...Set} sets n Sets to combine.
 * @returns {Set} The combined set.
 */

function createSetUnion(...sets) {
  return sets.reduce((acc, set) => new Set([...acc, ...set]));
}

/**
 * Union prototype method
 * 
 * @param {...Set} sets n Sets to combine.
 * @returns {Set} A new set of unique combined values.
 */

Set.prototype.union = function(...sets) {
  const allSetsArr = sets.concat(this);
  return createSetUnion(...allSetsArr);
};

/**
 * Intersection prototype method
 * 
 * @param {...Set} sets n Sets to intersect.
 * @returns {Set} A new set of intersecting values.
 */

Set.prototype.intersection = function(...sets) {
  const arrOfSets = sets.concat(this).map(set => [...set]);

  const shortest = arrOfSets.reduce((acc, curr) => {
    return acc.length > curr.length ? curr : acc;
  }, { length: Infinity });

  return new Set(shortest.filter(val => arrOfSets.every((arr) => arr.includes(val))));
};

/**
 * Set difference prototype method
 * 
 * @param {...Set} sets n Sets to diff.
 * @returns {Set} A new set with elements in the set that are not in the others.
 */

Set.prototype.setDifference = function(...sets) {
  const setOfOtherSets = createSetUnion(...sets);
  return new Set([...this].filter(val => !setOfOtherSets.has(val)));
};

/**
 * Relative complement prototype method
 * 
 * @param {...Set} sets n Sets to diff.
 * @returns {Set} A new set with elements from other sets that are not in the set.
 */

Set.prototype.relativeComplement = function(...sets) {
  const setOfOtherSets = createSetUnion(...sets);
  return new Set([...setOfOtherSets].filter(val => !this.has(val)));
};

/**
 * Symmetric difference prototype method
 * 
 * @param {...Set} sets n Sets to diff.
 * @returns {Set} A new set with elements in either the set or other but not both.
 */

Set.prototype.symmetricDifference = function(...sets) {
  return [...sets].reduce((acc, set) => {
    return [...set].reduce((innerAcc, val) => {
      // console.log(acc, innerAcc, `About to check ${val}...`)
      innerAcc.has(val) ? innerAcc.delete(val) : innerAcc.add(val);
      return innerAcc;
    }, acc);
  }, this);
};

/**
 * Subset prototype method
 * 
 * @param {Set} set Set to check against.
 * @returns {Boolean} True if the set is a subset of the passed set.
 */

Set.prototype.isSubset = function(superset) {
  return [...this].every(val => superset.has(val));
};

/**
 * Superset prototype method
 * 
 * @param {Set} set Set to check against.
 * @returns {Boolean} True if the set is a superset of the passed set.
 */

Set.prototype.isSuperset = function(subset) {
  return [...subset].every(val => this.has(val));
};
