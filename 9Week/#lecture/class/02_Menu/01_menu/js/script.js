console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $win = $(window);
        const $gn = $('#global-nav');
        const $gnEl = $gn.find('a');
        const $content = $('.content');
        const $section = $content.children('.section');

        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
        }

        function addEvent() {
            $win.on('scroll', handleScrollWindow).trigger('scroll');
        }

        function handleScrollWindow() {
            const scrollY = $win.scrollTop();
            // console.log('scroll', scrollY);
            $.each($section, (idx, el) => {
                // console.log(idx, el);
                const $el = $(el);
                const start = $el.offset().top;
                const end = start + $el.innerHeight();
                const add = $win.height() * 0.3;
                if (scrollY >= start - add && scrollY < end - add) {
                    if (!$gnEl.eq(idx).hasClass('active')) {
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                    
                }
            })
            // $section.forEach()
        }

        function reset() {
        }

        init();
    });
})(jQuery);