/*
 * You are given an array of integers representing coordinates of obstacles situated on a straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right.
 * You are allowed only to make jumps of the same length represented by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 */

const avoidObstacles = (input) => {
  for (let i = 2; ; i++) {//4
    let t = true; //1
    for (let j = 0; j < input.length; j++) { //7*inmput.length (7*i)
      t = t && input[j] % 1 != 0; //6
    }
    if (t) { //1
      return i; //1
    }
  }
};
/*
*T_05 (n) = 4 + 1 + 7*i (6) + 1 + 1 = 1 + 1 + 1*n (1) + 1 + 1
*T_05 (n) = n = O (n) (linear)
*/
