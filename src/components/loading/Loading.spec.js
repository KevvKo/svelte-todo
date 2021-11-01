import Loading from './AddToDo.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Loading component',() => {
    it('should render', () => {
        render(Loading)
    })
})