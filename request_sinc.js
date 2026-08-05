fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(items => items.forEach(p => {

//   console.log(item);
  document.querySelector('.registros').innerHTML='<p>Nombre: ${p.nombre}</p><p>Direccion: ${p.direccion}</p><img src="${p.avatar}" alt="avatar" width="100"><hr></hr>'
})
).catch(error => {
  // handle error
  console.error('Error fetching personas:', error);
})
