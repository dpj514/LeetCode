# LeetCode

Javascript Solutions to problems on LintCode

| #        | question                                          |  difficulty  |
| -------- |      ----------------------------                 | :---------:  |
| 1        | Two Sum                                           | Easy         |
| 2        | Add Two Numbers                                   | Medium       |
| 3        | Longest Substring Without Repeating Characters    | Medium       |
| 4        | Median of Two Sorted Arrays                       | Hard         |
| 5        | Longest Palindromic Substring                     | Medium       |
| 6        | [ZigZag Conversion](#6-zigzag-conversion)         | Medium       |
| 7        | Reverse Integer                                   | Easy         |
| 8        | String to Integer (atoi)                          | Medium       |
| 10       | Regular Expression Matching                       | Difficult    |
| 13       | Roman to Integer                                  | Easy         |
| 26       | Remove Duplicates from Sorted Array               | Easy         |
| 142      | [Linked List Cycle II](#142-linked-list-cycle-ii) | Medium       |
| 191      | Number of 1 Bits                                  | Easy         |
| 231      | Power of Two                                      | Easy         |
| 461      | Hamming Distance                                  | Easy         |

## [6. ZigZag Conversion](https://leetcode.com/problems/string-to-integer-atoi)

将字符串转换成zigzag的形态，然后按照从左到右的顺序输出新的字符串，设定方向和当前行序列，在转折点处改变方向，方向向上降低行序列，向下则相反。每行的字符进行拼接，最后拼接得到结果字符串。(tips:使用数组的fill方法初始化数组，建立长度确定，初始值为''的数组。)

## [142. Linked LIst Cycle II](https://leetcode.com/problems/linked-list-cycle-ii)

通过快慢指针是否相遇可以确实链表中是否包括环，设相遇时慢指针前进了k，快指针则前进2k，2k-k=nr，r为环的长度，设从链表起点到环起点距离为a，从环起点到快慢指针相遇点距离为b,k=a+b=nr,a=nr-b=(n-1)r+(r-b),所以将一个指针重新指向链表起点并与另一个指针以相同速度同时前进时，当指向起点的指针到达环起点时，另一个指针前进了(n-1)r+(r-b)，即到达环起点后又前进了n-1圈，所以此时两指针都指向了环起点。(tips:判断链表节点的next属性是否存在时，在while的条件语句中对变量进行赋值，这样在循环体中无需赋值，以为速度会更快，但实际上速度远不如在条件语句中判断后在循环体中再单独赋值，应该是引擎优化的原因。)