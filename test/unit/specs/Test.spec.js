import Vue from 'vue';
import Test from '@/examples/testing/Test';

describe('Test.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Test);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.karma-test h1').textContent)
      .to.equal('Testing 1 2 3');
  });
});
