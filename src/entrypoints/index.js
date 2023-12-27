import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductForm from '../product-form'
import GridList from '../collection-grid-slider'
import Header from '../header'

window.customElements.define('product-form', ProductForm)
window.customElements.define('grid-list', GridList)
window.customElements.define('header-menu', Header)

AOS.init()
