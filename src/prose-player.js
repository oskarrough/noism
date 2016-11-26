const prosePlayer = {}
const Mixer = new HeliosAudioMixer()
const frameRunner = new heliosFrameRunner()

prosePlayer.speed = 200
frameRunner.add({id: 'mixer', f: Mixer.update})

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
let alreadyUsed = []

function getRandomInt(min, max) {
	let k = Math.floor(Math.random() * (max - min + 1)) + min;
	for (let i = 0; i < alreadyUsed.length; i++) {
		if (alreadyUsed.includes(k)) {
			k = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	alreadyUsed.push(k)
	return k
	// console.log('already used' + randomSound)
	// randomSound = getRandomInt(0, 127)
}

// Get a random sound and map it to a character.
// If the sound was already used, find another one.
// This works my mapping audio files 1-128.mp3 to the index.
prosePlayer.createTracks = (chars) => {
	chars.forEach((char, i) => {
		let randomSound = getRandomInt(0, 127)

		console.log(`mapping ${char} to sound ${randomSound}`)
		Mixer.createTrack(char, {
			autoplay: false,
			source: `sounds/${randomSound}`
		})
	})
}

// Play all notes one after another.
prosePlayer.playAll = (notes, index = 0) => {
	if (notes.length > index) {
		setTimeout(() => {
			// console.log(`Playing ${notes[index]}`)
			prosePlayer.play(notes[index]);
			// Play the next note.
			prosePlayer.playAll(notes, ++index);
		}, prosePlayer.speed);
	}
}

prosePlayer.play = (char) => {
	console.log(`playing character: ${char}`)
	Mixer.getTrack(char).play()
}

// Mixer.getTrack('track1').gain(0.5).pan(180);
// Mixer.getTrack('track1').tweenGain(0, 1)
//   .then(function(track){
//     Mixer.removeTrack(track);
//   })

