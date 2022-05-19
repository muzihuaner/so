var ver = '3.5';
if(localStorage.version !== ver) {
	localStorage.removeItem('content');
	localStorage.version = ver;
}
