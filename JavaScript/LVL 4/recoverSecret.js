class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.current = null;
    };

    findNode(value, node=this.head.next) {
        if (!node) {
            return null;
        }
        else if (node.value === value) {
            return node;
        }
        node = this.findNode(value, node.next);
        return node;
    };

    evaluateTriplet(triplet) {
        this.current = this.head;
        for (const letter of triplet) {
            let foundNode = this.findNode(letter);
            if (!foundNode) {
                let newNode = new Node(letter);
                if (!this.current.next) {
                    this.current.next = newNode;
                    newNode.prev = this.current;
                    this.current = newNode;
                }
                else {
                    this.current.next.prev = newNode;
                    newNode.next = this.current.next;
                    newNode.prev = this.current;
                    this.current.next = newNode;
                    this.current = newNode;
                }
            }
            else {
                let foundInPosition = this.findNode(foundNode.value, this.current);
                if (!foundInPosition) {
                    foundNode.next.prev = foundNode.prev;
                    foundNode.prev.next = foundNode.next;
                    if (!this.current.next) {
                        foundNode.next = this.current.next;
                        this.current.next = foundNode;
                        foundNode.prev = this.current;
                        this.current = foundNode;
                    }
                    else {
                        foundNode.next = this.current.next;
                        foundNode.prev = this.current;
                        foundNode.next.prev = foundNode;
                        this.current.next = foundNode;
                        this.current = foundNode;
                    }
                }
                else {
                    this.current = foundNode;
                }
            }
        }
    };

    printList(node=this.head.next, array=[]) {
        if (!node) {
            return array;
        }
        array.push(node.value);
        this.printList(node.next, array);
        return array;
    };
}

var recoverSecret = function(triplets) {
    const linkedList = new LinkedList();

    for (const triplet of triplets) {
        linkedList.evaluateTriplet(triplet);
    }

    return linkedList.printList().join("");
};

// triplets1 = [
//     ['t','u','p'],
//     ['w','h','i'],
//     ['t','s','u'],
//     ['a','t','s'],
//     ['h','a','p'],
//     ['t','i','s'],
//     ['w','h','s']
// ];

// console.log(recoverSecret(triplets1))