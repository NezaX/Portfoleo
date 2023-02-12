document
    .querySelectorAll(".header__button")
    .forEach(link => link
        .addEventListener('click',
            (e) => {
                e.preventDefault()
                const { target } = e
                document
                    .querySelector(target.getAttribute('href'))
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
            }))
document
    .querySelectorAll(".header__nav")
    .forEach(link => link
        .addEventListener('click',
            (e) => {
                e.preventDefault()
                const { target } = e
                document
                    .querySelector(target.getAttribute('href'))
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
            }))