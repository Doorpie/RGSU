
// События открытия бургер-меню
$(document).ready(function(){
    $('.header__burger-icon').click(function(event){
        $('.header__burger-icon,.header__burger-menu').toggleClass('_active');
        $('.page__sidebar').toggleClass('active-sidebar');
    })

//События открытия/закрытия аккордион
   $('.accordion__title').click(function(event){
      $(this).next().slideToggle(300);
   })


   $('.detailing__title').click(function(){
      $('.detailing__content').slideToggle(300);
   });

   $('.composition__title').click(function(){
      $('.composition__content').slideToggle(300);
   });

   $('.slider').slick({
      arrows: false,
      dots: true
   });
});

