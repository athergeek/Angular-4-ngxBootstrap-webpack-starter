import { eRiskCliUpdatePage } from './app.po';

describe('eRisk-cli-update App', () => {
  let page: eRiskCliUpdatePage;

  beforeEach(() => {
    page = new eRiskCliUpdatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
