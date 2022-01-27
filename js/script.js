if(window.matchMedia('(min-width: 769px)').matches){
    $(document).ready(function(){       
        $('.team-image').slick({
            dots: true,
            // infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
            
        })})}

let year = new Date().getFullYear()
document.querySelector('#year').innerHTML = year
