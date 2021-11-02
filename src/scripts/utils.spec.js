import getData from "./utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ toDos: ['xyz'] }),
  })
);

describe('getData', () => {
    it('should return the expected list', async () => {
        const toDos = await getData('../../static/todos.json');
        expect(toDos.length).toBe(1);
        expect(toDos[0]).toBe('xyz');

    });
});