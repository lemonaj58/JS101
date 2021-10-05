/*
A TEST SUITE: is the entire set of tests that accomapnies your program or
application. we can think of this as all of the tests for a project.

A TEST: is a specific situation or context that you're attempting to test.
for instance a test may attempt to verify that you get an error message
when you try to log in with the wrong password. each test can contain multiple
assertions. we may sometimes see tests refered to as SPECS

ASSERTION: is the verification step that confirms that your program did what it
should.in perticular many assertions test whether the return value of a function
or method matches the expected results. we can make multiple assertions within.
assertions are also called expactations.
*/

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});