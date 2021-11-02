import Loading from './Loading.svelte';
import { render } from '@testing-library/svelte';

describe('Loading component',() => {
    it('should render', () => {
        render(Loading)
    })
})