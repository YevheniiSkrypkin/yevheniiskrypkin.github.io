$(document).ready(function(){
    $('.team-image').slick({
        dots: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,                
        responsive: [
            {
            breakpoint: 769,
            settings: 'unslick'
            }
        ]
    })
})
window.addEventListener('resize', function(){
    $('.team-image').slick({
        dots: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,                
        responsive: [
            {
            breakpoint: 769,
            settings: 'unslick'
            }
        ]
    })
} )
let year = new Date().getFullYear()
document.querySelector('#year').innerHTML = year
