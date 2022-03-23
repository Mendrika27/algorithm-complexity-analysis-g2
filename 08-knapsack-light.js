/*
 * You found two items in a treasure chest !
 * The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2.
 * What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW
 * and you can't come back for the items later ?
 * Note that there are only two items and you can't bring more than one item of each type,
 * i.e. you can't take two first items or two second items.
 */
const knapsackLight = (value1, weight1, value2, weight2, maxW) =>
  Math.max(
    maxW >= weight1 && value1, // 4n
    maxW >= weight2 && value2, // 4n
    maxW >= weight1 + weight2 && value1 // 5n
  ); // 1
/*
*T_08 (n) = 4n+4n+5n
*T_08 (n) = 13n = n = O (n) linear
*/
