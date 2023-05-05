const http = require('http');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const PORT = 3000;

const server = http.createServer((req, res) => {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
  console.log(driver);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
