/*
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
 * each statue having an non-negative integer size. Since he likes to make things perfect,
 * he wants to arrange them from smallest to largest so that each statue will be bigger
 * than the previous one exactly by 1. He may need some additional statues to be able to
 * accomplish that. Help him figure out the minimum number of additional statues needed.
 */
const makeArrayConsecutive = (sequence) =>
  Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length; // 9
/**
*Math.max(..sequence) => 1*sequence  = 1*s
*"-" = 1 for the substraction
*Math.min(..sequence) => 1*sequence = 1*s
*"+1" = 1 for the addition of a constant
*"-" = 1 for the substraction
*sequence.length = 1*s because sequence is a variable
*T_02 (n) = 1*s + 1 + 1*s + 1 + 1*s = 3*s + 1 = 1*s + 1 = s = n
*T_02 (n) = n = O (n) (linear)
*/
