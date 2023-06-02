var isPalindrome = function(head) {
    
    let container = []; 
    let pointer = head;
    while(pointer){
        container.push(pointer.val);  // pointer.val로 수정
        pointer = pointer.next;
    }
    let box1 = [];
    let box2 = [];
    for(let i = 0; i < (container.length/2); i++) {
        box1.push(container[i]);
    }
    for(let i = container.length -1; i > (container.length/2) - 1; i--) {
        box2.push(container[i]);
    }
    return JSON.stringify(box1) === JSON.stringify(box2);  // 수정
};