(() => {
  /** @type {number | string} */
  let acceptOnlyNumberOrString = 09666;

  acceptOnlyNumberOrString = true; // Type 'boolean' is not assignable to type 'string | number'
  acceptOnlyNumberOrString = "text"; // Ok, string is assignable

  /** @type {{ id: number, name: string, fullName?: string }} */
  const user = { id: 1, name: "Mohammed" }; // types works

  user.fullName = "Mohammed Aljefri";

  console.log(acceptOnlyNumberOrString);
  console.log(JSON.stringify(user));
})();


// example with @typedef
(() => {
  /**
   * A number, or a string containing a number.
   * @typedef {(number|string)} NumberLike
   */


  /** @type {NumberLike} */
  let acceptOnlyNumberOrString = 09666;

  /** @type {NumberLike} */
  let another = "Just a test for defined types"

  console.log('another', another)
  console.log('acceptOnlyNumberOrString', acceptOnlyNumberOrString)
})();