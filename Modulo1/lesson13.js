/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média).
*/

let professor = {
  name: "Edu",
  subject: "Math",
  grades: {
    students1: 10,
    students2: 8,
    students3: 4,
  },
};
let sumGrades = 0;
let numberOfStudents = 0;

for (let students in professor.grades) {
  sumGrades += professor.grades[students];
  numberOfStudents++;
}

let avarege = sumGrades / numberOfStudents;

console.log(`A nota média da turma é: ${avarege.toFixed(2)}`);
console.log(
  avarege >= 6
    ? `${professor.name} esta acima da media` //operador ternario (condição) ? true : false
    : `${professor.name} esta abaixo da media` //operador ternario
);

/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

let library = [
  { title: "HP", author: "J.K", year: 1999 },
  { title: "Fundacao", author: "Asimov", year: 1980 },
  { title: "And none", author: "Agatha", year: 1925 },
  { title: "Egypt", author: "Agatha", year: 2015 },
];
for (let book of library) {
  if (book.year < 2000) {
    console.log(`o livro ${book.title} foi escrito no ano ${book.year}`);
  }
}

/*
Objetivo: Contar a quantidade de filmes por gênero.
Use o método forEach para iterar sobre o array filmes.
Para cada filme, verifique se o gênero já existe no objeto de contagem. 
Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/
let movies = [
  { title: "top", genre: "militar" },
  { title: "Inter", genre: "ação" },
  { title: "Deadpool", genre: "heroi" },
  { title: "PC", genre: "militar" },
  { title: "Gremio", genre: "drama" },
];
let genreCount = {};

movies.forEach((movie) => {
  if (genreCount[movie.genre]) {
    genreCount[movie.genre]++;
  } else {
    genreCount[movie.genre] = 1;
  }
});

for (let genre in genreCount) {
  console.log(`Existe(m) ${genreCount[genre]} filme(s) no genero ${genre}`);
}
