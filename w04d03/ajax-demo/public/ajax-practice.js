console.log('hello');

// $.ajax({
//   method: 'GET',
//   url: 'http://localhost:8002/food-items',
//   success: (response) => {
//     console.log(response);
//   }
// });

$.ajax({
  method: 'GET',
  url: '/food-items',
}).then((response) => {
  console.log('inside the .then', response);
});

// $.ajax({
//   method: 'POST',
//   url: 'http://localhost:8002/food-items',
//   data: '' // data to send to the server
// }).then((response) => {
//   console.log('inside the .then', response);
// });
