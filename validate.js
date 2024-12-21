/*
 * @Author: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @Date: 2024-12-16 17:33:10
 * @LastEditors: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @LastEditTime: 2024-12-16 17:33:23
 * @FilePath: /wasm-jseval/validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
fetch("output.wasm")
  .then((response) => response.arrayBuffer())
  .then(function (bytes) {
    var valid = WebAssembly.validate(bytes);
    console.log(
      "The given bytes are " + (valid ? "" : "not ") + "a valid wasm module"
    );
  });
