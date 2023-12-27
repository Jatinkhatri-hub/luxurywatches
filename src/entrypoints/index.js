import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductForm from '../product-form'
import GridList from '../collection-grid-slider'

window.customElements.define('product-form', ProductForm)
window.customElements.define('grid-list', GridList)

AOS.init()
