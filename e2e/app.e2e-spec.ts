import { JaseSrcPage } from './app.po';

describe('jase-src App', function() {
  let page: JaseSrcPage;

  beforeEach(() => {
    page = new JaseSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
