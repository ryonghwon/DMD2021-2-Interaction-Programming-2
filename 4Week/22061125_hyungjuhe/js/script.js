(function ($) {
    $(document).ready(function () {
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        const $helloDiv = $('div#hello');
        $('<span class="my-name">‘제 이름은 형주희입니다.’</span>').appendTo($helloDiv).eq(0);

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];

        $(images).each((idx, value) => {
            const $bannerItemDiv = $('<div class="banner-item"></div>');
            const $imgSrc = $(`<img src="${value}">`);
            $imgSrc.appendTo($bannerItemDiv);
            $bannerItemDiv.appendTo('div.banner-container');

        });


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        const $pMoveTop = $('p.move-top');
        $pMoveTop.prependTo($('body'));
        $pMoveTop.addClass('move');
        $pMoveTop.text('위로 이동했습니다.');



        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        const $pMoveBottom = $('p.move-bottom');
        $pMoveBottom.appendTo($('body'));
        $pMoveBottom.addClass('move');
        $pMoveBottom.text('아래로 이동했습니다.');

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        const $pError = $('p.error');
        $pError.remove();

        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        const $pModify = $('p.modify');
        $pModify.text('수정되었습니다.');


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $pModify.empty();
        $pModify.remove();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        const $ulList1 = $('ul.list-1').children('li').eq(0);
        for (let i = 4; i > 1; i--) {
            $ulList1.after(`<li>리스트 ${i}</li>`);
        }

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        const $ulList2 = $('ul.list-2').children('li').eq(0);
        for (let i = 1; i <= 4; i++) {
            $ulList2.before(`<li>리스트 ${i}</li>`);
        }


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        const $buttonBtn1 = $('button.btn-1');
        const $divbox1 = $('div.box-1');
        let $width = 100;
        let $maxWidth = 500;

        $divbox1.css('width', $width + 'px');

        $buttonBtn1.click(() => {
            if ($width <= $maxWidth) {
                $width += 100;
                $divbox1.css('width', $width + 'px');
                $maxWidth = 500;
            }
            if ($width > $maxWidth) {
                $width -= 100;
                $divbox1.css('width', $width + 'px');
                $maxWidth = 0;
            }
        });


    });
})(jQuery);