import $ from "jquery";
$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    appendArrows: $('.slider-arrows'),
    swipeToSlide: true,
    nextArrow: '<button class="button" id="next" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 24C20.4183 24 24 20.4183 24 16L24 8C24 3.58172 20.4183 -3.13124e-07 16 -6.99382e-07L8 -1.39876e-06C3.58172 -1.78502e-06 1.78502e-06 3.58172 1.39876e-06 8L6.99382e-07 16C3.13124e-07 20.4183 3.58172 24 8 24L16 24ZM8.75061 14.4383C7.88809 15.1283 7.74824 16.3869 8.43826 17.2494C9.12828 18.1119 10.3869 18.2518 11.2494 17.5617L18.2016 12L11.2494 6.43826C10.3869 5.74824 9.12828 5.88809 8.43826 6.75061C7.74824 7.61313 7.88809 8.87172 8.75061 9.56174L11.7984 12L8.75061 14.4383Z" fill="#CDCDCD"></path></svg></button>',
    prevArrow: '<button class="button" id="prev" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8ZM15.2494 9.56174C16.1119 8.87172 16.2518 7.61313 15.5617 6.75061C14.8717 5.88809 13.6131 5.74824 12.7506 6.43826L5.79844 12L12.7506 17.5617C13.6131 18.2518 14.8717 18.1119 15.5617 17.2494C16.2518 16.3869 16.1119 15.1283 15.2494 14.4383L12.2016 12L15.2494 9.56174Z" fill="#CDCDCD"></path></svg></button>',
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            centerMode: false,
            variableWidth: false,
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 768,
            settings: {
              centerMode: false,
              variableWidth: false,
              slidesToShow: 1,
              appendArrows: $('.slider-arrows-mobile')
            }
          },
    ]
});