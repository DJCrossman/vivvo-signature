export class App {
  signature;
  copyMessage;
  profile: any;

  get name() {
    return this.profile.name;
  }
  get position() {
    return this.profile.position;
  }
  get img() {
    return this.profile.img;
  }
  get phone() {
    return this.profile._phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  get facebook() {
    this.profile._facebook = this.profile._facebook.replace('https://www.facebook.com/', '');
    return this.profile._facebook ? 'https://www.facebook.com/' + this.profile._facebook : '';
  }
  get github() {
    this.profile._github = this.profile._github.replace('https://github.com/', '');
    return this.profile._github ? 'https://github.com/' + this.profile._github : '';
  }
  get linkedin() {
    this.profile._linkedin = this.profile._linkedin.replace('https://www.linkedin.com/in/', '');
    return this.profile._linkedin ? 'https://www.linkedin.com/in/' + this.profile._linkedin : '';
  }
  get twitter() {
    this.profile._twitter = this.profile._twitter.replace('https://twitter.com/', '');
    return this.profile._twitter ? 'https://twitter.com/' + this.profile._twitter : '';
  }
  get instagram() {
    this.profile._instagram = this.profile._instagram.replace('https://www.instagram.com/', '');
    return this.profile._instagram ? 'https://www.instagram.com/' + this.profile._instagram : '';
  }

  activate() {
    this.profile = localStorage.profile ? JSON.parse(localStorage.profile) : {
      name: '',
      position: '',
      img: 'http://imgur.com/N0JqEb7.png',
      _phone: '',
      _facebook: '',
      _github: '',
      _linkedin: '',
      _twitter: '',
      _instagram: '',
      confidential: false
    };
  }

  copyToClipboard() {
    if(this.profile) localStorage.setItem('profile', JSON.stringify(this.profile));
    window.getSelection().selectAllChildren(this.signature);
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';

      this.copyMessage = 'Copying text command was ' + msg;
    } catch (err) {
      this.copyMessage = 'Oops, unable to copy';
    }
  }
}
