// const increase = (number, callback) => {
//   setTimeout(() => {
//     const result = number + 10;

//     if (callback) {
//       callback(result);
//     }

//   }, 1000);
// };

// console.log('작업 시작');

// increase(10, result => {
//   console.log(result);
//   increase(result, (result) => {
//     console.log(result);
//     increase(result, (result) => {
//       console.log(result);
//       increase(result, result => {
//         console.log(result);
//         increase(result, result => {
//           console.log(result);
//           console.log('작업 종료');
//         });
//       });
//     });
//   });
// });


function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      };
      resolve(result);
    }, 1000);
  })
  return promise;
};

const runTask = async () => {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

runTask();