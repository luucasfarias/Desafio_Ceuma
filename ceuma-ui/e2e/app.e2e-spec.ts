import { CeumaUiPage } from './app.po';

describe('ceuma-ui App', () => {
  let page: CeumaUiPage;

  beforeEach(() => {
    page = new CeumaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
