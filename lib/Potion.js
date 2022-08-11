function Potion(name) {
    this.name = name;
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }

    // console.log (this.value);
    
  }
  
  module.exports = Potion;