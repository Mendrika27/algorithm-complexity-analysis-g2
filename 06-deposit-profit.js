/*
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth rate.
 * With the assumption that you don't make any additional deposits,
 * find out how long it would take for your balance to pass a specific threshold.
 */
const depositProfit = (deposit, rate, threshold) =>
  Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1)); //(deposit=d; rate=r; threshold=t) 1 ((t*1+1*d)+1+1(r+3)) 
/*
*T_06 (n) = 1((t*1+1*d)+1+1(r+3))
*T_06 (n) = t+d+1+r+1
*T_06 (n) = n+n+1+n+1 = 3n = n
*T_06 (n) = n = O (n) (linear)
*/
