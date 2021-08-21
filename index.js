function addcol(){
    
    for(let i=255;i>0;i-=20){
        for(let j=255;j>0;j-=20){
            for(let k=255;k>0;k-=20){
                rgbTOhex(i,j,k)
            }        
        }
    }
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbTOhex(r, g, b) {
    hex_color = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    col_box(hex_color)
}

function col_box(color){
    let $elem = $('<p></p>')
    $('.row').append($elem)
    $elem.text(color)
    $elem.addClass('col-lg-2 lazy col-md-3 col-sm-6 col-xs-12 pt-4 m-3 text-center')
    $elem.css("background-color",color)
    $elem.attr({
        'tabindex':0,
        'data-toggle':"popover",
        'data-placement':'top',
        'data-trigger':"focus",
        'data-content':'Hex color code has been copied...'+ $elem.css('background-color'),
        'id':'add'
    })
    // $elem.attr('data-aos','fade-up')
}
$(document).ready(function(){
    addcol();
    $('p').mousedown(function(){
        let this_col = $(this).text()
        let $temp = $('<input>')
        $('body').append($temp)
        $temp.val(this_col).select()
        document.execCommand('copy')
        $temp.remove()
    });
});
