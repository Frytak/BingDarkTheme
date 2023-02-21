/** @format */

let style = document.getElementsByTagName('style');
let new_style = style.innerHTML;

for (let i = 0; i < style.length; i++) {
	console.log('\nStyle number: ', i);

	console.log('\tBefore: ', style[i]);
	console.log('\tBefore: ', new_style == style.innerHTML);

	style[i].innerHTML = style[i].innerHTML.replace('!important', '');

	console.log('\n\tAfter: ', style[i]);
	console.log('\tAfter: ', new_style == style.innerHTML);
}

// "https://www.bing.com/search?q=pln+to+usd&cvid=0cd4fcc7d290430db326d1a7d9cacbdf&aqs=edge.0.69i59j0l8.2530j0j1&pglt=131&FORM=ANNTA1&PC=EE23"
// "https://www.bing.com/search?q=pln+to+usd&cvid=0cd4fcc7d290430db326d1a7d9cacbdf&aqs=edge.0.69i59j0l8.2530j0j1&pglt=131&FORM=ANNTA1&PC=EE23"
//  https://www.bing.com/search?q=pln+to+usd&cvid=0cd4fcc7d290430db326d1a7d9cacbdf&aqs=edge.0.69i59j0l8.2530j0j1&pglt=131&FORM=ANNTA1&PC=EE23
//                       search?q=pln+to+usd&cvid=0cd4fcc7d290430db326d1a7d9cacbdf&aqs=edge.0.69i59j0l8.2530j0j1&pglt=131&FO…
