import * as Research from "./research.mjs";

const HeadContent = document.getElementsByTagName('head')[0];
const SidebarMenu = document.getElementsByTagName('nav')[0];
const Footer = document.getElementsByTagName('footer')[0];

function start() {
	let item = document.createElement('link');
	item.href = './style.css';
	item.rel = 'stylesheet';
	HeadContent.appendChild(item);

	initFooter();
	initNavigator();

	loadPageOfResearch();
}

function initNavigator() {
	const lst = [
		{'name': 'Home', 'path': 'index'},
		{'name': 'Research', 'path': 'research'},
		{'name': 'Teaching', 'path': 'teaching'},
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

function loadPageOfResearch(abbr_mode=true) {
	const publication_list = document.getElementById('Publications');
	if (publication_list==null) return;
	publication_list.innerHTML = '';
	for (const paper of Research.Publications) {
		const item = document.createElement('li');
		publication_list.appendChild(item);
		const key_surplus = abbr_mode ? ' abbr' : '', self_name = abbr_mode ? 'Z. Zheng' : 'Zhen Zheng';
		let str = paper['title']+',<br>'+paper['authors'+key_surplus]+', '+'<span class="JournalName">'+paper['journal'+key_surplus]+'</span>, ';
		item.innerHTML = str.replace('$self', '<span class="HighlightTxt">'+self_name+'</span>').replace('$email', '&#x272A;');

		let link = document.createElement('a');
		link.href = paper['link'];
		link.innerText = paper['volume']+', '+paper['number'];
		item.appendChild(link);

		item.innerHTML += ' ('+paper['year']+').';
	}
}


document.onload = start();
