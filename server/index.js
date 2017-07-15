const express = require('express');

const app = express();

require('./stub')(app);
require('./proxy')(app);
require('./static')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`
    ------------------------------
    🌍  GOTO https://localhost:${app.get('port')}
    ------------------------------
  `);
});
