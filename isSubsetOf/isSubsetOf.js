/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
	
	//first solution where time comlexity is n^2
	// for(var i=0; i< this.length; i++) {
	// 	if(!arr.includes(this[i])){
	// 		return false
	// 	}
	// }
	// return true

	// second way by using object where time comlexity is linear
	var obj = {}
	for(var i = 0; i< arr.length; i++) {
		obj[arr[i]] = 0
	}

	for(var j=0; j<this.length; j++) {
		if(obj[this[j]]===undefined){
			return false
		}
	}
	return true
}
