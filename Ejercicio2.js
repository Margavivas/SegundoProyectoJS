
const nombre = "Margalida";
const edad = 28;
const desarrollador = false;
const fechaNacimiento = new Date(1994,2,8);

const libroFavorito = {
    titulo: "Mister",
    autor: "E.L James",
    fecha: "7 mayo 2019",
    url: "https://www.amazon.es/Mister-edici%C3%B3n-castellano-L-James-ebook/dp/B07PDHK8QG"
}

console.log(`hola, mi nombre es: ${nombre} tengo ${edad} años, naci el ${fechaNacimiento}
 mi titulo como desarrolladora es ${desarrollador} pero estudiaré para obtenerlo. mi libro favorito es ${libroFavorito.titulo}
 escrito por  ${libroFavorito.autor} y publicado el ${libroFavorito.fecha} lo recomiendo muchisimo, lo pueden
 encontrar en esta direccion ${libroFavorito.url}`);
