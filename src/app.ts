export class App {
  signature;
  name = '';
  position = '';
  img = 'http://imgur.com/N0JqEb7.png';
  _phone = '';
  _facebook = '';
  _github = '';
  _linkedin = '';
  _twitter = '';
  _instagram = '';
  get facebook() {
    return this._facebook ? 'https://www.facebook.com/' + this._facebook : '';
  }
  get github() {
    return this._github ? 'https://github.com/' + this._github : '';
  }
  get linkedin() {
    return this._linkedin ? 'https://www.linkedin.com/in/' + this._linkedin : '';
  }
  get twitter() {
    return this._twitter ? 'https://twitter.com/' + this._twitter : '';
  }
  get instagram() {
    return this._instagram ? 'https://www.instagram.com/' + this._instagram : '';
  }
  get phone() {
    return this._phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  copyToClipboard() {
    window.getSelection().selectAllChildren(this.signature);
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      alert('Copying text command was ' + msg);
    } catch (err) {
      alert('Oops, unable to copy');
    }
  }
}
