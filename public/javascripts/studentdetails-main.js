$(document).on("click",'#fullname-btn',function(){
    $('#fullname').removeAttr("disabled");
    $(this).html("Disable for Student");
    $(this).attr('id','fullname-btn-disable')
    $(this).attr('class','btn btn-success');
});

$(document).on("click",'#fullname-btn-disable',function(){
    $('#fullname').attr("disabled" , "disabled");
    $(this).attr('id','fullname-btn');
    $(this).html("Enable for Student");
    $(this).attr('class','btn btn-danger');
});

