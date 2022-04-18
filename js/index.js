function translate() {
	var htmlLang = document.documentElement.lang;

	if (htmlLang == 'es') {
		// For spanish
		setText('t-name', es.header.name);
		setText('t-title', es.header.title);
		setText('t-description', es.header.description);
	} else if (htmlLang == 'en') {
		// For english
	}
}

function setText(classs, text) {
	document.getElementsByClassName(classs)[0].textContent = text;
}

function title() {
	var htmlLang = document.documentElement.lang;

	if (htmlLang == 'es') {
		document.title = esPdfTitle;
	} else if (htmlLang == 'en') {
		document.title = enPdfTitle;
	}
}

window.onload = function () {
	translate();
	title();
};
