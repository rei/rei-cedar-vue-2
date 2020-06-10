import { shallowMount } from '@vue/test-utils';
import CdrTable from 'componentdir/table/CdrTable';

const basicContent = `<thead>
  <tr>
    <th>head 1</th>
    <th>head 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>content A1</td>
    <td>content A2</td>
  </tr>
  <tr>
    <td>content B1</td>
    <td>content B2</td>
  </tr>
</tbody>`

describe('CdrTable.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(CdrTable, {
      slots: {
        default: basicContent,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('places attrs on table element', () => {
    const wrapper = shallowMount(CdrTable, {
      slots: {
        default: basicContent,
      },
      attrs: {
        'aria-label': 'test table'
      }
    });

    expect(wrapper.find('table').attributes('aria-label')).toBe('test table')
  });

  it('is not bordered when striped', () => {
    const wrapper = shallowMount(CdrTable, {
      propsData: {
        border: true,
        striped: true,
      },
      slots: {
        default: basicContent,
      }
    });

    expect(wrapper.find('table').classes()).toContain('cdr-table--striped');
    expect(wrapper.find('table').classes()).not.toContain('cdr-table--border');
  });

  it('has a correct responsive class', () => {
    const wrapper = shallowMount(CdrTable, {
      propsData: {
        fullWidth: '@xs',
      },
      slots: {
        default: basicContent,
      }
    });

    expect(wrapper.find('table').classes()).toContain('cdr-table--full-width@xs');
  });
});