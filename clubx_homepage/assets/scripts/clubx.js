// Start Rian
const btnDownloads = document.querySelectorAll('.btn-downloads');
btnDownloads.forEach((download) => {
	download.addEventListener('click', function (e) {
		e.preventDefault();
		alert('Beta version will be released soon');
	});
});

const youtubePopup = document.getElementById('youtube-clubx-game');
const thumbnailClubxGame = document.getElementById('thumb-clubx-game');
const html = document.querySelector('html');

// thumbnailClubxGame.addEventListener('click', function () {
// 	youtubePopup.classList.remove('d-none');
// 	html.style.overflow = 'hidden';
// 	youtubePopup.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tKVAVojVDY8?autoplay=1" title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen></iframe>`;
// });

youtubePopup.addEventListener('click', function () {
	youtubePopup.classList.add('d-none');
	html.removeAttribute('style');
	youtubePopup.innerHTML = '';
});
// End Rian
