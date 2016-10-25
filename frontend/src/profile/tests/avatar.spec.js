import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import Avatar from '../components/containers/Avatar'


describe('<Avatar/>', function () {
    it('should display placehold.it image if user has no avatar', function () {
        const wrapper = shallow(<Avatar user={{username: 'test'}}/>)
        expect(wrapper.find('img').props().src).to.equal('https://placehold.it/200x200?text=t')
        expect(wrapper.find('img')).to.have.length(1)
    })

    it('should display user avatar if user has one', function () {
        const wrapper = shallow(<Avatar user={{username: 'test', avatar: 'https://test.location'}}/>)
        expect(wrapper.find('img').props().src).to.equal('https://test.location')
        expect(wrapper.find('img')).to.have.length(1)
    })

    it('should display a questionmark if no user item is given', function () {
        const wrapper = shallow(<Avatar/>)
        expect(wrapper.find('img').props().src).to.equal('https://placehold.it/200x200?text=?')
    })
})
