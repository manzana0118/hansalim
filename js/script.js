$(document).ready(function () {

    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');

    modal_close.click(function () {
        modal.hide();
    });

    let modal_bt = $('.modal-bt');
    modal_bt.click(function () {
        modal.show();
    });


    // 전체 메뉴 관련
    let all_menu_wrap = $('.all-menu-wrap');
    all_menu_wrap.niceScroll({
        cursoropacitymax: 0.3,
        cursorwidth: "7px",
        cursorborderradius: "10px",
    });

    let all_menu = $('.all-menu');
    let all_list_cate_li = $('.all-list-cate > li');
    let all_menu_detail_list = $('.all-menu-detail-list');

    // 상세 메뉴가 사라지는 타이머를 저장한다.
    // idntifier (식별자)
    let all_menu_timer;
    let all_menu_timer_delay = 100;

    $.each(all_list_cate_li, function (index, item) {

        $(this).mouseenter(function () {
            clearTimeout(all_menu_timer);
            all_menu.addClass('all-menu-active');
            all_menu_detail_list.hide();
            all_menu_detail_list.eq(index).show();
        });

        $(this).mouseleave(function () {
            clearTimeout(all_menu_timer);

            // 타이머 생성법 setTimeout(할일, 대기시간)
            all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
        });

    });

    // 상세 메뉴 영역을 감싸주는 div
    let all_menu_detail = $('.all-menu-detail');

    // 상세 메뉴 영역 div 에 롤오버를 하면 사라지려는 타이머를 지운다.
    all_menu_detail.mouseenter(function () {
        clearTimeout(all_menu_timer);
    });

    // 상세 메뉴 영역 div 에서 롤 아웃을 하면 조금 기다렸다가 사라지는 타이머 생성
    all_menu_detail.mouseleave(function () {
        clearTimeout(all_menu_timer);
        all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
    });

    // 상세 메뉴 사라지기
    function allMenuHide() {
        clearTimeout(all_menu_timer);
        all_menu.removeClass('all-menu-active');
    }

    // 전체 메뉴 보기 
    let all = $('#all');
    let all_timer;
    let all_timer_delay = 100;

    all.mouseenter(function () {
        clearTimeout(all_timer);
        all_menu.css('visibility', 'visible');
    });
    all.mouseleave(function () {
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });
    all_menu.mouseenter(function () {
        clearTimeout(all_timer);
    });
    all_menu.mouseleave(function () {
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });

    function hideMenu() {
        all_menu.css('visibility', 'hidden');
    }

    // 전체메뉴의 높이는 웹브라우저의 높이를 기준으로 지정
    all_menu.css('height', 'calc(100vh - 200px)');


    // 로그인 펼침 목록 (조합원센터)
    let mymenu_center = $('#mymenu-center');
    let arrow_list_login = $('.arrow-list-login');
    mymenu_center.click(function (event) {
        event.preventDefault();
        arrow_list_login.toggle();
        arrow_list_event.hide();
        arrow_list_more.hide();

        more.html('더보기<i></i>');
    });

    // 참여 펼침 목록
    let arrow = $('#arrow');
    let arrow_list_event = $('.arrow-list-event');
    arrow.click(function (event) {
        event.preventDefault();
        arrow_list_event.toggle();

        more.html('더보기<i></i>');

        arrow.toggleClass('arrow-list-event-active');

        arrow_list_login.hide();
        arrow_list_more.hide();

        more.removeClass('arrow-list-more-active');
        arrow.removeClass('arrow-list-event-active');
    });

    // 더보기 목록
    let more = $('#more');
    let arrow_list_more = $('.arrow-list-more');
    more.click(function (event) {
        event.preventDefault();
        arrow_list_more.toggle();

        // 내용을 변경하기
        let temp = more.hasClass('arrow-list-event-active');
        if (temp != true) {
            more.html('접기<i></i>');
        } else {
            more.html('더보기<i></i>');
        }

        more.toggleClass('arrow-list-more-active');

        arrow_list_event.hide();
        arrow_list_login.hide();

        arrow.removeClass('arrow-list-event-active');
    })

    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function () {
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    let header_main = $('.header-main')
    $(window).scroll(function () {
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if (sc >= 68) {
            header_main.addClass('header-main-active');
            $('.contents').css('padding-top', 63);
        } else {
            header_main.removeClass('header-main-active');
            $('.contents').css('padding-top', 0);
        }
    });

    // 공지사항 탭메뉴
    let notice_btn = $('.notice-menu button');
    let notice_list = $('.notice-list');

    $.each(notice_btn, function (index) {
        $(this).click(function () {
            notice_btn.removeClass('notice-menu-focus');
            notice_list.removeClass('notice-list-focus');

            notice_btn.eq(index).addClass('notice-menu-focus');
            notice_list.eq(index).addClass('notice-list-focus');
        });
    });

    // 비주얼 모달창
    let visual_modal_open = $(".sw-visual-bt");
    let visual_modal_close = $(".visual-modal-close");
    let visual_modal = $(".visual-modal");

    visual_modal_open.click(function () {
        visual_modal.fadeIn();
        $('html').css('overflow', 'hidden');
    });

    visual_modal_close.click(function () {
        visual_modal.fadeOut();
        $('html').css('overflow', 'auto');
    });

    // 사이트맵
    let sitemap_bt = $('.f-site-link span');
    let sitemap = $('.sitemap');
    let sitemap_close = $('.family-close');

    sitemap_bt.click(function(event){
        event.preventDefault();
        sitemap.removeClass('sitemap-active');
        sitemap.addClass('sitemap-active');
    });

    sitemap_close.click(function(event){
        sitemap.removeClass('sitemap-active');
    });
});

window.onload = function () {

    // 메인 슬라이드 영역
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev'
        },
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
        }
    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function () {
        let temp = $(this).hasClass('sw-visual-pause-active');
        if (temp != true) {
            $(this).addClass('sw-visual-pause-active');
            sw_visual.autoplay.stop();
        } else {
            $(this).removeClass('sw-visual-pause-active');
            sw_visual.autoplay.start();
        }
    });

    // 알뜰상품 슬라이드
    new Swiper('.sw-sale', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-sale-next',
            prevEl: '.sw-sale-prev'
        },
        pagination: {
            el: '.sw-sale-pg',
            type: 'fraction',
        }
    });

    // 조합원추천 슬라이드
    new Swiper('.sw-copartner', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-copartner-next',
            prevEl: '.sw-copartner-prev'
        },
        pagination: {
            el: '.sw-copartner-pg',
            type: 'fraction',
        }
    });


    // popular의 출력을 위한 데이터

    // 카테고리별 데이터
    let data_arr = [];
    // 타이틀 데이터 
    let data_title = [];

    // HTTP Request: 서버에 자료를 요청하는 것
    // HTTP Response: 서버에서 응답 오는 것
    fetch('./data.json')
        .then(res => res.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                let data = result[i];
                data_title[i] = data.title;
                data_arr[i] = data.arr;
            }
            // 비동기로 데이터를 가져오기 때문에 정리가 끝나면 목록 출력
            p_change(data_arr[0]);
            $('.popular-top .section-bt').text(`${data_title[0]} 더보기`);
        });

    // Popular 버튼 클릭시 실행
    let p_tab = $('.sw-popular .swiper-slide a');
    // 내용이 나올 장소
    let p_bottom = $('.popular-bottom')

    function p_change(_arr) {
        // 최종 a 태그 html을 저장하는 용도
        let temp = '';
        for (let i = 0; i < _arr.length; i++) {
            // 배열 안에 있는 데이터를 1개씩 꺼내서 참조한다.
            let data = _arr[i];
            temp +=
                `<a href="${data.link}" class="good-link">
                <span class="good-img">
                    <img src="images/${data.img}" alt="제품">
                </span>
                <div class="good-info">`;
            // data에 cate가 있으면 처리하겠다.
            if (data.cate != '') {
                temp +=
                    `<span class="good-cate">
                            <em class="good-cate-txt">${data.cate}</em>
                        </span>`;
            }
            temp +=
                `<span class="good-title">
                        ${data.title}
                    </span>
                    <span class="good-price">
                        <b>${data.price}</b>원
                    </span>
                </div>`

            // data.type에 따라서 모양이 달라져야 한다.
            if (data.type == 0) {

            } else if (data.type == 1) {
                temp += `<span class="good-tag">${data.tag}</span>`
            } else if (data.type == 2) {
                temp += `<span class="good-tag good-tag-red">${data.tag}</span>`
            }
            temp += `<button class="good-cart"></button>
            </a>`;

        }
        p_bottom.html(temp);
        p_bottom.find('a:first-child').css('margin-left', 0);
    };

    $.each(p_tab, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            p_change(data_arr[index]);
            p_tab.removeClass('popular-bt-focus');
            p_tab.eq(index).addClass('popular-bt-focus');

            let temp = data_title[index];
            $('.popular-top .section-bt').text(`${data_title[index]} 더보기`);
        });
    });

    // 제철요리 관련
    let cook_arr = [];
    // cook.json 파일 관련
    let cook_json = 'cook.json';
    // cook 자료를 배치할 html 요소
    let cook_list = $('.cook-list');
    // cook html 텍스트
    let cook_html = '';
    // 체크 버튼 저장
    let cook_bt;
    // 전체 선택 버튼 저장
    let cook_bt_all = $('.cook-total .cook-bt');
    // 전체 선택 개수
    let cook_count = $('#cook-count');

    // 데이터를 불러들여서 파싱(분해)한다.
    fetch(cook_json)
        .then(res => res.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                cook_arr[i] = result[i];
                cook_arr[i].cook_price = parseInt(cook_arr[i].cook_price);
                cook_arr[i].cook_check = 1;
            }
            // 데이터를 화면에 표현한다.
            // cook_html을 만들어낸다.
            for (let i = 0; i < cook_arr.length; i++) {
                let temp = cook_arr[i];
                cook_html += `<li>
                <button class="cook-bt"></button>
                <a href="${temp.cook_link}" class="cook-good clearfix">
                    <img src="images/${temp.cook_pic}" alt="제품">
                    <p class="cook-good-info">
                        <span class="cook-good-title">
                            ${temp.cook_name}${temp.cook_info}
                        </span>
                        <span class="cook-good-price">
                            <b>${temp.cook_price.toLocaleString()}</b>원
                        </span>
                    </p>
                </a>
            </li>`
            }
            // html로 삽입해준다.
            cook_list.html(cook_html);
            // html이 존재하므로 아래 변수 세팅됨
            cook_bt = cook_list.find('.cook-bt');
            makeCookBt();
            // 전체 가격을 입력해준다.
            cookCalc();
        })
        .catch();

    // 총 계산 값 입력하기
    // 총 값이 나오는 자리 html 요소
    let cook_price_total = $('#cook-price-total');
    // 장바구니 카운팅
    let bucket_em = $('.bucket em');
    // 장바구니 담기 버튼
    let cook_link = $('.cook-link');
    let count = 0;
    // 총 선택된 값을 계산하는 함수 생성
    function cookCalc() {
        let total = 0;
        count = 0;
        for (let i = 0; i < cook_arr.length; i++) {
            if (cook_arr[i].cook_check == 1) {
                total += cook_arr[i].cook_price;
                count++;
            }
        }
        cook_price_total.html(total.toLocaleString());
        cookAllBt();
        cook_count.text(count);
    }

    cook_link.click(function (event) {
        event.preventDefault();
        bucket_em.text(count);
        bucket_em.removeClass('updown-ani');
        setTimeout(function () {
            bucket_em.addClass('updown-ani');
        }, 500);
        // bucket_em.addClass('updown-ani');
    });

    // 체크 기능 만들기
    function makeCookBt() {
        $.each(cook_bt, function (index, item) {
            $(this).click(function (event) {
                event.stopPropagation();
                event.preventDefault();
                cook_arr[index].cook_check *= -1;
                // 체크버튼 모양 변경
                $(this).toggleClass('cook-bt-false');
                // 전체 가격 새로 계산
                cookCalc();
                // 전체 선택 버튼 기능
                cookAllBt();
            })
        });
    }

    // 전체 선택 버튼 기능
    // 전체 선택 여부
    let cook_all_check = 1;

    cook_bt_all.click(function (event) {
        event.stopPropagation();
        if (cook_all_check == 1) {
            cook_all_check = 0;
        } else {
            cook_all_check = 1;
        }

        if (cook_all_check == 1) {
            for (let i = 0; i < cook_arr.length; i++) {
                cook_arr[i].cook_check = 1;
            }
        } else {
            for (let i = 0; i < cook_arr.length; i++) {
                cook_arr[i].cook_check = -1;
            }
        }

        $.each(cook_bt, function (index, item) {
            if (cook_all_check == 1) {
                $(this).removeClass('cook-bt-false');
            } else {
                $(this).addClass('cook-bt-false');
            }
        });

        if (cook_all_check == 1) {
            cook_bt_all.removeClass('cook-bt-false');
        } else {
            cook_bt_all.addClass('cook-bt-false');
        }

        cookCalc();
    });


    function cookAllBt() {
        for (let i = 0; i < cook_arr.length; i++) {
            if (cook_arr[i].cook_check != 1) {
                // 체크가 해제되었다.
                cook_all_check = 0;
                break;
            } else {
                cook_all_check = 1;
            }
        }

        if (cook_all_check == 1) {
            cook_bt_all.removeClass('cook-bt-false');
        } else {
            cook_bt_all.addClass('cook-bt-false');
        }
    }

    let cook_wrap = $('.cook-wrap');
    cook_wrap.niceScroll({
        cursoropacitymax: 0.3,
        cursorwidth: "7px",
        cursorborderradius: "10px",
    });


    // 인기상품 슬라이드
    new Swiper('.sw-popular', {
        slidesPerView: 7,
        spaceBetween: 10,
        slidesPerGroup: 7,
        navigation: {
            nextEl: '.popular-slide-next',
            prevEl: '.popular-slide-prev'
        }
    });

    // 브랜드관 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.sw-brand-next',
            prevEl: '.sw-brand-prev'
        },
        pagination: {
            el: '.sw-brand-pg',
            type: 'fraction',
        }
    });

    // 띠배너 슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev'
        },
        autoplay: {
            delay: 2000,
        }
    });

    // 이용후기 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-review-next',
            prevEl: '.sw-review-prev'
        },
        pagination: {
            el: '.sw-review-pg',
            type: 'fraction',
        }
    });
};