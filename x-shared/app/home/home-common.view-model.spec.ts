import { HomeCommonViewModel } from './home-common.view-model';

describe('HomeCommonViewModel', () => {

  let homeCommonVM: HomeCommonViewModel;

  beforeEach(() => {
    homeCommonVM = new HomeCommonViewModel();
  });

  it('should have initial counter value greater than 0', () => {
    expect(homeCommonVM.counter).toBeGreaterThan(0);
  });

  it('::onTap should decreament count by 1', () => {
    let initialCount = homeCommonVM.counter;
    homeCommonVM.onTap();
    expect(homeCommonVM.counter).toEqual(initialCount - 1);
  });

  it('should have tap count left in message when count greater than 0', () => {
    expect(homeCommonVM.message).toContain('taps left');
  });

  it('should have proper message count is 0', () => {
    homeCommonVM.counter = 0;
    expect(homeCommonVM.message).toContain('Hoorraaay! \nYou are ready to start building!');
  });
});
