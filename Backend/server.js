import app from './app.js';
import config from './config/index.js';

const { PORT } = config;

app.listen(PORT || 5000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
// app.listen(process.env.PORT, () => console.log('Server started on PORT'));
