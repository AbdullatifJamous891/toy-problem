/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  	
  	var start = 0;
  	var last = array.length -1;
  	var middle;
  	for(var i=0; i<array.length; i++){

  	  middle = Math.floor((start + last)/2);
  		if(target === array[middle]){
  			return middle;
  		}else if(target > array[middle]){
  			start = middle + 1;
  		}else if(target < array[middle]){
  			last = middle - 1;
  		}
  	}
  	return -1;
};

