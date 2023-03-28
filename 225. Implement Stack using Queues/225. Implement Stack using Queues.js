// var Node = function(value) {
//     this.value = value;
//     this.next = null;
// }

// build a stack with 2 queues.
// build two queues with arrays? even though inefficient?


var MyStack = function() {
    this.data = []
    this.firstQueue = [];
    this.secondQueue = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {  
    this.firstQueue.push(x)
    return this;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.firstQueue.length === 0){
        return null;
    }
    this.secondQueue.push(this.firstQueue.pop())
    return this.secondQueue.pop()

    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.firstQueue.length === 0){
        return null;
    }
    return this.firstQueue[this.firstQueue.length-1];

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.firstQueue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const theStack = new MyStack
theStack.push(1)
theStack.push(2)
theStack.push(3)
theStack.push(4)

console.log(theStack)

theStack.pop()


console.log(theStack)

console.log(theStack.top())

