fetch('https://6a73b2b015e0453fe1b424ed.mockapi.io/personas', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(items => {
  // Do something with the list of tasks
  console.log(items);
}).catch(error => {
  // handle error
  console.error('Error fetching personas:', error);
})