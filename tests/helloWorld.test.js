import helloWorld from '../server/scripts/helloWorld'

describe('should display text', function () {
    it('hello world', function() {
        expect(helloWorld()).toBe('Hello World');
    })
});