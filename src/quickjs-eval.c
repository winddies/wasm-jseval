/*
 * @Author: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @Date: 2024-12-11 15:46:00
 * @LastEditors: Heng-Zhang2 Heng.Zhang2@budweiserapac.com
 * @LastEditTime: 2024-12-21 20:58:50
 * @FilePath: /wasm-jseval/src/quickjs-eval.c
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

#include <emscripten.h>
#include <string.h>
#include <malloc.h>
#include "../quickjs/quickjs.h"
#include "../quickjs/cutils.h"




const char* eval(const char* str) {
	JSRuntime* runtime = JS_NewRuntime();
	JSContext* ctx = JS_NewContext(runtime);
	JSValue result =
	    JS_Eval(ctx, str, strlen(str), "<evalScript>", JS_EVAL_TYPE_GLOBAL);
	if (JS_IsException(result)) {
		JSValue realException = JS_GetException(ctx);
		return JS_ToCString(ctx, realException);
	}
	JSValue json = JS_JSONStringify(ctx, result, JS_UNDEFINED, JS_UNDEFINED);
	JS_FreeValue(ctx, result);
	return JS_ToCString(ctx, json);
}

