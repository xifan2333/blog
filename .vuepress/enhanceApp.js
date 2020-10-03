
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
if('undefined' == typeof window){
    let window = globalThis
}
export default ({
    Vue
}) => {
    Vue.use(Chartkick.use(Chart))
}