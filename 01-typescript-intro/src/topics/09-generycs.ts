

export function whatsMyType<T>( argument : T ) : T {
  return argument;
}

const iAmAString = whatsMyType<string>('Hola mundo');
const iAmANum = whatsMyType<number>(2.1);
const iAmAArray = whatsMyType<number[]>([2,3,1,1]);

// console.log(iAmAString.split(' '));
// console.log(iAmANum.split(' '));
// console.log(iAmAArray.split(' '));