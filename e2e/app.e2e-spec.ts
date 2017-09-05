import { AngularDemoPage } from './app.po';

describe('angular-demo App', function() {
  let page: AngularDemoPage;

  beforeEach(() => {
    page = new AngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
