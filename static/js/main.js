$('.slick-img').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
});
$('.respon_story').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slick').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// var $rangeKalkul = $("#rangeKalkul");

// $rangeKalkul.ionRangeSlider({
//     hide_min_max:true,
//     hide_from:true,
//     skin:"flat"
//     type: "double",
//     min: 350,
//     max: 5000,
//     from: 500,
//     step: 100,

// });
const body = document.getElementsByTagName('body')[0]
const menu = document.querySelector('.menu_toggle')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

menu.addEventListener('click', function () {
    if (body.classList == 'open_menu') {
        body.classList.remove('open_menu')
        main.style.display = 'block'
        footer.style.display = 'block'
    } else {
        body.classList.add('open_menu')
        main.style.display = 'none'
        footer.style.display = 'none'
    }

})


var header = document.querySelector('.header_top')
const headerBottom = document.querySelector('.header_bottom')
const bank = document.querySelector('.o_banking')

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.display = 'none';
        headerBottom.style.background = "white"
        bank.classList.add("button")
    } else {
        header.style.display = 'block'
        headerBottom.style.background = "transparent"
        bank.classList.remove("button")


    }
})

let langSelect = document.querySelector('.active_lang')
let selectBox = document.querySelector('.select_box')

langSelect.addEventListener('click', function () {
    selectBox.classList.add('open_select')
})

document.getElementById("azn").style.display = "none"

function currencyVal() {
    var inputValue = document.getElementById('writeInput').value
    var selectCurrency = document.getElementById('selectCurrency').value
    var totalvalue = document.getElementById('totalValue')
    var selectCurrency2 = document.getElementById("selectTag")
    var usdV = document.getElementById('usdV').innerText
    var eurV = document.getElementById('eurV').innerText
    if (selectCurrency == "AZN" && selectCurrency2.value == "USD") {
        cvb = inputValue / parseFloat(usdV)
        totalvalue.innerText = cvb.toFixed(2)
    }
    else if (selectCurrency == "AZN" && selectCurrency2.value == "EUR") {
        cvb = inputValue / parseFloat(eurV)
        totalvalue.innerText = cvb.toFixed(2)
    } else if (selectCurrency == "USD") {
        cvb2 = inputValue * parseFloat(usdV)
        totalvalue.innerText = cvb2.toFixed(2)
        document.getElementById("usd").innerText = "AZN"
        document.getElementById("eur").style.display = "none"

    } else if (selectCurrency == "EUR") {
        cvb3 = inputValue * parseFloat(eurV)
        totalvalue.innerText = cvb3.toFixed(2)
        document.getElementById("usd").innerText = "AZN"
        document.getElementById("eur").style.display = "none"
    } else if (selectCurrency == "AZN") {
        document.getElementById("usd").innerText = "USD"
        document.getElementById("eur").innerText = "EUR"
        document.getElementById("usd").style.display = "block"
        document.getElementById("eur").style.display = "block"
    }
}
document.getElementById('writeInput').addEventListener('keyup', currencyVal)
document.getElementById('selectCurrency').addEventListener('change', currencyVal)
document.getElementById('selectTag').addEventListener('change', currencyVal)


var range = document.querySelector("#rangeKalkul")
var salary = document.querySelector("#salary")
range.addEventListener("input", function () {
    salary.innerText = range.value
})

var range2 = document.querySelector("#rangeKalkul2")
var count = document.querySelector("#count")
range2.addEventListener("input", function () {
    count.innerText = range2.value
    var cavab = count.innerText / periodt.innerText
    var total = document.querySelector("#total")
    total.innerText = cavab.toFixed(2) + ' AZN'
})

var range3 = document.querySelector("#rangeKalkul3")
var periodt = document.querySelector("#periodt")
range3.addEventListener("input", function () {
    periodt.innerText = range3.value
    var cavab = count.innerText / periodt.innerText
    var total = document.querySelector("#total")
    total.innerText = cavab.toFixed(2) + ' AZN'
})

var parcent = document.querySelector("#percent")
range3.addEventListener("input", function () {
    if (periodt.innerText > 6) {
        parcent.innerText = parseInt(parcent.innerText) + 5 + "%"
    } if (periodt.innerText < 36) {
        parcent.innerText = parseInt(parcent.innerText) - 5 + "%"
    }
})

var active = document.querySelector(".active_lang")
var s = document.querySelector('.select_box')

active.addEventListener("focus", function () {
    s.classList.add('open_select')
    header.classList.add('lang')
})

active.addEventListener("blur", function () {
    s.classList.remove('open_select')
    header.classList.remove('lang')
})


var searchOpen = document.getElementById('searchIcon')
searchOpen.addEventListener('click', function () {
    var searchInterface = document.querySelector('.search_wrap')
    searchInterface.style.display = 'block'
})
var searchClose = document.querySelector('.close_search')
searchClose.addEventListener('click', function () {
    var searchInterface = document.querySelector('.search_wrap')
    searchInterface.style.display = 'none'
})

var msgBtn = document.querySelector('.message_trigger');
var msgInner = document.querySelector('.message_inner');
var msgItem = document.querySelector('.message_item');
msgBtn.addEventListener('click', function () {
    msgInner.classList.add('active');
    msgInner.style.display = 'block';
    msgItem.classList.add('active', 'show');
})

var msgBtnMobile = document.querySelector('.for_mobile')

msgBtnMobile.addEventListener('click', function(){
  msgInner.classList.add('active');
  msgInner.style.display = 'block';

  msgItem.classList.add('active','show');
})

var closeMsg = document.querySelector('.close_msg')
closeMsg.addEventListener('click', function () {
    msgInner.classList.remove('active');
    msgInner.style.display = 'none';
    msgItem.classList.remove('active', 'show');
})



