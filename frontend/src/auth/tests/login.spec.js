import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'
import Login from '../components/containers/index'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'

describe('<Login/>', function () {
    let wrapper
    let onSubmit
    let validation = 0

    beforeEach(() => {
        let store
        store = createStore(combineReducers({ form: formReducer }))

        onSubmit = (data) => {
            validation = (data.username === 'test' && data.password === 'test')
        }

        const props = {
            onSubmit,
        }
        wrapper = mount(
            <Provider  store={store}>
                <Login {...props}/>
            </Provider>
        )
    })

    it('should display a form ', function () {
        expect(wrapper.find('form').length).to.equal(1)
    })

    it('should display a form with 4 fields', function () {
        expect(wrapper.find('Field').length).to.equal(4)
    })

    it('should display a form with 4 fields', function () {
        expect(wrapper.find('Field').length).to.equal(4)
    })

    it('calls onSubmit', () => {
        const form = wrapper.find('form')
        const username = wrapper.find('input[name="username"]').first()
        username.simulate('change', { target: { value: 'test' } })
        const password = wrapper.find('input[name="password"]').first()
        password.simulate('change', { target: { value: 'test' } })
        form.simulate('submit')
        expect(validation).to.equal(true)
    })
})
