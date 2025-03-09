import {describe, it, expect} from 'vitest';
import { screen, render} from '@testing-library/react'
import {Home} from './home.jsx'

describe("check home rendering", () => {
    it("home render", () => {
        const { container } = render(<Home />)
        expect(container).toMatchSnapshot();
    })
})