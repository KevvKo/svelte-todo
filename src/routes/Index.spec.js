import Index from './index.svelte';
import { render, screen } from '@testing-library/svelte'

/**
 * @todo check testcase to show loaded data
 */

describe('Index component',() => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    beforeEach(() => {
        render(Index)
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it('should render labels', async () => {
 
            screen.debug()
            expect(screen.getByText('Svelte-ToDo')).toBeTruthy();
            expect(screen.getByTestId(/loading-spinner/)).toBeTruthy();

            // expect(screen.getByText('To Do´s')).toBeTruthy();
     

    })
    it('should render github image', () => {
        expect(screen.getByAltText(/Github/)).toBeTruthy();
    })
})