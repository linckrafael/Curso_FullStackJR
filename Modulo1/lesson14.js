// ESTRUTURA DE DADOS - LISTAS
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // método para adicionar elemento na lista
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    // método para inserir um elemento numa posição especifica
    if (index < 0 || index > this.size) {
      return console.log("Index fora dos limites");
    }

    let newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Index fora dos limites");
    }

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--; //this.size = this.size - 1
    return current.data; // caso queira retornar o dado excluido
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0; // ira retornar se a lista esta vazia true e false
  }

  sizeOfList() {
    return this.size; // ira retornar o tamanho da lista
  }

  printList() {
    // método para imprimir a lista
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList(); // criou um novo nó, criou um objeto na memoria

// primeiro TESTE
// list.add("MaisPraTI");
// list.add(true);
// list.add("Elemento 3");
// list.insertAt("novo elemento", 1);
// list.printList();

list.add("Elemento 0");
list.add("Elemento 1");
list.add("Elemento 2");
list.add("Elemento 3");

console.log(list.indexOf("Elemento 3"));
list.removeFrom(1);
list.printList();
console.log(list.sizeOfList());
