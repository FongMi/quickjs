/*---
flags: [qjs:track-promise-rejections]
---*/
import { assert } from "./assert.js"
import { setTimeout } from "qjs:os"

const ref = new WeakRef({})
gc()
assert(typeof ref.deref(), "object")

new Promise(resolve => setTimeout(resolve, 0)).then(() => {
    gc()
    assert(ref.deref(), undefined)
})
