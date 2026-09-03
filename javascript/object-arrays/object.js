const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  admin: false,
  genero: "Masculino",
  email: "joaopedefeijao@gmail.com",
};

pessoa.estadoCivil = "Solteiro" //add pessoa["estadoCivil"] = "Solteiro"

delete pessoa.genero //delete pessoa["genero"]
pessoa.nome = "Pedro" //alterando o valor da propriedade nome

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.email)



