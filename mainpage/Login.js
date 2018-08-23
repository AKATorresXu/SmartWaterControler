/**
 * Created by lenovo on 2017/3/28.
 */
$(document).ready(function () {
    var orderNum = "序列号";
    var Ore = "手机号";
    $('input#orderNum').bind('focus', function () {
        if (orderNum == $(this).val()) {
            $(this).val('');
        }

        $(this).addClass('active');
    });
    $('input#orderNum').bind('blur', function () {
        if ($(this).val() == '') {
            $(this).val(orderNum);
        }
        $(this).removeClass('active');
    });
    $('input#Phonenumber').bind('focus', function () {
        if (Ore == $(this).val()) {
            $(this).val('');
        }
        $(this).addClass('active');
    });
    $('input#Phonenumber').bind('blur', function () {
        if ($(this).val() == '') {
            $(this).val(Ore);
        }
        $(this).removeClass('active');
    });
    $('#but').click(function () {
           window.location.href = "Data.html";
                return false;
    })

});
