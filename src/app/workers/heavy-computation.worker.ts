addEventListener('message', ({ data }) => {
  console.log('Worker received a message:', data);

  // A dummy heavy calculation
  const start = Date.now();
  let result = 0;
  for (let i = 0; i < data.iterations; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  const duration = Date.now() - start;

  postMessage({ result, duration });
});