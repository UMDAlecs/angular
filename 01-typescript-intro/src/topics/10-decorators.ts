

function classDecorator<T extends { new ( ...args: any[] ) : {} }> (
  constructor: T,
) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  }
}

@classDecorator
class SuperClass {
  public myProperty : string = 'AbC123';

  print () {
    console.log('Hola mundo');
  }
}


console.log( SuperClass );

let superclass = new SuperClass();


console.log(superclass);