import { InfluxArchiver2Page } from './app.po';

describe('influx-archiver2 App', () => {
  let page: InfluxArchiver2Page;

  beforeEach(() => {
    page = new InfluxArchiver2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
