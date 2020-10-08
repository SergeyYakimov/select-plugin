import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
  placeholder: 'Выберите, пожалуйста, элемент',
  selectedId: '3',
  data: [
    {id: '1', value: 'Angular'},
    {id: '2', value: 'React'},
    {id: '3', value: 'Vue'},
    {id: '4', value: 'React Native'},
    {id: '5', value: 'Nuxt'},
    {id: '6', value: 'Next'}
  ],
  onSelect(item) {
    console.log('Selected item', item)
  }
})

window.s = select
