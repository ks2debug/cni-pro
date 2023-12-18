class DataModelNavigationBar {
  constructor({ currentPageName = '', title = 'Page', clickedNavItemName = '' }) {
    this.currentPageName = currentPageName;
    this.title = title;
    this.clickedNavItemName = clickedNavItemName;
  }
}

export { DataModelNavigationBar };
