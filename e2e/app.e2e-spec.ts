import { AppPage } from './app.po';

describe('ngx-barcode-scanner-components App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to the Initial components library for Angular !');
  });
});
