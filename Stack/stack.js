class Stack {
    constructor() {

        this.top = -1;
        this.items = {} //store items as object/dictionary

    }

    push(obj){

        this.top++;
        this.items[this.top] = obj; //keys are indices

    }

    pop(obj){

        if(this.top > -1){

            this.top--;
            return this.items[this.top + 1];

        }

        else return null;
    }

    get peek() {

        return this.items[this.top];

    }
}

module.exports = {

    Stack

}