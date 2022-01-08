import { shallow } from 'enzyme'
import Counter from "./Counter"

let wrapper
beforeEach(() => {
  wrapper = shallow(<Counter />)
})

describe('test rendering', () => {
  it("component app crashed", () => {
    shallow(<Counter />)
  })

  it("test button rendering on App", () => {
    const btnIncLabel = wrapper.find("#inc-btn").text()
    expect(btnIncLabel).toBe("increasement")
  })

  //dic
  //counter value
  it("test counter value dom rendering on App", () => {
    const value = wrapper.find("#counter-value").text()
    expect(value).toBe("0")
  })
})

describe('button action', () => {
  it('button click', () => {
    //- get element
    const btnInc = wrapper.find("#inc-btn")
    const btnDec = wrapper.find("#dec-btn")

    btnInc.simulate("click") //-- click button
    expect(wrapper.find("#counter-value").text()).toBe("1")

    btnDec.simulate("click")
    btnDec.simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("-1")
  })
}) 