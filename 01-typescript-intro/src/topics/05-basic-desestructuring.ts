interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 46,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anotherSong,
  songDuration,
  details: { author },
} = audioPlayer;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", songDuration);
// console.log("Author: ", author);


const dbz = ['Goku','Vegete'];

const [ , , trunks = 'Not found' ] = dbz;

console.log('Personaje 3: ', trunks);

export {};
