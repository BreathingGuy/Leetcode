"use strict";

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // В начало списка
    prepend(value) {
        // Создаём новый узел, который будет новым head,
        // при создании передаем второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const newNode = new LinkedListNode(value, this.head);

        // Переназначаем head на новый узел
        this.head = newNode;

        // Если ещё нет tail, делаем новый узел tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        // Возвращаем весь список.
        return this;
    }

    // В конец
    append(value) {
        const newNode = new LinkedListNode(value);

        // Если нет head или tail, делаем новым узлом head и tail.
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Присоединяем новый узел к концу связного списка.
        // Берем последний узел и указываем, что его next будет новым узлом.
        this.tail.next = newNode;

        // Переназначаем tail на новый узел
        this.tail = newNode;

        return this;
    }

    delete(value) {
        // Если нет head значит список пуст
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        // Если head должен быть удален, то делаем следующий узел новым head.
        while (this.head && this.head.value === value) {
            deletedNode = this.head;

            // Переназначаем следующий за head узел aна новый head.
            this.head = this.head.next;
        }

        let currentNode = this.head;

        // Если следующий узел должен быть удален,
        // делаем узел через один, следующим для проверки.
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value == value) {
                    deletedNode = currentNode.next;
                    // Перезаписываем чтобы узел через один стал следующим узлом
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // Проверяем, должен ли tail быть удален.
        // Так как, если в цикле мы удаляем последний узел,
        // то с предпоследнего узла убираем только ссылку на него.
        // Поэтому делаем проверку на его удаление с "tail".
        if (this.tail && this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value == value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }

        let deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        let currentNode = this.head;
        while (currentNode.next) {

            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        let deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    fromArray(values) {
        values.forEach((value) => {
            this.append(value);
        });

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            // console.log('nextNode  ', nextNode);
            currNode.next = prevNode;
            // console.log('currNode.next   ', currNode.next);
            prevNode = currNode;
            // console.log('prevNode   ', prevNode);
            currNode = nextNode;
            // console.log('currNode   ', currNode , '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________');
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////

