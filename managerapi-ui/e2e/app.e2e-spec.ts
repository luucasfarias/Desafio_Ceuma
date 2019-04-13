import { ManagerapiUiPage } from './app.po';

describe('managerapi-ui App', () => {
  let page: ManagerapiUiPage;

  beforeEach(() => {
    page = new ManagerapiUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
