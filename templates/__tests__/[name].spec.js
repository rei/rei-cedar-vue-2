import { shallowMount } from '../../../../test/vue-jest-style-workaround.js';
import {NAME-FULLNAME} from 'componentdir/{NAME-CAMEL}/{NAME-FULLNAME}';

describe('{NAME-FULLNAME}', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount({NAME-FULLNAME});
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has a failing test by default so you remember to do them', () => {
    expect(false).toBe(true);
  });
});
