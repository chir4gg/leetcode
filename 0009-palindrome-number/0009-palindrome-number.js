/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers aur 0 ke alawa jin numbers ke end mein 0 ho, wo palindrome nahi ho sakte
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Even digits ke liye: x === reversedHalf
    // Odd digits ke liye: x === Math.floor(reversedHalf / 10) (beech ka digit ignore karne ke liye)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
