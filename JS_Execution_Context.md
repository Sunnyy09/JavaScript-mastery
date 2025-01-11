# JS Execution Context

## There are mainy two types:-

1. Global Execution Context
2. Function Execution Context

## There are two phases to run JS code

### 1. Memory Creation Phase or Creation Phase

In this phase, the memory allocated to the variables or another thing that we declare.

### 2. Execution Phase

In this phase, the all execution process is happened in this phase.

`let's understand by example`

```
let val1 = 10;
let val1 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

```

step1 - Global Execution or environment:- Any code short or lengthy is run by global execution. It is allocated in `this`

step2 - Memory Phase:- Collect all the variables and kept there.

first of all val1 is coming and it is going to undefind
as same as, val2 -> undefined
addNum -> function definition
result1 -> undefined
result2 -> undefined

<!-- these steps are in cycle `1` -->

step3 - Execution Phase:-
val1 = 10
val2 = 5
result1 -> addNum(), this func makes the one more execution context

```
new variable environment(memory creation phase)
+
execution thread(execution phase)

```

After all operation completes, the global execution context is deleted.

To understand this concept, watch this youtube video
`https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25`
