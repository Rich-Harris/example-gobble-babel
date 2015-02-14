var $ = selector => document.querySelector( selector );

export default function foo ( answer ) {
	$( 'body' ).textContent = `the answer is ${answer}`;
}
