import { getExistingPropertyFromLocalStorage } from './store.helper';

describe('StoreHelper', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('Should return an empty string if given a property of a nonexistent value', () => {
    expect(getExistingPropertyFromLocalStorage('test')).toEqual('');
  });

  it('Should get an existing property from the localstorage', () => {
    localStorage.setItem('isVisible', 'true');

    expect(getExistingPropertyFromLocalStorage('isVisible')).toEqual('true');
  });
});
