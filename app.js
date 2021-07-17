const express = require('express');
const fs = require('fs');
const app = express();






app.get("/mutsa", (req, res, next) => {
  const jsonFile = fs.readFileSync('./movies.json', 'utf8');
  const data = JSON.parse(jsonFile);

  res.json(data);
});



const PORT = process.env.APP_PORT || 3479;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));