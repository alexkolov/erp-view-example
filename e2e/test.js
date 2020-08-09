const dragAndDrop = require('html-dnd').codeForSelectors;
const url = 'http://localhost:3000/';

module.exports = {
  'Check title': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.titleContains('ERP - Example')
      .end();
  },
  'Notifications are visible': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.visible('.notifications')
      .end();
  },
  'Machine state are working': (browser) => {
    const selector = (id) => (
      `.machine-${ id } .description .title .circle`
    );
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.cssClassPresent(selector(0), 'producing')
      .assert.cssClassPresent(selector(1), 'producing')
      .assert.cssClassPresent(selector(2), 'preparing')
      .assert.cssClassPresent(selector(3), 'error')
      .end();
  },
  'Indicators are working': (browser) => {
    const selector = (field) => (
      `.machine-0 .day-0 .order .indicators .${ field }`
    );
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.containsText(selector('preparation'), 2)
      .assert.containsText(selector('produced'), 4)
      .assert.containsText(selector('rest'), 8)
      .end();
  },
  'Material status is shown': (browser) => {
    const selector = (day) => (
      `.machine-0 .day-${ day } .order .material .icon`
    );
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.cssClassPresent(selector(0), 'ok')
      .assert.cssClassPresent(selector(1), 'error')
      .end();
  },
  'Amount is shown': (browser) => {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.visible(
        '.machine-0 .day-0 .order .amount'
      )
      .end();
  },
  'Try Drag and Drop': (browser) => {
    const dragSelector = '.machine-0 .day-0 .order';
    const dropSelector = '.machine-0 .day-1';
    const expectSelector = '.machine-0 .day-0 .order h4';

    browser
      .url(url)
      .execute(
        dragAndDrop,
        [
          dragSelector,
          dropSelector
        ]
      )
      .assert.containsText(
        expectSelector,
        '2202/3621'
      )
      .end();
  }
};