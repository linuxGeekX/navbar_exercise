(function($) {
	function buildDD(data) {
		function buildItem(index, ddItem) {
			$('<li></li>', {
				'id': 'ddItem' + index,
				'class': ddItem.class_name
			}).appendTo('#ddMain');
			$('<a></a>', {
				'href': ddItem.href,
				'text': ddItem.title
			}).appendTo('li#ddItem' + index);
			if(ddItem.hasOwnProperty('menu')) {
				$('<ul></ul>', {
					'class': 'ddMenu',
				}).appendTo('li#ddItem' + index);
				$.each(ddItem.menu, function(index2, menuItem) {
					var newLI = $('<li></li>');
					$('<a></a>', {
						'href': menuItem.href,
						'text': menuItem.title
					}).appendTo(newLI);
					newLI.appendTo('li#ddItem' + index2 + ' > ul.ddMenu');
				});
			}
		}
		$.each(data, buildItem);
	}
	$.getJSON('menu.json', buildDD);
})(jQuery);
