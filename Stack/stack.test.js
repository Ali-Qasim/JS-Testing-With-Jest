const{

    Stack

} = require("./stack");

let stack;

beforeEach(() => {
    stack = new Stack();
})

describe("Stack", () => {

    it("is created empty", () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    })

    describe("push", () => {

        let inp = 'foo';

        it("increments top", () => {

            stack.push(inp);
            expect(stack.top).toBe(0);

        })

        it("can push to the top", () => {

            stack.push(inp);

            expect(stack.peek).toBe(inp);

        })
    })

    describe("pop", () => {

        let inp = 'foo';
        beforeEach(() => {

            stack.push(inp);

        })

        it("returns null on empty stack", () => {

            stack.pop();

            expect(stack.top).toBe(-1);
            expect(stack.pop()).toBe(null);

        })

        it("it decrements top", () => {   

            expect(stack.top).toBe(0);

            stack.pop()

            expect(stack.top).toBe(-1);
            
        })

        it("returns from top", () => {

            expect(stack.pop()).toBe(inp);

        })
    })
})