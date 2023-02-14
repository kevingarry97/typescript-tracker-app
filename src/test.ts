let greet: Function;
type StringorNum = string | number ;
type objWithName = {name: string; uid: StringorNum}

let salut: (a: string, b: string) => void;

greet = () => {
    console.log('Greetings')
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
}

const minus = (a: number, b: number): number => {
    return a + b;
}