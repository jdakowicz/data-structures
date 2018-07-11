class LinkedListNode {
  value: any;
  next: LinkedListNode;
  constructor (value: any, next: LinkedListNode) {
    this.value = value
    this.next = next
  }

  toString (getter: Function): string {
    return getter ? getter(this.value) : `${this.value}`
  }

}

export default LinkedListNode