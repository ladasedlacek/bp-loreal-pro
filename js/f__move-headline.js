const run_move_headline = () => {
    const h1cc = document.getElementById('h1cc')
    const target = document.querySelector('.category-description')

    if (h1cc && target) {
        target.insertAdjacentElement('afterend', h1cc)
    }
}
run_move_headline()