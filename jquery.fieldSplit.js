/*
 * jquery.fieldSplit.js
 *
 * Copyright (c) Tomohiro Okuwaki (http://www.tinybeans.net/blog/)
 * Licensed under MIT Lisence:
 * http://www.opensource.org/licenses/mit-license.php
 * http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license
 *
 * Since:   2012-03-01
 * Update:  2012-03-01
 * version: 0.1
 * 
 */
(function($){
    $.fn.fieldSplit = function(options){
        var op = $.extend({}, $.fn.fieldSplit.defaults, options);
        return this.each(function(){
            var $self = $(this);
            var separator = op.separator;
            var addClass = (op.addClass !== '') ? ' class="' + op.addClass + '"': '';
            var splitCount = op.splitCount > 1 ? op.splitCount: 2;
            var selfVal = $self.val() ? $self.val().split(op.separator) : [];

            if (!op.debug) {
                $self.hide();
            }

            var input = [];
            var value = '';
            var placeholder = '';
            for (var i = 0; i < splitCount; i++) {
                value = (selfVal[i]) ? selfVal[i] : '';
                placeholder = (op.placeholder[i]) ? op.placeholder[i] : '';
                input.push('<input type="text"' + addClass + ' value="' + value + '" placeholder="' + placeholder + '" style="margin-right:' + op.interval + '" />');
                value = '';
            }
            var $span = $('<span>' + input.join('') + '</span>').children().each(function(){
                $(this).blur(function(){
                    var values = [];
                    $(this).siblings().andSelf().each(function(){
                        values.push($(this).val());
                    });
                    $self.val(values.join(separator));
                });
            }).end();
            $self.after($span);
        });
    };    
    $.fn.fieldSplit.defaults = {
        debug: false,
        splitCount: 2,
        placeholder: [],
        interval: '5px',
        addClass: '',
        separator: ','
    };
})(jQuery);