import Error from './Error.svelte';
import { render } from '@testing-library/svelte';

describe('Error component',() => {
    it('should render', () => {
        render(Error);
    });
});