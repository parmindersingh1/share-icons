import { h } from 'preact';
import { Router } from 'preact-router';

import ShareIcon from './share-icons';
const link = window.location.origin;

const App = () => (
	<div id="app">
		<ShareIcon align="top" link={link} />
		

		{/* <ShareIcon align="bottom" link={link} /> */}
	</div>
)

export default App;
