/*!
 * jQuery element placer 1.0
 * 
 * Copyright (c) 2010 Martin Tajur (martin@tajur.ee)
 * Licensed under the GPL license and MIT:
 *   http://www.opensource.org/licenses/GPL-license.php
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Usage examples:
 *   $('.element').place({ top: 400, left: 400 });
 *   $('.element').place({ top: 400, left: 400, area: 'document' });
 * 
 * Parameters:
 *   top: desired top offset of the placeable element in pixels (default 20)
 *   left: desired left offset of the placeable element in pixels (default 20)
 *   margin: desired margin from the viewport edges in pixels (default 0)
 *   area: desired viewport area in which the element should be visible in (either 'window' or 'document', default 'window')
 */

$.fn.place = function(options) {
	var defaults = {  
		top: 20,
		left: 20,
		margin: 0,
		area: 'window'
	};  
	var options = $.extend(defaults, options);
	return this.each(function() {
		
		// define the viewport/area		
		var _area;
		switch (options.area) {
			case 'document':
				_area = $(document);
				break;
			case 'window':
				_area = $(window);
				break;
			default:
				_area = $(document);
		}
		
		// remember the elements visibility state
		var _was_visible = $(this).is(':visible');
		var _previous_visibility = $(this).css('visibility');
		
		// show the element invisibly in order to capture its dimensions
		$(this)
			.css({
				top: 0,
				left: 0,
				visibility: 'hidden'
			})
			.show();
		
		// define new position parameters
		var _new_top = options.top;
		var _new_left = options.left;
		
		// check if the element could go out of the document, and if it could, avoid it
		if (parseInt(_new_left, 10) + $(this).outerWidth() > _area.width()) { _new_left = _area.width() - $(this).outerWidth(true) - parseInt(options.margin, 10); }
		if (parseInt(_new_top, 10) + $(this).outerHeight() > _area.height()) { _new_top = _area.height() - $(this).outerHeight(true) - parseInt(options.margin, 10); }
		if (_new_left < 0) { _new_left = 0 + parseInt(options.margin, 10); }
		if (_new_top < 0) { _new_top = 0 + parseInt(options.margin, 10); }
		
		// position the element, and restore its visibility
		$(this)
			.css({
				top: _new_top,
				left: _new_left,
				visibility: _previous_visibility
			});
		
		// if the element was not visible in the first place, hide it
		if (_was_visible == false) {
			$(this).hide();
		}
	});
};
