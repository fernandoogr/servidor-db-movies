const str = "Hello, TypeScript!"
const n = 123

console.log(str, typeof str)
console.log(n, typeof n)

const str1: string = "This is a string"
const n1: number = 456

function suma(a: number,b: number): number {
    return a + b
}

console.log(suma(1, 2)), typeof suma(1, 2)

function saludo(nombre: string, edad: number, favorita: string) {
    return `Hola, mi nombre es ${nombre}, tengo ${edad} años y mi comida favorita es ${favorita}.`
}

type generoTipo = 'Masculino' | 'Femenino' | 'Otro'

function generarUsuario() {
    const nombre: string = "user" + Math.floor(Math.random() * 999)
    const genero: generoTipo[] = ['Masculino', 'Femenino', 'Otro']
    return { nombre, genero }

}
