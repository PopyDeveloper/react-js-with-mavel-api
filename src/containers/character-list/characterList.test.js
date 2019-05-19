import React from 'react'
import CharacterList from './'
import renderer from 'react-test-renderer'
import { withRouter } from 'react-router-dom' 

const comp = <CharacterList />


test('should show list characters', () => {
    expect(renderer.create(<CharacterList />)).toBeDefined()
});