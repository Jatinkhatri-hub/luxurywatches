import Swiper from 'swiper'
import 'swiper/css'

export default class GridList extends window.HTMLElement {
  constructor() {
    super()

    if (window.innerWidth < 768) {
      const swiper = new Swiper(this, {
        slidesPerView: 'auto',
        resistanceRatio: 0,
      })
    } else {
      this.swiperWrapper = this.querySelector('[data-swiper-wrapper]')
      this.swiperWrapper.classList.remove('swiper-wrapper')
    }
  }
}
