import React from 'react'
import DetailCharacter from './'

import { shallow } from 'enzyme'

describe('Detail Character', () => {
    let comp;

    beforeEach(() => {
        comp = shallow(<DetailCharacter />);
        console.info(comp)
    })

    it('should show details character', () => {
        expect(comp).toHaveLength(1)
    });
});