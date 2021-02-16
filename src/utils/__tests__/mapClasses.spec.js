import mapClasses from '../mapClasses';


const fakeStyle = {
  a: 'a1',
  b: 'b2',
  c: 'c3',
}

describe('mapClasses', () => {
  it('converts classnames to css modules', () => {
    const classes = mapClasses(fakeStyle, 'c a b');
    expect(classes).toBe('c3 a1 b2');
  });

  it('removes falsy values', () => {
    const classes = mapClasses(fakeStyle, 'a false null undefined b');
    expect(classes).toBe('a1 b2');
  });

  it('accepts infinite nested arguments', () => {
    const classes = mapClasses(fakeStyle, 'a', false, 'c undefined a', null, 'b');
    expect(classes).toBe('a1 c3 a1 b2');
  });

});
