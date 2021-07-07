class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    },
    this.tail = this.head,
    this.length = 1;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList()
  }
  prepend(value) {
    const newNode = new Node(value); 
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList()
  }
  insert(index, value) {

    if (index >= this.length) {
      this.append(value);
      return this.printList();

    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
    return this.printList()
  }
  remove(index) {
    if (index == this.length) return []
    if (index < 0) return undefined
    if (index > this.length) return new ReferenceError('index does not exist')

    const leader = this.traverseToIndex(index-1);
    const nodeToRemove  = leader.next;
    leader.next = nodeToRemove.next;
   

    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    if (!index) return this;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
} 

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(15)
myLinkedList.prepend(0)
myLinkedList.insert(2, 99)
myLinkedList.remove(2)
// console.log(myLinkedList.length);
