'use strict';

describe('Sonos.com Logo', () => {

	// Before we run any tests, navigate to the home page.

	before(function*() {
		yield browser.url('/');
	});

	// Let's make an array of all the CSS properties we want to test.

	let cssProps = {
		color: 'rgba(255,255,255,1)',
		'font-family': 'sonos-logoregular',
		'text-transform': 'uppercase'
	};

	// For every CSS property we have, let's write a test for it.

	Object.keys(cssProps).forEach(cssPropKey => {

		it(`has a ${cssPropKey} property with the value of ${cssProps[cssPropKey]}`, function*() {

			var property = yield browser.getCssProperty('[data-topbar] h1 a', cssPropKey);

			property.value.should.equal(cssProps[cssPropKey]);

		});

	});

});