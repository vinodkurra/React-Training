// In JavaScript, `var`, `let`, and `const` are used for declaring variables. However, they each have different characteristics in terms of scope, hoisting, and mutability.

// Here are detailed explanations and examples for each:

// ### 1. `var`
// - **Scope:** `var` is function-scoped, meaning it is only accessible within the function in which it is declared. If declared outside of a function, it is globally scoped.
// - **Hoisting:** Variables declared using `var` are hoisted to the top of their scope, but their assignment remains in the original position.
// - **Re-assignable:** Variables declared with `var` can be re-assigned.

// #### Example:
// ```javascript
// function exampleVar() {
//     console.log(x); // undefined (due to hoisting)
//     var x = 10;
//     console.log(x); // 10 (after assignment)
// }

// exampleVar();
// ```
// - **Explanation:** The variable `x` is hoisted to the top, but only its declaration, not its assignment, meaning it’s initially `undefined` when accessed before its assignment.

// ### 2. `let`
// - **Scope:** `let` is block-scoped, meaning it is only accessible within the block (`{}`) it is declared in.
// - **Hoisting:** Variables declared with `let` are hoisted, but accessing them before their declaration leads to a "ReferenceError" (temporal dead zone).
// - **Re-assignable:** Variables declared with `let` can be re-assigned, but not redeclared in the same scope.

// #### Example:
// ```javascript
// function exampleLet() {
//     // console.log(y); // Uncommenting this will throw an error due to temporal dead zone.
//     let y = 20;
//     console.log(y); // 20
// }

// exampleLet();
// ```
// - **Explanation:** The variable `y` is hoisted, but accessing it before the declaration would result in a "ReferenceError" due to the temporal dead zone.

// ### 3. `const`
// - **Scope:** `const` is block-scoped, similar to `let`.
// - **Hoisting:** Like `let`, `const` is hoisted, but it also results in a "ReferenceError" if accessed before declaration.
// - **Re-assignable:** Variables declared with `const` cannot be re-assigned or redeclared. Once a value is assigned to a `const`, it cannot be changed.
// - **Note:** `const` only prevents reassignment of the variable itself. If the variable is an object or array, the contents (properties or elements) can still be modified.

// #### Example:
// ```javascript
// function exampleConst() {
//     const z = 30;
//     console.log(z); // 30
//     // z = 40; // Uncommenting this will throw a TypeError because const variables can't be reassigned

//     const obj = { name: 'Alice' };
//     obj.name = 'Bob'; // Works because we can modify the contents of the object
//     console.log(obj); // { name: 'Bob' }
// }

// exampleConst();
// ```
// - **Explanation:** The `const` variable `z` cannot be reassigned. However, the contents of an object (`obj`) can be modified.

// ---

// ### Summary of Differences:
// | Feature               | `var`                            | `let`                         | `const`                            |
// |-----------------------|----------------------------------|-------------------------------|------------------------------------|
// | **Scope**             | Function-scoped or global       | Block-scoped                  | Block-scoped                      |
// | **Hoisting**          | Hoisted, initialized with `undefined` | Hoisted, Temporal Dead Zone (accessing before declaration throws an error) | Hoisted, Temporal Dead Zone (accessing before declaration throws an error) |
// | **Reassignable**      | Yes                             | Yes                           | No (immutable binding)            |
// | **Redeclarable**      | Yes in the same scope           | No                            | No                                |

// ### Best Practices:
// - **Use `const` by default** for variables that won’t change.
// - **Use `let`** when the variable’s value needs to change within a block scope.
// - **Avoid `var`** unless you need to support legacy code, as `let` and `const` offer more predictable behavior.
