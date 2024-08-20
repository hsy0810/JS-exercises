customElements.define("inline-circle", class InlineCircle extends HTMLElement {
  static get observedAttributes() {
    return ['border-color'];
  }

  connectedCallback() {
    this.style.display = "inline-block";
    this.style.borderRadius = "50%";
    this.style.border = "solid black 1px";
    this.style.transform = "translateY(10%)";

    if (!this.style.width) {
      this.style.width = "0.8em";
      this.style.height = "0.8em";
    }

    // border-color
    const borderColor = this.getAttribute('border-color') || 'black';
    this.style.borderColor = borderColor;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'border-color' && oldValue !== newValue) {
      this.style.borderColor = newValue || 'black';
    }
  }

  get borderColor() {
    return this.getAttribute("border-color");
  }

  set borderColor(value) {
    this.setAttribute("border-color", value);
  }
});
