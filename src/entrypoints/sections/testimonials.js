import Swiper from 'swiper'
import 'swiper/css'

export default class TestimonialSlider extends window.HTMLElement {
  constructor() {
    super()

    const arrows = this.querySelectorAll('[data-arrow]')
    const swiper = new Swiper(this, {
      allowTouchMove: false,
      speed: 500,
    })

    arrows.forEach((arrow) => {
      arrow.addEventListener('click', (e) => {
        e.preventDefault()
        const { index } = e.currentTarget.dataset

        swiper.slideTo(index)
      })
    })
  }
}
