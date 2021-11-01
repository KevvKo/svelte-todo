import Index from './index.svelte';
import { render, screen } from '@testing-library/svelte'

describe('Index component',() => {
    beforeEach(() => {
        render(Index)
    })
    it('should render labels', () => {
        expect(screen.getByText('Svelte-ToDo')).toBeTruthy();
        expect(screen.getByText('To Do´s')).toBeTruthy();
    })
    it('should render github image', () => {
        expect(screen.getByAltText(/Github/)).toBeTruthy();
    })
})