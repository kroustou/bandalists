import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import Login from '../components/containers/index'
import { Provider } from 'react-redux'

const mockStore = configureMockStore([thunk])

describe('<Login/>', function () {
    const store = mockStore({})
    const wrapper = mount(
        <Provider  store={store}>
            <Login/>
        </Provider>
    )

    it('should display a form ', function () {
        expect(wrapper.find('form').length).to.equal(1)
    })

    it('should display a form with 4 fields', function () {
        expect(wrapper.find('Field').length).to.equal(4)
    })

    it('should display a form with 4 fields', function () {
        expect(wrapper.find('Field').length).to.equal(4)
    })
})
