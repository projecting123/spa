import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(title) {
        super();
        this.setTitle(title);
    }

    getHTML(){
        return `<h1>This is About Page</h1>
        <p>Welcome to the About Page</p>
        `
    }
}