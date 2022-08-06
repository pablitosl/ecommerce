$(document).ready(function(){

    $('.btnFilter').click(function(){
        var product = $(this).attr('category');

        $('.item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.item').hide();
        } setTimeout(hideProduct,400);
        
        function showProduct(){
            $('.item[category="'+product+'"]').show();
            $('.item[category="'+product+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
        
        
    });

    $('.btnFilter[category="all"]').click(function(){
        function showAll(){
            $('.item').show();
            $('.item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
        
    });
});