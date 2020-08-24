// const increse = (number, callback) => {
//   setTimeout(() => {
//     const result = number + 10;
    
//     if (callback) {
//       callback(result);
//     }

//   }, 2000);
// };


// increse(0, result => {
//   console.log(result);
//   increse(result, result => {
//     console.log(result);
//     increse(result, result => {
//       console.log(result);
//       increse(result, result => {
//         console.log(result);
//         increse(result, result => {
//           console.log(result);
//         })
//       })
//     })
//   })
// })


const increase = (number) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;

      if (number >= 50) {
        const e = new Error('너무 커...');
        return reject(e);
      }

      resolve(result);
    }, 2000);
  });

  return promise;
};

increase(0)
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch( e => {
    console.error(e);
  });