(() => {
	const togglers = document.getElementsByClassName('category-toggler');

	var lastVisible;
	var fadingOut;

	for (let toggler of togglers) {
		toggler.addEventListener('change',  updateVisibility);
	}

	updateVisibility();

	function updateVisibility() {
		if (lastVisible) {
			lastVisible.classList.add('fading-out');
			fadingOut = lastVisible;

			currentTask = setTimeout(() => {
				currentTask = null;
				fadingOut.classList.remove('fading-out');
			}, 450);
		}

		for (let toggler of togglers) {
			let target = toggler.dataset.target;

			if (target) {
				let element = document.querySelector('[data-category="' + target + '"]');
				
				if (toggler.checked) {
					element.classList.add('shown');
					element.classList.remove('fading-out');
					lastVisible = element;
				} else {
					element.classList.remove('shown');
					
					if (element != fadingOut) {
						element.classList.remove('fading-out');
					}
				}
			}
		}
	}
})();
