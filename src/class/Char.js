import { MyState } from './State'

export class myChar {
    constructor(char = "", state = new MyState()) {
        this.char = char;
        this.state = state;
    }
}