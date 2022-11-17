import React, { Component } from 'react';
//import Editor from 'ckeditor5-custom-build/build/ckeditor';

import {CKEditor} from '@ckeditor/ckeditor5-react';
import { checkIfIsLoggedIn } from '../utils';
const logeado = checkIfIsLoggedIn();

class MyCkeditor extends Component {
	render() {
		return (	
			<div className="App">
			{logeado ?
				<>		
		
				<h2>Empieza a crear algo...</h2>
				<CKEditor
		//			editor={ Editor }
					data="Empieza a crear!"
					onReady={ editor => {
						// You can store the "editor" and use when it is needed.
						console.log( 'Editor is ready to use!', editor );
					} }
					onChange={ ( event, editor ) => {
						const data = editor.getData();
						console.log( { event, editor, data } );
					} }
					onBlur={ ( event, editor ) => {
						console.log( 'Blur.', editor );
					} }
					onFocus={ ( event, editor ) => {
						console.log( 'Focus.', editor );
					} }
				/>
	
			</>:<>
			<h1>Debes tener una cuenta para ingresar al editor</h1>
			</>
		}			</div>);
	}
}

export default MyCkeditor;