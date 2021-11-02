import AddToDo from './AddToDo.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';

describe('AddToDo component',() => {

    it('should render button label', () => {
        render(AddToDo)
        expect(screen.getByText(/Add/)).toBeTruthy();
    })
    it('onClick event should work', () => {
        const mock = jest.fn();
        render(AddToDo, { props: { onClick: mock }});
        
        const button = screen.getByText(/Add/);
        fireEvent.click(button);

        expect(mock).toHaveBeenCalled();
    })
});