# LeetCode

Javascript Solutions to problems on LintCode

| #        | question                                          |  difficulty  |
| -------- |      ----------------------------                 | :---------:  |
| 1        | Two Sum                                           | Easy         |
| 2        | Add Two Numbers                                   | Medium       |
| 3        | Longest Substring Without Repeating Characters    | Medium       |
| 4        | Median of Two Sorted Arrays                       | Hard         |
| 5        | Longest Palindromic Substring                     | Medium       |
| 6        | [ZigZag Conversion](#6-zigzag-conversion)                                 | Medium       |
| 7        | Reverse Integer                                   | Easy         |
| 8        | String to Integer (atoi)                          | Medium       |
| 10       | Regular Expression Matching                       | Difficult    |
| 13       | Roman to Integer                                  | Easy         |
| 26       | Remove Duplicates from Sorted Array               | Easy         |
| 191      | Number of 1 Bits                                  | Easy         |
| 231      | Power of Two                                      | Easy         |
| 461      | Hamming Distance                                  | Easy         |

## [6. ZigZag Conversion](https://leetcode.com/problems/string-to-integer-atoi/)

将字符串转换成zigzag的形态，然后按照从左到右的顺序输出新的字符串，设定方向和当前行序列，在转折点处改变方向，方向向上降低行序列，向下则相反。每行的字符进行拼接，最后拼接得到结果字符串。(tips:使用数组的fill方法初始化数组，建立长度确定，初始值为''的数组。