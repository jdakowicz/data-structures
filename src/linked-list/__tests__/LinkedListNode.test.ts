import LinkedListNode from './../LinkedListNode'

interface TestObject {
  name: string,
  id: string
}

describe('LinkedList', () => {
  it('should create a number value node', () => {
    const node = new LinkedListNode(1, null)
    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })
  it('node should link to next node', () => {
    const nodeNext = new LinkedListNode(1, null)
    const node = new LinkedListNode(1, nodeNext)
    expect(node.next).toEqual(nodeNext)
  })
  it('should print string value by default', () => {
    const numberNode = new LinkedListNode(1, null)
    expect(numberNode.toString(null)).toBe('1')
  })
  it('should print string value by getter', () => {
    const testObject = {
      name: 'test name',
      id: 'random-id-example'
    }
    const numberNode = new LinkedListNode(testObject, null)
    const getter = (item: TestObject): string => item.name 
    expect(numberNode.toString(getter)).toBe('test name')
  })
})

