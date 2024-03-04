window.addEventListener('load', () => {
  const hero = document.querySelector('hero')
  const heroTitle = document.getElementsByClassName('heroTitle')
  const heroCover = document.querySelector('.heroCover')

  let heroHeight = hero.clientHeight
  let scaleRatio = Math.pow(27, 1 / heroHeight)

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY
    let scaleAmount = Math.pow(scaleRatio, scrollPosition)

    if (scrollPosition > 0) {
      heroCover.classList.add('hidden')
    } else {
      heroCover.classList.remove(`hidden`)
    }

    if (scrollPosition <= heroHeight) {
      heroTitle.style.transform(`scale(${scaleAmount})`)
    } else {
      heroTitle.style.transform(`scale(27)`)
    }

    //if(scaleAmount < 30 || scrollPosition <= heroHeight)
    //if and when using this method to scale:
    //let scaleAmount = scrollPosition / 27
    // heroTitle.getElementsByClassName.transform = `scale(${scaleAmount})`
    //to heroTitle also add a transform-origin, play with devtools in chrome if necessary
  })
})
