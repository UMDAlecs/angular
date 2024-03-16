
// const skills: string[] = ['bash','counter','healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Riverdale'

console.table(strider);

export {};