window.onload = function onLoad() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#161d1f',             //cor do circulo
        strokeWidth: 8,              //largura do circulo
        duration: 1400,             //duração da animação
        from: { color: '#AAA' },   // cor de início da transição
        to: { color: '#161d1f' }, //cor do final da transição

        step: function (state, circle) {   //passos da animação

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 3400);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#161d1f',             //cor do circulo
        strokeWidth: 8,              //largura do circulo
        duration: 1600,             //duração da animação
        from: { color: '#AAA' },   // cor de início da transição
        to: { color: '#161d1f' }, //cor do final da transição

        step: function (state, circle) {   //passos da animação

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5580);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#161d1f',             //cor do circulo
        strokeWidth: 8,              //largura do circulo
        duration: 2000,             //duração da animação
        from: { color: '#AAA' },   // cor de início da transição
        to: { color: '#161d1f' }, //cor do final da transição

        step: function (state, circle) {   //passos da animação

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 650);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#161d1f',             //cor do circulo
        strokeWidth: 8,              //largura do circulo
        duration: 2200,             //duração da animação
        from: { color: '#AAA' },   // cor de início da transição
        to: { color: '#161d1f' }, //cor do final da transição

        step: function (state, circle) {   //passos da animação

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 39);

            circle.setText(value);
        }
    });

    //iniciando o quando o usuário chegar no elemento
    let dataAreaOffset = document.getElementById("data-area").getBoundingClientRect();
    let stop = 0;

    window.onscroll = function onScroll() {
        let scroll = window.scrollY;

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    }
    // Parallax (DESATIVADO, O SITE FICA MAIS RÁPIDO)
    // setTimeout(function () {

    //     $('#data-area').parallax({ imageSrc: 'img/wall.jpg' });
    //     $('#apply-area').parallax({ imageSrc: 'img/folhas.jpg' });

    // }, 250);

    // Filtro do portfólio

    $('.filter-btn').on('click', function () {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if (type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

}
