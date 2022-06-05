const details__image = document.getElementById("details__image")
const details__title = document.getElementById("details__title")

const image__select__left = document.getElementById("image__select--left")
const image__select__right = document.getElementById("image__select--right")

const card__review__text = document.getElementById("card__review-text")
const card__review__image = document.getElementById("card__review-image")
const card__review__name = document.getElementById("card__review-username--name")
const card__review__subtitle = document.getElementById("card__review-username--subtitle")
const card__review__heart = document.getElementById("card__review-heart")

// Arrow Animation of "Full Details"
details__title.addEventListener("mouseover", function() {
    details__image.style.animation = "bounce2 2s ease infinite" 
} )

details__title.addEventListener("mouseout", function() {
    setTimeout(function() {
        details__image.style.animation = false
      }, 500)
} )


let i = 1

let timer__left, timer__right

// Left Arrow Animation to Select a Comment
function image__left() {
    if (i > 0) {
        i = i - 1
        image__select__left.style.setProperty("animation", "shake1 4s ease infinite", "important")
        loadNames(i)
    } else {
        image__select__left.style.setProperty("animation", "hithere 1.3s ease infinite", "important")
    }

    timer__left = window.setTimeout(
        () => {
            image__select__left.style.animation = false
        }, 1330);
}

image__select__left.onclick = () => {
    timer2 = image__select__right.style.animation = false
    clearTimeout(timer1)
    image__left()
}

// Right Arrow Animation to Select a Comment
const image__right = () => {
    i < 2 ? ((i = i + 1) && loadNames(i)) && image__select__right.style.setProperty("animation", "shake2 4s ease infinite", "important") 
        : (image__select__right.style.setProperty("animation", "hithere 1.3s ease infinite", "important"))

    timer__right = window.setTimeout(
        () => {
            image__select__right.style.animation = false;
        }, 1330)
}

image__select__right.onclick = () => {
    timer1 = image__select__left.style.animation = false;
    clearTimeout(timer2)
    image__right()
    
}


let heart__state = 1

// Heart Animation to Like a Comment
card__review__heart.onclick = () => {
    heart__state === 1 ? (heart__state = 2) && (card__review__heart.src = "./image/Heart.svg") 
        : (card__review__heart.src = "./image/Heart2.svg") && (n = 1)
    heart()
}

const heart = () => {
    card__review__heart.style.animation = "pulse .3s infinite ease-in-out alternate"

    timer2 = window.setTimeout(
        () => {
            card__review__heart.style.animation = false  
        }, 800) 
}

// Access the Data in the JSON file
async function loadNames(i) {
    const response = await fetch('./info.json')
    const names = await response.json()

    let elements = [
        $("#card__review-text"), 
        $("#card__review-image"), 
        $("#card__review-username--name"), 
        $('#card__review-username--subtitle'), 
        $("#card__review-heart")
    ]

    const change = () => {
        elements[0].fadeOut(function(){
            card__review__text.innerText = names.members[i].text
            elements[0].fadeIn();
        })
       
        elements[1].fadeOut(function(){
            card__review__image.src = names.members[i].image
            elements[1].fadeIn();
        })

        elements[2].fadeOut(function(){
            card__review__name.innerText = names.members[i].name
            elements[2].fadeIn();
        })

        elements[3].fadeOut(function(){
            card__review__subtitle.innerText = names.members[i].subtitle
            elements[3].fadeIn();
        })

        elements[4].fadeOut(function(){
            card__review__heart.src = names.members[i].heart
            elements[4].fadeIn();
        })
    }
    change()
}
  


  

  