const expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            }
            else {
                throw new Error ("Equal")
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            }
            else {
                throw new Error ("Not Equal")
            }
        }
    }
}

function runTest(testFunc) {
    try {
      const result = testFunc();
      console.log({ value: result });
    } catch (err) {
      console.log({ error: err.message });
    }
  }
  
  // Example usages
  runTest(() => expect(5).toBe(5));
  runTest(() => expect(5).toBe(null));