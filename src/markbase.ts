import * as showdown from 'showdown';

interface MarkbaseOptions {
	showdownConverterOptions?: showdown.ConverterOptions;
}

declare global {
	interface Window {
		MarkbaseOptions: Partial<MarkbaseOptions> | undefined;
	}
  }

document.addEventListener('DOMContentLoaded', () => {

	let container = document.createElement('body')

	const converter = new showdown.Converter();
	converter.setFlavor('github');

	if( window.MarkbaseOptions ) {
		for (const [key, value] of Object.entries(window.MarkbaseOptions)) {
			converter.setOption(key, value);
		}
	}
	
	document.body.innerHTML = converter.makeHtml(document.body.innerHTML);

});