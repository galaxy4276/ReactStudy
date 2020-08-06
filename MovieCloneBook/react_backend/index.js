const express = require('express');

const app = express();


app.get('/get/foodlike', (req, res) => {
  const foodILike = [
    {
      name: 'Mango',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Pasta',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'Korean BBQ',
      image: 'https://images.unsplash.com/photo-1527578054032-8d8f044e013d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Tiramisu',
      image: 'https://images.unsplash.com/photo-1568627175565-25154711ef22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
  ];

  console.log(`convert to JSON: ${JSON.stringify(foodILike)}`);

  return res.json(foodILike);
});


app.listen(5001, () => { console.log('애플리케이션 5001번 포트에서 실행 중..')});
