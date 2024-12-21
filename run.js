/*
 * @Author: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @Date: 2024-12-15 15:38:50
 * @LastEditors: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @LastEditTime: 2024-12-21 15:52:46
 * @FilePath: /wasm-jseval/run.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const quickjsEval = require("./src/quickjs-eval.js");

// quickjsEval.onRuntimeInitialized = () => {
//   const result = quickjsEval.ccall("eval", "string", ["string"], ["1+1"]);
//   console.log("result:", result);
// };

quickjsEval()
  .then((mod) => {
    const expr = mod.cwrap("eval", "string", ["string"]);

    const result = expr("1+1");
    console.log("result:", result);
    // const add = mod.newFunction(["a", "b"], "return a+b");
    // console.log(add(1, 2)); // 3
  })
  .catch((err) => {
    console.log("err", err);
  });
