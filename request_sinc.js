fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(Response => {
  if (Response.ok) {
      return Response.json();
  }
}).then(Item => Item.forEach(p => {

  console.log(p);
  document.querySelector('.registros').innerHTML+=`<p>Nombre: ${p.nombre}</p> <p>Direccion: ${p.direccion}</p> <img src="${p.imagen}" alt="imagen" width="100"><hr>`;
})
).catch(error => {
  // handle error
  console.error('Error fetching personas:', error);
}
)
