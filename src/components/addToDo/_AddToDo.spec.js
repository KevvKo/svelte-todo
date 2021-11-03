import AddToDo from './AddToDo.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';
describe('AddToDo component',() => {

    it('should render button label', () => {
        render(AddToDo);
        expect(screen.getByTestId(/add-button/)).toBeTruthy();
    });
    it('should display the dialog component on click', async  () => {
        render(AddToDo);

        fireEvent.click(screen.getByTestId('add-button'));
        await tick();
        expect(screen.getByPlaceholderText(/whats next?/)).toBeTruthy();
    });
});