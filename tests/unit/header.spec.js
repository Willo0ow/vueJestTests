import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import headercomponent from '../../src/components/Header'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'Header'
    const wrapper = shallowMount(headercomponent, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
  test('Hides logout btn if logged out', async ()=>{
    const wrapper = shallowMount(headercomponent)
    await wrapper.setData({loggedIn:true});
    //expect(wrapper.find('#btn').isVisible()).toBe(false)
    expect(wrapper.vm.loggedIn).toBe(true)
    expect(wrapper.find('#btn').isVisible()).toBe(true)
  })
  test('Shows logout btn if logged in', ()=>{
    const wrapper = shallowMount(headercomponent)
    expect(wrapper.find('#btn').isVisible()).toBe(false)
  })
})
