
import { render, h } from 'preact';
import App from './views'
import './global-style';

let elem;
function init() {
	elem = render(App, document.body, elem);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}

	//TODO add Google Analytics
}
 else {
  // use preact's devtools
  require('preact/devtools');
  // listen for HMR
  if (module.hot) {
    module.hot.accept('./views', init);
  }
}
