describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('scroll'))).toBeVisible();
  });
});
