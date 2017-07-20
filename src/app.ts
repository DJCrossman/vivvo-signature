export class App {
  name = 'Test McTesterson';
  position = 'Software Developer';
  img = 'http://imgur.com/N0JqEb7.png';
  phone = '';
  facebook = '';
  linkedin = '';
  twitter = '';
  instagram = '';
  get formattedPhone() {
    return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}
