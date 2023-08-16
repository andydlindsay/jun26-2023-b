const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  print(){
    console.log(`Length=${this.length} and width=${this.width}`);
  }

  area(){
    return (this.width * this.length);
  }

};


const r1 = new Rectangle(3,4);

console.log('r1', r1);
r1.print();
console.log('area', r1.area());


const Volume = class extends Rectangle {
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  volume(){
    return (this.height * this.area());
  }

};

const v1 = new Volume(3,4,5);
console.log('v1.volume()', v1.volume());
