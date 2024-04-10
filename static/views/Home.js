import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(title) {
        super();
        this.setTitle(title);
    }

    getHTML(){
        return `<h1>This is the Home Page</h1>
        <p>Welcome to the Home Page</p>
        `
    }
}