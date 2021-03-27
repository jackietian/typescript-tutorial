// WHY Typescript? -- Find bugs ealier
console.log('hello world!')

const hello = () => {
    return 'Hello'
}

// foo will be automatically infered as number
let foo = 23

// Type 'string' is not assignable to type 'number'
// foo = '23'

//=============== Type ==================
type Style = 'bold' | 'italic'
const style: Style = 'bold'

//=============== interface ==================
interface Person {
    first: string
    last: string
    [key: string]: any
}

const person: Person = {
    first: 'jeff',
    last: 'bezos',
    gender: 'male',
}


//=============== function types ==================
const pow = (x: number, y: number): string => {
    return Math.pow(x, y).toString()
}

pow(5,10)

//=============== Array types ==================
const arr: number[] = []
arr.push(1)
// arr.push('1')
// arr.push(true)