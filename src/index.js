import { render, h } from 'preact';
import App from './views'
import './global-style';

let elem;
function init() {
	elem = render(<App/>, document.body, elem);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}

    // Google Analytics

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-83059702-3', 'auto');
		ga('send', 'pageview');
}
 else {
  // use preact's devtools
  require('preact/devtools');
  // listen for HMR
  if (module.hot) {
    module.hot.accept('./views', init);
  }
}
