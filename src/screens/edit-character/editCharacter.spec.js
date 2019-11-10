import React from 'react'
import EditCharacter from './'

import { shallow } from 'enzyme'

describe('Edit character', () => {
    let comp

    beforeEach(() => {
        comp = shallow(<EditCharacter />)
    })

    it('should create container', () => {
        expect(comp).toHaveLength(1)
    });
});