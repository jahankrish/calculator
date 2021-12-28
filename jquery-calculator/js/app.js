$(document).ready(function(){

    var thisValue = 0;
    var valueOne  = 0;
    var valueTwo  = 0;

    $(".first").click(function(event){

        $(".symbol").css({"pointer-event":"active"});
        if($(".first").hasClass('first-active')){
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
        }else if($('.first').hasClass('second-active')){
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueTwo = $('.valueTwo').text();
        }
    });

    $('.symbol').click(function(){
    
        symbol = $(this).html();
        $('.valueSymbol').text(symbol);
        symbol = $('.valueSymbol').text();
        $('.first').removeClass('first-active').addClass('second-active');
    });

    $('#equal').click(function(){

        valueOne = parseFloat(valueOne);
        valueTwo = parseFloat(valueTwo);
        if(symbol == "+"){
            valueOne += valueTwo
        }else if(symbol == "-"){
            valueOne -= valueTwo
        }else if(symbol == "*"){
            valueOne = valueOne * valueTwo
        }else if(symbol == "/"){
            valueOne = valueOne / valueTwo
        }
        $('.valueOne').text(valueOne);
        $('.valueSymbol').text('');
        $('.valueTwo').text('');
    });

    $('#cancel').click(function(){

        $('.first').addClass('first-active');
        $('.symbol').css({"pointer-events":"none"})
        $('.valueOne').text('');
        $('.valueSymbol').text('');
        $('.valueTwo').text('');
    });
});