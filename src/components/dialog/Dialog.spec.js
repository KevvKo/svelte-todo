import Dialog from './Dialog.svelte';
import { render, screen } from '@testing-library/svelte';

describe('AddToDo component',() => {
    it('should render correctly', () => {
        render(Dialog);
    });
});