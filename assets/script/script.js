var cont2 = document.querySelector(".js-cont2");
var cont3 = document.querySelector(".js-cont3");
var cont4 = document.querySelector(".js-cont4");

window.onscroll = function(){
    var opacity_c2 = resetopacity(getPercentageVisible(cont2) / 100);
    var opacity_c3 = resetopacity(getPercentageVisible(cont3) / 100);
    var opacity_c4 = resetopacity(getPercentageVisible(cont4) / 100);

    var xmove_c2 = resetmove(getPercentageVisible(cont2), "right");
    var xmove_c3 = resetmove(getPercentageVisible(cont3)*-1, "left");
    var xmove_c4 = resetmove(getPercentageVisible(cont4), "right");

    cont2.style.opacity = `${opacity_c2}`;
    cont3.style.opacity = `${opacity_c3}`;
    cont4.style.opacity = `${opacity_c4}`;

    trigger_move(cont2, xmove_c2, "left");
    trigger_move(cont3, xmove_c3, "right");
    trigger_move(cont4, xmove_c4, "left");
}


function getPercentageVisible(el) {
    const rect = el.getBoundingClientRect();
    const elementTop = rect.top;
    const elementHeight = rect.height;
    const visibleHeight = Math.min(elementHeight, window.innerHeight - elementTop);
    return (visibleHeight / elementHeight) * 100;
}
function resetmove($value, $direction){
    if ($direction == "right"){
        if ($value < -100){
            $value = -100;
        }
        if ($value > 0){
            $value = 0;
        }
    }
    else {
        if ($value < 0){
            $value = 0;
        }
        if ($value > 100){
            $value = 100;
        }
    }
    return $value;
}
function resetopacity($value){
    if ($value < 0){
        $value = 0;
    }
    if ($value > 1){
        $value = 1;
    }
    return $value;
}
function trigger_move($el, $xmove, $from){
    if ($from == "left"){
        if (getPercentageVisible($el) <= 50){
            $el.style.transform = `translateX(-100%)`;
        } else {
            $el.style.transform = `translateX(${$xmove}%)`;
        }
    } else {
        if (getPercentageVisible($el) <= 50){
            $el.style.transform = `translateX(100%)`;
        } else {
            $el.style.transform = `translateX(${$xmove}%)`;
        }
    }
}