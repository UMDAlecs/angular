
// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// const addNumbersArrow = (a: number, b: number): string => {
//     return `${a + b}`;
// }

// function multiply ( firstNumber: number, secondNumber?: number, base: number = 2): number {
//     return firstNumber * base;
// }

// let result: number = addNumbers(1, 2);
// let result2: string = addNumbersArrow(2, 4);
// let multiplyResult: number = multiply(2, 4);

// console.log({ result });
// console.log({ result2 });
// console.log({ multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ): void => {
    character.hp += amount;
} 

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter(strider, 10);

strider.showHp();


export {};