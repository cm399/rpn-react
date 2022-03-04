# rpn-react

## Running The Project

### `npm install`

Run this command on your console in the root folder of this project. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Description

Reverse Polish notation (RPN) is a mathematical notation in which every operator follows all of its operands, in contrast to Polish notation, which puts the operator in the prefix position. 
It is also known as postfix notation and is parenthesis-free as long as operator arities are fixed. 

The infix expression

5 + ((1 + 2) × 4) − 3

can be written down like this in RPN:

5 1 2 + 4 x + 3 -

Reverse Polish notation was proposed by Burks, Warren and Wright in 1954 and so named because it was simply the reverse of Polish notation (prefix notation), invented by the Polish logician Jan Lukasiewicz, which puts the operator before the operands. 
In the 1960s, it was then independently reinvented by E.W. Dijkstra and F.L. Bauer for reducing the number of times computer memory is accessed and increasing performance. 
It made use of the computer’s stack to store its operands before executing the operator.

RPN leads to faster calculations for a couple of reasons. One is that there is less information to store. 
Therefore, instead of needing to store nine characters for the expression ((5 – 3) * 2), computers using RPN only need to store five characters with the expression 5 3 – 2 *. 
And because there are fewer characters to process, execution becomes faster.

So in a computer using RPN, the evaluation of the expression 5 1 – 3 * is as follows:

1. Push 5 into the stack. This is the first value.
2. Push 1 into the stack. This is the second value and is on the position above the 5.
3. Apply the subtraction operation by taking two operands from the stack (1 and 5). 
 The top value (1) is subtracted from the value below it (5), and the result (4) is stored back to the stack. 4 is now the only value in the stack and is in the bottom.
5. Push 3 into the stack. This value is in the position above 4 in the stack.
6. Apply the multiplication operation by taking the last two numbers off the stack and multiplying them. 
The result is then placed back into the stack. After this operation, the stack now only contains the number 12.

## Solution 

Note:

- The division between two integers should truncate toward zero.
- The given RPN expression is always valid. That means the expression would always evaluate to a result and there won’t be any divide by zero operation.


Layman Working of RPN as shown

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Approach:

The basic approach for the problem is using the stack.

- Accessing all elements in the array, if the element is not matching with the special character (‘+’, ‘-‘,’*’, ‘/’) then push the element to the stack.
- Then whenever the special character is found then pop the first two-element from the stack and perform the action and then push the element to stack again.
- Repeat the above two process to all elements in the array
- At last pop the element from the stack and print the Result

## Hosted Link

Please visit [https://ft457.github.io/rpn-react1/](https://ft457.github.io/rpn-react1/) to view it online. 
