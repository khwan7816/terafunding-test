import { shallowMount } from '@vue/test-utils'
import SearchFilter from '@/components/SearchFilter.vue'

describe('SearchFilter.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(SearchFilter, {
      propsData: {
        categories: ['건축자금', '부동산담보'],
        id: 'contractType',
        value: []
      }
    })
  })

  describe('# Created', () => {
    it('SearchFilter 컴포넌트', () => {
      expect(wrapper.is(SearchFilter)).toBe(true)
    })
  })
})
