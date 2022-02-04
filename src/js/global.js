//show-text-reviews
$('.reviews__btn-show').on('click', function(){
    $(this).toggleClass('active')  
    $($(this).data('target')).slideToggle()
});