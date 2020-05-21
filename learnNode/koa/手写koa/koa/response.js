let response = {
  get body() {
    return this._body;
  },
  set body(value) {
    this.res.writeHead(200,{'Context-Type':'text/html'});
    this._body = value
  }

}

module.exports = response;