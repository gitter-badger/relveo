import {RelveoPage} from "./app.po";

describe('relveo App', () => {
  let page: RelveoPage;

  beforeEach(() => {
    page = new RelveoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Relveo works!');
  });
});
