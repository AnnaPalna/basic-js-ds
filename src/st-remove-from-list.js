const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
/** */
 function ListNode(x) {
   this.value = x;
   this.next = null;
  }


module.exports = function removeKFromList(head, val) {
 
    let array = transformToArray(head);
    array = array.filter((item) => item !== val);
    const res = transformToList(array)
    return res;
}
 // односвязный список трансформировать в массив
function transformToArray(head) {
    let resArray = []
    if (head) {
        resArray.push(head.value)
    }
    while (head.next) {
        resArray.push(head.next.value)
        head.next = head.next.next
    }
    return resArray
}

 // из массива сделать список
function transformToList(array) {
    return array.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }
