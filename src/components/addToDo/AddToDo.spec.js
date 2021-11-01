import AddToDo from './AddToDo.svelte';
import { render, screen } from '@testing-library/svelte';

describe('AddToDo component',() => {
    beforeEach(() => {
        render(AddToDo)
    })
    it('should render button label', () => {
        expect(screen.getByText(/Add/)).toBeTruthy();
    })
})