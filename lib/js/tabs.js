window.onload = function () {
	const tabBlocks = document.querySelectorAll('.wp-block-atbs-tabs');

	[...tabBlocks].forEach(function (tabBlock) {
		const tabLabels = tabBlock.querySelectorAll('.atbs__tab-label');
		const tabPanels = tabBlock.querySelectorAll('.atbs__tab-panel');

		//check for mouse click or enter keypress
		const toggleEvent = function (e) {
			if (e.type === 'click') {
				return true;
			} else if (e.type === 'keypress') {
				const code = e.charCode || e.keyCode;
				if (code === 32 || code === 13) {
					return true;
				}
			} else {
				return false;
			}
		}; //a11yEvent

		const toggleTabClasses = function (label, i) {
			const activeTab = tabBlock.querySelector('.atbs__tab-label.active');
			const activePanel = tabBlock.querySelector(
				'.atbs__tab-panel.active'
			);

			activeTab.classList.remove('active');
			activeTab.setAttribute('tabindex', 0);
			activeTab.setAttribute('aria-selected', false);

			label.classList.add('active');
			label.setAttribute('tabindex', 0);
			label.setAttribute('aria-selected', true);

			activePanel.classList.remove('active');
			activePanel.setAttribute('tabindex', 0);
			activePanel.setAttribute('aria-selected', false);
			activePanel.setAttribute('hidden', true);

			tabPanels[i].classList.add('active');
			tabPanels[i].setAttribute('tabindex', 0);
			tabPanels[i].setAttribute('aria-selected', true);
			tabPanels[i].removeAttribute('hidden');
		};

		tabLabels.forEach(function (label, i) {
			if (label.classList.contains('active')) {
				tabPanels[i].classList.toggle('active');
			}

			label.addEventListener('click', function (e) {
				if (toggleEvent(e) === true) {
					toggleTabClasses(label, i);
				}
			});
			label.addEventListener('keypress', function (e) {
				if (toggleEvent(e) === true) {
					toggleTabClasses(label, i);
				}
			});
		});
	}); //tabBlocks forEach
};
