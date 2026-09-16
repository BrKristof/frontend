function $(id){
    return document.getElementById(id)
}

function rangeRGB(){


    const red = $('red-range').value
    const green = $('green-range').value
    const blue = $('blue-range').value
    const alpha = $('alpha-range').value




    $('red-value').value = red
    $('green-value').value = green
    $('blue-value').value = blue
    $('alpha-value').value = alpha


    document.getElementById('rgb-box').style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
}


function match(){

    const red = $('red-value').value
    const green = $('green-value').value
    const blue = $('blue-value').value
    const alpha = $('alpha-value').value

    $('red-range').value = red
    $('green-range').value = green
    $('blue-range').value = blue
    $('alpha-range').value = alpha



     document.getElementById('rgb-box').style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
}


$('red-range').addEventListener('input', rangeRGB)
$('green-range').addEventListener('input', rangeRGB)
$('blue-range').addEventListener('input', rangeRGB)
$('alpha-range').addEventListener('input',rangeRGB)


$('red-value').addEventListener('input', match)
$('green-value').addEventListener('input', match)
$('blue-value').addEventListener('input', match)
$('alpha-value').addEventListener('input',match)

//függvenyhivas example()
//függvenyreferencia example

function width(){
    const w = $('box-width').value
    $('width-num').value = w
    
    $("rgb-box").style.width = `${w}px`
}

function height(){
    const h = $('box-height').value
    $('height-num').value = h

    $("rgb-box").style.height = `${h}px`
}

function radius(){
    const r = $('box-border-radius').value
    $('radius-num').value = r

    $("rgb-box").style.borderRadius = `${r}px`
}

function margin(){
    const mT = $('box-margin-top').value
    const mL = $('box-margin-left').value
    $('marginT-num').value = mT
    $('marginL-num').value = mL

    $("rgb-box").style.margin = `${mT}px auto auto ${mL}px`
}


$('box-width').addEventListener('input',width)
$('box-height').addEventListener('input',height)
$('box-border-radius').addEventListener('input',radius)
$('box-margin-top').addEventListener('input',margin)
$('box-margin-left').addEventListener('input',margin)

