// const n1 = 23
// const n2 = 234

// // console.log("Multiplicação", n1 * n2)

// // if (n1 >= 7) {
// console.log("Essa equação é maior q 7!")
// }

// const subtrair = (y, x) => y - x;
// const resultado = subtrair(10, 40);
// console.log(resultado)

const alunos = [
    {
        nome: "João",
        idade: 15
    },
    {
        nome: "Mario",
        idade: 35
    },
    {
        nome: "Dante",
        idade: 28
    },
]
console.table(alunos);
console.log(alunos.findIndex((aluno) => aluno.nome == "Mario"))