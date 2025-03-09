import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react'
import {Ex} from './ex'

describe("initial test", () => {
    it("first test", () => {
        const { container } = render(<Ex />)
        expect(container).toMatchSnapshot();
    })
})