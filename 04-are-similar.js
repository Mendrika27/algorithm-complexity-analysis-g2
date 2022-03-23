/*
 * Two arrays are called similar if one can be obtained from another
 * by swapping at most one pair of elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 */
const areSimilar = (a, b) => {
  for (var arr = [], i = 0; i < a.length; i++) { //5a.length
    if (a[i] !== b[i]) { //5
      arr.push(a[i], b[i]);//5
    }
  }
  return arr.length < 5 && new Set(arr).size < 3; //4
};
/*
*T_04 (n) = 5*a(5+5)+4 = 5*a(10)+4 = 1*n(1)+1 = n
*T_04 (n) = n = O (n) (linear)
*/
