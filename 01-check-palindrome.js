const checkPalindrome = (inputString) =>
  inputString === inputString.split("").reverse().join(""); // 5*inputString
/**
*T_01 (n) = 5*i = 1*n
*T_01 (n) = n = 0 (n) (linear)
*/
