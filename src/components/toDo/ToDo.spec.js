import ToDo from './ToDo.svelte';
import { render, screen } from '@testing-library/svelte';

describe('ToDo component',() => {

    beforeEach(() => {
        render( ToDo, {
            description: 'xyz'
        })
    })

    it('should render description property', () => {
        expect(screen.getByText(/xyz/)).toBeTruthy();
    })
})