;
!(function() {
	var Rem = {
		version: "2.1",
		author: 'wjh',
		data: '20161125',
		setRem: function() {
			var H_fontSzie = 20;
			var  width = document.documentElement.clientWidth ||
				document.body.clientWidth;
			var  rem = (width / 640) * H_fontSzie + "px";
			document.getElementsByTagName("html")[0].style.fontSize = rem;
		}()
	}
}())