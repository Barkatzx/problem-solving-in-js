// Given a string (e.g., "hello (olleh)"), write a JavaScript function to reverse the string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));