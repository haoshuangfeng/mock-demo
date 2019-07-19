const express = require('express');
const chalk = require('chalk');
const proxy = require('http-proxy-middleware');

const app = express();

const PORT = 3033;

app.use('/assets', express.static('src/assets'));
app.use(express.static('src/views'));

app.use(proxy('/api', {
  target: 'http://localhost:3034',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.listen(PORT, '0.0.0.0', err => {
  if (err) {
    console.error(chalk.red(err));
    return;
  }

  console.log(`Dev server is running here: ${chalk.cyan(`http://127.0.0.1:${chalk.bold(PORT)}`)}\n`);
});
