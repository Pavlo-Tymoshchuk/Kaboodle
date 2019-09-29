;(function() {
    function moveComingSlider() {
        let slider = document.querySelector('.coming_soon__list');
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', function(event){
            isDown = true;
            startX = event.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', function() {
            isDown = false;
        });
        
        slider.addEventListener('mouseup', function() {
            isDown = false;
        });
        
        slider.addEventListener('mousemove', function (event) {
            if(!isDown) return;
            event.preventDefault();
            let x = event.pageX - slider.offsetLeft;
            let walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
            console.log(scrollLeft - walk);
        });
    }
    moveComingSlider();

    function moveMostSlider() {
        let slider = document.querySelector('.most_popular__slider_list');
        let isDown = false;
        let startY;
        let scroll;
        
        slider.addEventListener('mousedown', function(event){
            isDown = true;
            startY = event.pageY - slider.offsetTop;
            scroll = slider.scrollTop;
        });
        
        slider.addEventListener('mouseleave', function() {
            isDown = false;
        });
        
        slider.addEventListener('mouseup', function() {
            isDown = false;
        });
        
        // I have a problem with this slider i not understand why he dont  working normal
        
        slider.addEventListener('mousemove', function (event) {
            if(!isDown) return;
            event.preventDefault();
            let y = event.pageY - slider.scrollTop;
            let walk = (y - startY);
            slider.scrollTop = Math.floor(scroll - walk);
        });

        let runTop = $('.most_popular__arrow_top');
        let runBottom = $('.most_popular__arrow_bottom');

        runTop.click(function(event) {
            event.preventDefault();
            slider.scrollTop = slider.scrollTop -100;
        })

        runBottom.click(function(event) {
            event.preventDefault();
            slider.scrollTop += 100;
        })
    }
    moveMostSlider();
})();


