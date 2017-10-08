export default class Context {
    constructor(sandbox, parentElement) {
      this.iframe = document.createElement('iframe');
      this.iframe.style.display = 'none';
      parentElement = parentElement || document.body;
      parentElement.appendChild(this.iframe);
      var win = this.iframe.contentWindow;
      if (sandbox) {
        this.extend(sandbox);
      }
    }
    evaluate(code) {
      return this.iframe.contentWindow.eval(code);
    }
    destroy() {
      if (this.iframe) {
        this.iframe.parentNode.removeChild(this.iframe);
        this.iframe = null;
      }
    }
    getGlobal() {
      return this.iframe.contentWindow;
    }
    extend(sandbox) {
      var global = this.getGlobal();
      Object.keys(sandbox).forEach(function (key) {
        global[key] = sandbox[key];
      });
    }
}
