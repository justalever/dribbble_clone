document.addEventListener("turbolinks:load", function() {

	var Shots = {
		previewShot() {
			if (window.File && window.FileList && window.FileReader) {

				function handleFileSelect(evt) {
					evt.stopPropagation();
					evt.preventDefault();

					let files = evt.target.files || evt.dataTransfer.files; 
					// files is a FileList of File objects. List some properties.
					for (var i = 0, f; f = files[i]; i++) {

						// Only process image files.
						if (!f.type.match('image.*')) {
							continue;
						}
						const reader = new FileReader();

						// Closure to capture the file information.
						reader.onload = (function(theFile) {
							return function(e) {
								// Render thumbnail.
								let span = document.createElement('span');
								span.innerHTML = ['<img class="thumb" src="', e.target.result,
									'" title="', escape(theFile.name), '"/>'
								].join('');
								document.getElementById('list').insertBefore(span, null);
							};
						})(f);

						// Read in the image file as a data URL.
						reader.readAsDataURL(f);
					}
				}

				function handleDragOver(evt) {
					evt.stopPropagation();
					evt.preventDefault();
					evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
				}

				// Setup the dnd listeners.
				// https://stackoverflow.com/questions/47515232/how-to-set-file-input-value-when-dropping-file-on-page
				const dropZone = document.getElementById('drop_zone');
				const target = document.documentElement;
				const fileInput = document.getElementById('shot_user_shot');
				const previewImage = document.getElementById('previewImage');
				const newShotForm = document.getElementById('new_shot');


				if (dropZone) {
					dropZone.addEventListener('dragover', handleDragOver, false);
					dropZone.addEventListener('drop', handleFileSelect, false);

					// Drop zone classes itself
					dropZone.addEventListener('dragover', (e) => {
						dropZone.classList.add('fire');
					}, false);

					dropZone.addEventListener('dragleave', (e) => {
						dropZone.classList.remove('fire');
					}, false);

					dropZone.addEventListener('drop', (e) => {
						e.preventDefault();
						dropZone.classList.remove('fire');
						fileInput.files = e.dataTransfer.files;
						// if on shot/id/edit hide preview image on drop
						if (previewImage) {
							previewImage.style.display = 'none';
						}
						// If on shots/new hide dropzone on drop
						if(newShotForm) {
							dropZone.style.display = 'none';
						}
					}, false);

					// Body specific 
					target.addEventListener('dragover', (e) => {
						e.preventDefault();
						dropZone.classList.add('dragging');
					}, false);

					// removes dragging class to body WHEN NOT dragging
					target.addEventListener('dragleave', (e) => {
						dropZone.classList.remove('dragging');
						dropZone.classList.remove('fire');
					}, false);
				}
			}
		},
		shotHover() {
			$('.shot').hover(function() {
				$(this).children('.shot-data').toggleClass('visible');
			});
		}

	};
	Shots.previewShot();
	Shots.shotHover();


});

