const butaoMenu = document.getElementById('burguer')
butaoMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu')

    if (menu.style.display == 'flex'){
          menu.style.display = 'none'
    }
    else{
        menu.style.display = 'flex'
        menu.style.justifyContent = "center"
        menu.style.flexFlow
    }
}
)






