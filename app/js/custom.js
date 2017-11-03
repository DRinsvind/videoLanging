
$().ready(function() {

    var init = {
        click:function(){
            $('#hamburger').click(function(){
                $(this).toggleClass('open');
                $('#headmenu').toggleClass('open');
            });
            $('.input-default').focusout(function(){

                if($(this).val()!=''){
                    $(this).addClass('input-default_not_empty')
                }else{
                    $(this).removeClass('input-default_not_empty')
                }
            })
        }
    }
    init.click();
});
