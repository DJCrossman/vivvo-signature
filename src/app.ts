export class App {
  signature;
  name = 'Test McTesterson';
  position = 'Software Developer';
  img = 'http://imgur.com/N0JqEb7.png';
  phone = '';
  facebook = '';
  github = '';
  linkedin = '';
  twitter = '';
  instagram = '';
  get formattedPhone() {
    return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
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
