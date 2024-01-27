// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(`Hello Node.js v${process.versions.node}!`);
//obtener nombre mas largo
/*function obtenerNombreMasLargo(listado){
  let nombreMasLargo=listado[0]
  for (let nameActual of listado){
    if (nameActual.length > nombreMasLargo){
      nombreMasLargo=nameActual
      return nombreMasLargo
    }
  }
}

function obtenerNombreMasCorto(listado){
  let nombreMasCorto=listado[0]
  for (let nameActual of listado){
    }
    if (nameActual.length < nombreMasCorto){
      nombreMasCorto=nameActual
      return nombreMasCorto
    }
}
const koders=['Ozz','Lulu','Tello','Jimmy']
const mentores=['Ozzo','Lulusa','Tellotion','JimmyPapas']

const nombreKoderMasLargo = obtenerNombreMasLargo(koders);
const nombreMentorMasLargo = obtenerNombreMasLargo(mentores);

console.log("koder: ", nombreKoderMasLargo);
console.log("mentor: ", nombreMentorMasLargo);

*/

function obtenerNombreMasLargo(listaDeNombres) {
  let nombreMasLargo = listaDeNombres[0];

  for (let nombreActual of listaDeNombres) {
    if (nombreActual.length > nombreMasLargo.length) {
      nombreMasLargo = nombreActual;
    }
  }

  return nombreMasLargo;
}

const koders = ["Maria", "David", "Jair", "Norberto", "Glo"];
const mentores = ["charles", "isra", "alfred", "leo"];

const nombreKoderMasLargo = obtenerNombreMasLargo(koders);
const nombreMentorMasLargo = obtenerNombreMasLargo(mentores);

console.log("koder: ", nombreKoderMasLargo);
console.log("mentor: ", nombreMentorMasLargo);

function obtenerNombreMasCorto(listaDeNombres) {
  let nombreMasCorto = listaDeNombres[0];

  for (let nombreActual of listaDeNombres) {
    if (nombreActual.length < nombreMasCorto.length) {
      nombreMasCorto = nombreActual;
    }
  }

  return nombreMasCorto;
}
const nombreKoderMasCorto= obtenerNombreMasCorto(koders);
const nombreMentorMasCorto = obtenerNombreMasCorto(mentores);

console.log("koder: ", nombreKoderMasCorto);
console.log("mentor: ", nombreMentorMasCorto);
