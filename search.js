const webdriver = require('selenium-webdriver');
const { By, Key, until } = webdriver;

module.exports.search = async function(driver, query) {
  // Find the search input field and enter a search query
  let searchInput = await driver.findElement(By.name('q'));
  await searchInput.sendKeys(query, Key.RETURN);

  // Wait for the search results to load and return the page title
  await driver.wait(until.titleContains(query), 5000);
  return await driver.getTitle();
};
