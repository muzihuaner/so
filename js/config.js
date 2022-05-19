var ver = '1.9';
if(localStorage.version !== ver) {
	localStorage.removeItem('content');
	localStorage.version = ver;
}
