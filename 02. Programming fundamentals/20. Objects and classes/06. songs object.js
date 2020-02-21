function songsObjectPractice(input) {
    let numberOfSongs = Number(input.shift());
    let typeSong = input.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong == 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filteredSongs = songs.filter((i) => i.type === typeSong);
        filteredSongs.forEach((i) => console.log(i.name));
    }
}

songsObjectPractice([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
