class LinkedList {
    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        } 
        let node = this.root;
        
        while (node.next) {
            node = node.next;
        }
 
        node.next = new Node(value);
        this.size += 1;

        return true;
    }

    getSize() {
        return this.size;
    }

    print() {
        let result = [];
        let node = this.root;

        while (node) {
            result.push(node.value);
            node = node.next;
        }
        
        return result;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let list = new LinkedList();
list.add(2);
list.add(3);
list.add(1);
list.add(9);
list.add(13);
list.add(5);

list.print();