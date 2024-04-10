import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor(title) {
        super();
        this.setTitle(title);
    }

    getHTML(){
        return `<h1>This is Books Page</h1>
        <p>Welcome to the Books Page</p>
        `;
    }
}