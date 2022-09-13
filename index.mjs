const HeadContent = document.getElementsByTagName('head')[0];
const SidebarMenu = document.getElementsByTagName('nav')[0];
const Footer = document.getElementsByTagName('footer')[0];

function start() {
	let item = document.createElement('link');
	item.href = './style.css';
	item.rel = 'stylesheet';
	HeadContent.appendChild(item);

	initNavigator();
	initFooter();
}

function initNavigator() {
	const lst = [
		{'name': 'Home', 'path': 'index'},
		{'name': 'Research', 'path': 'research'},
		{'name': 'Links', 'path': 'link'}
	]

	for (const item of lst) {
		const btn = document.createElement('button');
		btn.className = 'NavBtn';
		btn.innerText = item['name'];
		btn.onclick = function () {
			window.open('./'+item['path']+'.html', '_self');
		}
		SidebarMenu.appendChild(btn);
	}
}

function initFooter() {
	Footer.innerText = 'ZHEN ZHENG - SCNU';
}


document.onload = start();