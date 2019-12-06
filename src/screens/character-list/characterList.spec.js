import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CharacterList from './'

// import { shallow } from 'enzyme'

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('fetch data', async () => {
    const fakerData = {
        id: 12983,
        name: 'test'
    };

    jest.spyOn(global, 'fetch').mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(fakerData)
        })
    })

    await act(async () => {
        render(<CharacterListView id="12983" />)
    })


    // expect(container.querySelector("Container"))

    global.fetch.mockRestore();


})

// describe('Character List', () => {
//     let comp

//     beforeEach(() => {
//         comp = shallow(<CharacterList />)
//     })

//     it('should create container', () => {
//         expect(comp).toHaveLength(1)
//     });
// });