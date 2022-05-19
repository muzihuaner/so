var ver = '4.1';
if(localStorage.version !== ver) {
	localStorage.removeItem('content');
	localStorage.version = ver;
}
