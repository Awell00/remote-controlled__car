const details__image = document.getElementById("details__image")
const details__title = document.getElementById("details__title")
const image__select__left = document.getElementById("image__select--left")
const image__select__right = document.getElementById("image__select--right")
const card__review__text = document.getElementById("card__review-text")

const card__review__image = document.getElementById("card__review-image")
const card__review__name = document.getElementById("card__review-username--name")
const card__review__subtitle = document.getElementById("card__review-username--subtitle")

const card__review__heart = document.getElementById("card__review-heart")




details__title.addEventListener("mouseover", function() {
    document.getElementById("details__image").style.animation = "bounce2 2s ease infinite";
    
} )

let timer1;
let timer2;

details__title.addEventListener("mouseout", function() {
    
    setTimeout(function() {
        document.getElementById("details__image").style.animation = false;
      }, 500);
} )

let i = 1;

function image__left() {

    if (i > 0) {
        i = i - 1
        image__select__left.style.setProperty("animation", "shake1 4s ease infinite", "important")
        loadNames(i);
    } else {
        image__select__left.style.setProperty("animation", "hithere 1.3s ease infinite", "important")
    }

    timer1 = window.setTimeout(
        () => {
            image__select__left.style.animation = false;
            
        }, 1330);
}

image__select__left.onclick = () => {
    timer2 = image__select__right.style.animation = false;
    clearTimeout(timer1)
    image__left()
}

function image__right() {
    
    if (i < 2) {
        i = i + 1
        image__select__right.style.setProperty("animation", "shake2 4s ease infinite", "important")
        loadNames(i);
    } else {
        image__select__right.style.setProperty("animation", "hithere 1.3s ease infinite", "important")
    }

    timer2 = window.setTimeout(
        () => {
            image__select__right.style.animation = false;
            
        }, 1330);
    
}

image__select__right.onclick = () => {
    timer1 = image__select__left.style.animation = false;
    clearTimeout(timer2)
    image__right()
    
}

let n = 1;

card__review__heart.onclick = () => {
    
    if (n === 1) {
        n = 2
        card__review__heart.src = "./image/Heart.svg"
    } else if (n === 2) {
        card__review__heart.src = "./image/Heart2.svg"
        n = 1
    }
    heart()
    
}


function heart() {

    document.getElementById("card__review-heart").style.animation = "pulse .3s infinite ease-in-out alternate";

    timer2 = window.setTimeout(
        () => {
            document.getElementById("card__review-heart").style.animation = false
      
            
        }, 800);
    
}




async function loadNames(i) {
    const response = await fetch('./info.json');
    const names = await response.json();

    const elem = $("#card__review-text");
    const elem1 = $("#card__review-image")
    const elem2 = $("#card__review-username--name")
    const elem3 = $('#card__review-username--subtitle')
    const elem4 = $("#card__review-heart")

    function change() {
        elem.fadeOut(function(){
            card__review__text.innerText = names.members[i].review
            elem.fadeIn();
        });
       
        elem1.fadeOut(function(){
            card__review__image.src = names.members[i].profil
            elem1.fadeIn();
        });

        elem2.fadeOut(function(){
            card__review__name.innerText = names.members[i].name
            elem2.fadeIn();
        });

        elem3.fadeOut(function(){
            card__review__subtitle.innerText = names.members[i].profession
            elem3.fadeIn();
        });

        elem4.fadeOut(function(){
            card__review__heart.src = names.members[i].like
            elem4.fadeIn();
        });
    }
    change();
}
  


  

  