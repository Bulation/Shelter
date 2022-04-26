export default class PrependComponent {
  constructor(parent, tagName, className, content) {
    this.parent = parent;
    this.node = document.createElement(tagName);
    this.node.className = className;
    this.node.textContent = content;
    this.appendNode();
  }

  appendNode() {
    this.parent.prepend(this.node);
  }

  destroy() {
    this.node.remove();
  }
}
