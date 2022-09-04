const navSlide = () => {
    const navBar = document.querySelector('nav')
    const hamburgerMenu = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.navlink')

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active')


        navLinks.forEach((link) => {
            console.log('last')
        })

        hamburgerMenu.classList.toggle('change')
        // navBar.classList.toggle('top-fixed')
        if (document.body.style.overflowY !== 'hidden') {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = "auto";
        }
        
        console.log(document.body.style.overflowY)
    })


}

navSlide()