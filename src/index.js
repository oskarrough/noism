// const test = 'abcdefghijklmnopqrstuvxyz'
// prosePlayer.createTracks(test.split(''))
// prosePlayer.playAll(test)

function enableKeyboard() {
	document.addEventListener('keydown', onKeyDown, false);
	function onKeyDown(e) {
		// prosePlayer.play(e.key)
		console.log(e.keyCode)
		var track = Mixer.getTrack(e.keyCode)
		if (track) {
				track.play()
		} else {
			Mixer.createTrack(String(e.keyCode), {
				autoplay: true,
				source: `sounds/${e.keyCode}`
			})
		}
	}
}

function start() {
	const lyrics = document.querySelector('.js-lyrics')
	const chars = lyrics.innerText.split('')
	const uniqueChars = deduplicate(chars)
	console.log(`We have ${uniqueChars.length} different characters.`)
	prosePlayer.createTracks(uniqueChars)
	prosePlayer.playAll(chars)
}

function handleInput (e) {
	console.log(e)
}

// var div = document.querySelector('.js-lyrics');
// div.addEventListener('input', handleInput)
start()
// enableKeyboard()

