require('marko/node-require').install(); // trabalhar com o node.
require('marko/express'); // trabalhar com o express.

const app = require('./src/config/custom-express');

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
});
