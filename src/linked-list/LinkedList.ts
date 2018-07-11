import LinkedListNode from './LinkedListNode'

class LinkedList {
  head: LinkedListNode
  tail: LinkedListNode

  constructor () {
    this.tail = null
    this.head = null
  }

  append (node: LinkedListNode): LinkedList {
    if (this.tail === null || this.head === null) {
      this.tail = node
      this.head = node
    }
    this.tail.next = node
    this.tail = node
    
    return this
  }

  print (getter: Function): string {
    let result = 'List: '
    let current = this.head
    while (current) {
      result = `${result}${getter ? getter(current.value) : current.value}, `
      current = current.next
    }
    return result
  }

}

export default LinkedList
