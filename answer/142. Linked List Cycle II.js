/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head,
        fast = head,
        startPoint = head;
    while (fast && (fast = fast.next) && (fast = fast.next)) {
        slow = slow.next;
        if (fast === slow) {
            let temp = slow;
            while (1) {
                do {
                    if (startPoint === slow) {
                        return startPoint;
                    }
                    slow = slow.next;
                } while (slow !== temp);
                startPoint = startPoint.next;
            }
        }
    }
    return null;
};

var detectCycle = function (head) {
    let slow = head,
        fast = head;
        while (fast && fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                slow = head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
    return null;
};