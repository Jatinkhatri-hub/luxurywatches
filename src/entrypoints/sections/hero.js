import Swiper from 'swiper'
import 'swiper/css'

export default class HeroBanner extends window.HTMLElement {
  constructor() {
    super()

    const dots = this.querySelectorAll('[data-dot]')
    const swiper = new Swiper(this, {
      allowTouchMove: false,
      speed: 500,
    })

    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault()
        const { index } = e.currentTarget.dataset
        swiper.slideTo(index)
      })
    })
  }
}
