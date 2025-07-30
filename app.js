const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App deployed via AWS CodePipeline! EC2');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
