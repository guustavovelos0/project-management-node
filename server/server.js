const app = require('./server-config.js');
const todosRoutes = require('./routes/todos.js');

const port = process.env.PORT || 5000;

app.use('/todos', todosRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;