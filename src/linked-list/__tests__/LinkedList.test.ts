import LinkedList from "../LinkedList";

describe('LinkedList', () => {
  it('should create empty list on init', () => {
    const list = new LinkedList()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    expect(list.print(null)).toBe('List: ')
  })
})