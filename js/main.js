
;(function() {
    function getContentCominSlider() {
        let comingName = $('.coming_soon__name');
        let comingYear = $('.coming_soon__year');
        let actionComment = $('.action__comments');
        let actionRank = $('.action__rank');
        let actionLikes = $('.action__likes');
        let comingImg = $('.coming_soon__img');

        $.ajax('./json/data.json').done(function(tasks) {
            for(let i = 0; i < tasks.length; i++) {
                addContentToComing( 
                    tasks[i].id - 1, tasks[i].title,
                    tasks[i].year, tasks[i].comments_count,
                    tasks[i].rank, tasks[i].likes_count,
                    tasks[i].poster, tasks[i].expectations_count);

            }  
        });

        function addContentToComing(id, name, year, comments, rank, likes, img, count) {
            if(rank === undefined) {
                rank = count;
            }
            comingImg[id].src = img;
            comingImg[id].alt = name;
            comingName[id].append(name);
            comingYear[id].append(year);
            actionComment[id].append(comments);
            actionRank[id].append(rank);
            actionLikes[id].append(likes);
        }
    }

    function fetContentMostSLider () {
        $.ajax('./json/data.json').done(function(tasks) {
            for(let i = 0; i < tasks.length; i++) {
                addContentToMost( 
                    tasks[i].id - 1, tasks[i].title,
                    tasks[i].year, tasks[i].comments_count,
                    tasks[i].rank, tasks[i].likes_count,
                    tasks[i].poster, tasks[i].expectations_count,
                    tasks[i].director, tasks[i].writer, tasks[i].content);

            }  
        });

        let mostImg = $('.most_popular__img');
        let mostName = $('.most_popular__name');
        let mostYear = $('.most_popular__year');
        let mostDirector = $('.most_popular__director');
        let mostWriten = $('.most_popular__writen');
        let mostContent = $('.most_popular__content');
        let mostComments = $('.most_action__comments');
        let mostRank = $('.most_action__rank');
        let mostLikes = $('.most_action__likes');
        let mostMainRank = $('.most_popular_rank');

        function addContentToMost(
            id, name, year, comments, 
            rank, likes, img, count, 
            director, writen, content) {

            if(rank === undefined) {
                rank = count;
            }
        
            mostImg[id].src = img;
            mostImg[id].alt = name;
            mostName[id].append(name);
            mostYear[id].append(year);
            mostComments[id].append(comments);
            mostRank[id].append(rank);
            mostLikes[id].append(likes);
            mostDirector[id].append(director);
            mostWriten[id].append(writen);
            mostContent[id].append(content);
            mostMainRank[id].append(rank);
        }
    }

    getContentCominSlider();
    fetContentMostSLider();

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
    })
})();