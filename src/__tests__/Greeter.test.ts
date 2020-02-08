import { Greeter } from '../index';

test('Greeter test', () => {
    expect(Greeter('Sandi')).toBe('Hello Sandi');
});
