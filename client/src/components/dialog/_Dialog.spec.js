import Dialog from './Dialog.svelte';
import { render, screen } from '@testing-library/svelte';

describe('AddToDo component',() => {
    it('should render correctly', () => {
        render(Dialog);
    });
    it('should render tags by show = true', () => {
        render(Dialog, {
            props: {
                show: true
            }
        });

        expect(screen.getByPlaceholderText(/whats next?/)).toBeTruthy();
        expect(screen.getByText(/Add/)).toBeTruthy();

        
    });
});