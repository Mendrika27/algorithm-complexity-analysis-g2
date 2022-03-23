/*
 * An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"),
 * an "@" symbol, then a domain part ("example.com").
 * The domain name part of an email address may only consist of letters, digits, hyphens and dots.
 * The local part, however, also allows a lot of different special characters.
 * Here you can look at several examples of correct and incorrect email addresses.
 * Given a valid email address, find its domain part.
 */
const findEmailDomain = (address) => address.split("@").pop();// 3*address
/*
*T_09 (n) = 3*a = 1*n 
*T_09 (n) = n = O (n) linear
*/
