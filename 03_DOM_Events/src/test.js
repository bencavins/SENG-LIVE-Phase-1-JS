const x = 5
let msg = '';

if (x > 0) {
    msg = 'positive'
} else {
    msg = 'negative'
}

// ternary expression (same as if/else)
msg = x > 0 ? 'positive' : 'negative'
console.log(msg)

let result = true

// truthy values
// 1, 99, -5, 'hello', 'false'

// falsey values
// 0, 0.0, '', [], {}, undefined

let result1 = {
    'key': 'value'
}

let result2 = {}
let result3 = undefined

if (result) {
    result.key = 'success'
}

msg = result ? 'pass' : 'fail'
console.log(msg)