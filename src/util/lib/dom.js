/** @jsx dom */
export default function dom(name, attrs, ...children) {
    const el = document.createElement(name);
    console.log(name, attrs, children);
    if (attrs) {
        for (let attr in attrs) {
            el.setAttribute(attr, attrs[attr]);
        }
    }
    for (let child of children) {
        if (child instanceof HTMLElement) {
            el.appendChild(child);
        }
        else {
            const text = document.createTextNode(child);
            el.appendChild(text);
        }
    }
    return el;
}
