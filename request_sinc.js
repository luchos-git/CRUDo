//1. cargar todos los registros (se conecta con el 5 para mostrar los registros que se van quedando y eliminados)
// fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(Response => {
//   if (Response.ok) {
//       return Response.json();
//   }
// }).then(Items => Items.forEach(p => {

//   // console.log(p);
//   document.querySelector('.registros').innerHTML+=`<p>Nombre: ${p.nombre}</p> <p>Direccion: ${p.direccion}</p> <img src="${p.imagen}" alt="imagen" width="100"><hr>`;
// })
// ).catch(error => {
//   // handle error
//   console.error('Error fetching personas:', error);
// }
// )

//2. obtener un registro a base de un id
// const id=2
// fetch(`https://6a73b2b015e0453fe1b424ed.mockapi.io/personas/${id}`, { 
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(Response => {
//   if (Response.ok) {
//       return Response.json();
//   }
// }).then(Item => {
//   console.log(Item);
//   document.querySelector('.registros').innerHTML+=`<p>Nombre: ${Item.nombre}</p> <p>Direccion: ${Item.direccion}</p> <img src="${Item.imagen}" alt="imagen" width="100"><hr>`;
// }).catch(error => {
//   // handle error
//   console.error('Error fetching persona:', error);
// }
// )

//3. crear nuevo registro 
// const nuevaP = {
//     "nombre": "lucho Okuneva",
//     "direccion": "argentina",
//     "imagen": "https://avatars.githubusercontent.com/u/27452512",  
// };

// fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
//   method: 'POST',
//   headers: {'content-type':'application/json'},
//   // Send your data in the request body as JSON
//   body: JSON.stringify(nuevaP)
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(persona => {
//   console.log('Persona creada:', persona);
// }).catch(error => {
//   // handle error
// })

//4. actualizar un registro
// const id=2
// const nuevoDPer = {
//     "nombre": "pepe Okuneva",
//     "direccion": "argentina",
//     "imagen": "https://avatars.githubusercontent.com/u/27452512",  
// };
// fetch(`https://6a73b2b015e0453fe1b424ed.mockapi.io/personas/${id}`, {
//   method: 'PUT',
//   headers: {'content-type':'application/json'},
//   // Send your data in the request body as JSON
//   body: JSON.stringify(nuevoDPer)
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(persona => {
//   console.log('registro actualizado:', persona);
// }).catch(error => {
//   // handle error
// })

//5. eliminar un registro a bace de un id (se conecta con el 1 para mostrar los registros que se van quedando y eliminados)
// const id=1
// fetch(`https://6a73b2b015e0453fe1b424ed.mockapi.io/personas/${id}`, {
//   method: 'DELETE',
//   headers: {'content-type':'application/json'},

// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(persona => {
//   console.log(`${persona.id} registro eliminado:`);
// }).catch(error => {
//   // handle error
// })

//6. filtros (es copiar lo mismo que el 1 pero con un parametro de busqueda)
const url = new URL('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas');
url.searchParams.append('nombre', 'May');

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(Response => {
  if (Response.ok) {
      return Response.json();
  }
}).then(Items => Items.forEach(p => {

  // console.log(p);
  document.querySelector('.registros').innerHTML+=`<p>Nombre: ${p.nombre}</p> <p>Direccion: ${p.direccion}</p> <img src="${p.imagen}" alt="imagen" width="100"><hr>`;
})
).catch(error => {
  // handle error
  console.error('Error fetching personas:', error);
}
)