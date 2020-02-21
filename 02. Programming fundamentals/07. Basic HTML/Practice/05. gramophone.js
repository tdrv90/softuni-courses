function gramophone(bandName, nameOfAlbum, nameOfSong) {
    let songDuration = (bandName.length * nameOfAlbum.length) * nameOfSong.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');