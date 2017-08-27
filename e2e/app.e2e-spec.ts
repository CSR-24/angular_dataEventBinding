import { AngularDataEventBindingPage } from './app.po';

describe('angular-data-event-binding App', () => {
  let page: AngularDataEventBindingPage;

  beforeEach(() => {
    page = new AngularDataEventBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
