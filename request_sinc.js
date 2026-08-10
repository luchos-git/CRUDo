//1. 
// fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(Response => {
//   if (Response.ok) {
//       return Response.json();
//   }
// }).then(Items => Items.forEach(p => {

//   console.log(p);
//   document.querySelector('.registros').innerHTML+=`<p>Nombre: ${p.nombre}</p> <p>Direccion: ${p.direccion}</p> <img src="${p.imagen}" alt="imagen" width="100"><hr>`;
// })
// ).catch(error => {
//   // handle error
//   console.error('Error fetching personas:', error);
// }
// )

//2. obtener un registro a base de un id
fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas/2', { 
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(Response => {
  if (Response.ok) {
      return Response.json();
  }
}).then(Item => {
  console.log(Item);
  document.querySelector('.registros').innerHTML+=`<p>Nombre: ${Item.nombre}</p> <p>Direccion: ${Item.direccion}</p> <img src="${Item.imagen}" alt="imagen" width="100"><hr>`;
}).catch(error => {
  // handle error
  console.error('Error fetching persona:', error);
}
)