export default class Header extends window.HTMLElement {
  constructor() {
    super()

    this.toggleMenu = this.querySelector('[data-toggle-menu]')

    this.toggleMenu.addEventListener('click', (e) => {
      e.preventDefault()

      this.classList.toggle('is-active')
    })
  }
}
