import { DeviceManagerPage } from './app.po';

describe('device-manager App', () => {
  let page: DeviceManagerPage;

  beforeEach(() => {
    page = new DeviceManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
