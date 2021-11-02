import AddToDo from './AddToDo.svelte';
import { render, screen } from '@testing-library/svelte';

describe('AddToDo component',() => {

    it('should render button label', () => {
        render(AddToDo)
        expect(screen.getByTestId(/add-button/)).toBeTruthy();
    })
    it('onClick event should work', () => {

    })
});