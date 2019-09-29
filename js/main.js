
;(function() {
    let comingName = $('.coming_soon__name');
    let comingYear = $('.coming_soon__year');
    let actionComment = $('.action__comments');
    let actionRank = $('.action__rank');
    let actionLikes = $('.action__likes');
    let comingImg = $('.coming_soon__img');

    let id = [];
    let title = [];
    let year = [];
    let director = [];
    let writer = [];
    let poster = [];
    let type = [];
    let rank = [];
    let likes_count = [];
    let comments_count = [];
    let content = [];

    $.ajax('./json/data.json').done(function(tasks) {
        for(var i = 0; i < tasks.length; i++) {
            id.push(tasks[i].id - 1);
            title.push(tasks[i].title);
            year.push(tasks[i].year);
            director.push(tasks[i].director);
            writer.push(tasks[i].writer);
            poster.push(tasks[i].poster);
            type.push(tasks[i].type);

            if(tasks[i].rank === undefined) {
                rank.push(tasks[i].expectations_count);
            }else {
                rank.push(tasks[i].rank);
            }

            type.push(tasks[i].type);
            likes_count.push(tasks[i].likes_count);
            comments_count.push(tasks[i].comments_count);
            content.push(tasks[i].content);
            
            if(tasks[i].type === "TV-Show") {
                typeTV.push(tasks[i].id - 1);
            }
            if(tasks[i].type === "Movie") {
                typeMovie.push(tasks[i].id - 1);
            }
        }  
    });

    function addContentToComing() {
        
        for(let i = 0; id.length > i; i++) {
            comingImg[i].src = poster[i];
            comingImg[i].alt = title[i];
            comingName[i].innerHTML = title[i];
            comingYear[i].innerHTML = year[i];
            actionComment[i].innerHTML = comments_count[i];
            actionRank[i].innerHTML = rank[i];
            actionLikes[i].innerHTML = likes_count[i];
        }
    }
    setTimeout(addContentToComing, 80);
    

    let mostImg = $('.most_popular__img');
    let mostName = $('.most_popular__name');
    let mostYear = $('.most_popular__year');
    let mostDirector = $('.most_popular__director');
    let mostWriter = $('.most_popular__writen');
    let mostContent = $('.most_popular__content');
    let mostComments = $('.most_action__comments');
    let mostRank = $('.most_action__rank');
    let mostLikes = $('.most_action__likes');
    let mostMainRank = $('.most_popular_rank');

    function addContentToMost() {
        for(let i = 0; id.length > i; i++){
            mostImg[i].src = poster[i];
            mostImg[i].alt = title[i];
            mostName[i].innerHTML = title[i];
            mostYear[i].innerHTML = year[i];
            mostComments[i].innerHTML = comments_count[i];
            mostRank[i].innerHTML = rank[i];
            mostLikes[i].innerHTML = likes_count[i];
            mostDirector[i].innerHTML = director[i];
            mostWriter[i].innerHTML = writer[i];
            mostContent[i].innerHTML = content[i];
            mostMainRank[i].innerHTML = rank[i];
        }
    }
    setTimeout(addContentToMost, 80);

    let viewBadge = $('#view_badge');
    let viewList = $('#view_list');

    function changeSate (first, second) {
        first.addClass('change_format__active');
        second.removeClass('change_format__active');
    }

    $('#view_badge').click(function(e) {
        e.preventDefault();
        $('.coming_soon__list').removeClass('change_format_view');
        changeSate(viewBadge, viewList)
        $(".coming_soon__item:nth-child(3n)").removeClass('clear_margin');
    });

    $('#view_list').click(function(e) {
        e.preventDefault();
        changeSate(viewList, viewBadge)
        $('.coming_soon__list').addClass('change_format_view');
        $(".coming_soon__item:nth-child(3n)").addClass('clear_margin');
    });

    let typeTV = [];
    let typeMovie = [];
    let comingItems = $('.coming_soon__item');
    let comingAll = $('#coming-all');
    let comingMovies = $('#coming-movies');
    let comingTv = $('#coming-tv');
    let mostItems = $('.most_popular__slider_item');
    let mostAll = $('#most-all');
    let mostMovies = $('#most-movies');
    let mostTv = $('#most-tv');


    function changeSelect(all, movies, tv, items, display) {
        all.click(function(event){
            event.preventDefault();
            movies.removeClass('select_active');
            tv.removeClass('select_active');
            $(this).addClass('select_active');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = display;
            }
        });

        movies.click(function(event) {
            event.preventDefault();
            all.removeClass('select_active');
            tv.removeClass('select_active');
            $(this).addClass('select_active');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = display;
            }
            for (let i = 0; i < typeTV.length; i++) {
                items[typeTV[i]].style.display = "none";
            }
        });

        tv.click(function(event) {
            event.preventDefault();
            all.removeClass('select_active');
            movies.removeClass('select_active');
            $(this).addClass('select_active');
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = display;
            }
            for (let i = 0; i < typeMovie.length; i++) {
                items[typeMovie[i]].style.display = "none";
            }
        });
    }

    changeSelect(comingAll, comingMovies, comingTv, comingItems, "block");
    changeSelect(mostAll, mostMovies, mostTv, mostItems, "flex");
})();