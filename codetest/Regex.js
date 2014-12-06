var test = function(s, pattern) {

};

console.assert(test("abc", "abc") == true);
console.assert(test("aaa", "abc") == false);
console.assert(test("abc", "a.c") == true);
console.assert(test("b", "a*b") == true);
console.assert(test("ab", "a*b") == true);
console.assert(test("aab", "a*b") == true);
console.assert(test("ab", "a*ab") == true);
console.assert(test("", "a*") == true);
console.assert(test("a", "") == false);
console.assert(test("aaac", "a.*c") == true);
console.assert(test("aaac", "b*a.*c") == true);
