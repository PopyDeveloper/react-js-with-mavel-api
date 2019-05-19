import React from 'react'
import CharacterList from './'

import { shallow } from 'enzyme'

describe('Character List', () => {
    let comp

    beforeEach(() => {
        comp = shallow(<CharacterList />)
    })

    it('should create container', () => {
        expect(comp).toHaveLength(1)
    });
});