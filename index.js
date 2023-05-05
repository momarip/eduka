const http = require('http');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  // Create a new Chrome browser instance
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
    console.log(driver);
//   try {
//     // Navigate to Google.com
//     await driver.get('https://www.google.com/');

//     // Find the search input field and enter a search query
//     let searchInput = await driver.findElement(By.name('q'));
//     await searchInput.sendKeys('Selenium WebDriver', Key.RETURN);

//     // Wait for the search results to load and get the page title
//     await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
//     let pageTitle = await driver.getTitle();

    // Send the page title as the response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(pageTitle);
//   } finally {
//     // Quit the browser
//     await driver.quit();
//   }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
