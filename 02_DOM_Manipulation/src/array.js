const a = ['a', 'b', 'c', 'd']

const grades = [0.9, 0.8, 0.7]


for (let i = 0; i < a.length; i++) {
    // console.log(i, a[i])
}

for (let item of a) {
    // console.log(item)
}

a.forEach((item) => {
    // console.log(item + '!')
})

const newArray = a.map((item) => {
    return item + '!'
})

// console.log(a)
// console.log(newArray)

const readableGrades = grades.map((grade) => {
    return '%' + (grade * 100)
})

// console.log(grades)
// console.log(readableGrades)


const grade = 100
console.log(`Your grade is ${grade}%`)
