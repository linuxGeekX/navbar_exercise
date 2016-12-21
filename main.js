(function($) {
	function buildDD(data) {
		function buildItem(index, ddItem) {
			console.log(ddItem);
			var ddStr = '';
			ddStr += '<li';
			if(ddItem.hasOwnProperty('class_name')) {
				ddStr += ' class="' + ddItem['class_name'] + '"';
			}
			ddStr += '><a';
			if(ddItem['href'] !== null) {
				ddStr += ' href="' + ddItem['href'] +'"';
			}
			ddStr += '>' + ddItem.title + '</a>'
			if(ddItem.hasOwnProperty('menu')) {
				ddStr += '<ul class="ddMenu">';
				$.each(ddItem.menu, function(index, menuItem) {
					ddStr += '<li><a href="' + menuItem['href'] +'">' + menuItem['title'] + '</a></li>';
				});
				ddStr += '</ul>';
			}
			ddStr += '</li>';
			console.log(ddStr);
			$('#ddMain').append(ddStr);
		}
		$.each(data, buildItem);
	}

	$.getJSON('menu.json', buildDD);
})(jQuery);