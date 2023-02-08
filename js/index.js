const ids = {
	// Header
	't-name': 'header.name',
	't-title': 'header.title',
	't-description': 'header.description',
	// Experience
	't-experience': 'experience.title',
	't-ex-1-title': 'experience.info.1.title',
	't-ex-1-place': 'experience.info.1.place',
	't-ex-1-date': 'experience.info.1.date',
	't-ex-1-list-1-place': 'experience.info.1.list.1.place',
	't-ex-1-list-1-description': 'experience.info.1.list.1.description',
	't-ex-1-list-2-place': 'experience.info.1.list.2.place',
	't-ex-1-list-2-description': 'experience.info.1.list.2.description',
	't-ex-1-list-3-place': 'experience.info.1.list.3.place',
	't-ex-1-list-3-description': 'experience.info.1.list.3.description',
	't-ex-1-list-4-place': 'experience.info.1.list.4.place',
	't-ex-1-list-4-description': 'experience.info.1.list.4.description',
	't-ex-2-title': 'experience.info.2.title',
	't-ex-2-subtitle': 'experience.info.2.subtitle',
	't-ex-2-place': 'experience.info.2.place',
	't-ex-2-date': 'experience.info.2.date',
	't-ex-2-list-1': 'experience.info.2.list.1',
	't-ex-2-list-2': 'experience.info.2.list.2',
	't-ex-2-list-3': 'experience.info.2.list.3',
	// Education
	't-education': 'education.title',
	't-ed-1-place': 'education.info.1.place',
	't-ed-1-date': 'education.info.1.date',
	't-ed-1-title': 'education.info.1.title',
	't-ed-1-subtitle': 'education.info.1.subtitle',
	't-ed-1-description': 'education.info.1.description',
	't-ed-2-place': 'education.info.2.place',
	't-ed-2-date': 'education.info.2.date',
	't-ed-2-title': 'education.info.2.title',
	't-ed-2-subtitle': 'education.info.2.subtitle',
	't-ed-2-description': 'education.info.2.description',
	't-ed-2-gpa': 'education.info.2.gpa',
	// References
	't-references': 'references.title',
	't-ref-1': 'references.info.1',
	't-ref-2': 'references.info.2',
	// Skills
	't-skills': 'skills.title',
	't-ski-1': 'skills.info.1',
	't-ski-2': 'skills.info.2',
	't-ski-3': 'skills.info.3',
	't-ski-4': 'skills.info.4',
	't-ski-5': 'skills.info.5',
	't-ski-6': 'skills.info.6',
	't-ski-7': 'skills.info.7',
	't-ski-8': 'skills.info.8',
	't-ski-9': 'skills.info.9',
	// Contact Info
	't-contact': 'contact.title',
	't-con-1-title': 'contact.info.1.title',
	't-con-1-val': 'contact.info.1.value',
	't-con-2-title': 'contact.info.2.title',
	't-con-2-val': 'contact.info.2.value',
	't-con-3-title': 'contact.info.3.title',
	't-con-3-val': 'contact.info.3.value',
	't-con-4-title': 'contact.info.4.title',
	't-con-4-val': 'contact.info.4.value',
	't-con-5-title': 'contact.info.5.title',
	't-con-5-val': 'contact.info.5.value',
	't-con-6-title': 'contact.info.6.title',
	't-con-6-val': 'contact.info.6.value',
	// Langs
	't-langs': 'langs.title',
	't-langs-1-title': 'langs.info.1.title',
	't-langs-1-val': 'langs.info.1.value',
	't-langs-2-title': 'langs.info.2.title',
	't-langs-2-val': 'langs.info.2.value',
	// Awards
	't-awards': 'awards.title',
	't-awards-1': 'awards.info.1',
	't-awards-2': 'awards.info.2',
	't-awards-3': 'awards.info.3'
};

var lang;

// Usefull functions

// Get lang value by path
function resolvePath(path) {
	// (404) is the default value.
	return path.split('.').reduce((obj, nextPath) => (obj ? obj[nextPath] : '(404)'), lang);
}

// Replace the text in the class
function setText(classs, text) {
	let docs = document.getElementsByClassName(classs);

	for (let i = 0; i < docs.length; i++) {
		docs[i].textContent = text;
	}
}

// Main Functions

// Get HTML lang
function setLang() {
	let htmlLang = document.documentElement.lang;

	switch (htmlLang) {
		case 'en':
			lang = en;
			document.title = enPdfTitle;
			break;
		case 'es':
		default:
			lang = es;
			document.title = esPdfTitle;
	}
}

// Replace the text in every class declared in ids with its path
function replaceText() {
	for (const [classs, path] of Object.entries(ids)) {
		let text = resolvePath(path);
		setText(classs, text);
	}
}

window.onload = function () {
	setLang();
	replaceText();
};
