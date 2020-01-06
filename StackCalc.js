class StackCalc {
  constructor() {
    this.stack = [0];
    this.val = 0;
  }
  run(instructions) {
    if (instructions.length == 0) return;
    var error = false;
    instructions.split(" ").forEach(x => {
      if (error) return;
      if (x == "+") this.stack.push(this.stack.pop() + this.stack.pop());
      else if (x == "-") this.stack.push(this.stack.pop() - this.stack.pop());
      else if (x == "*") this.stack.push(this.stack.pop() * this.stack.pop());
      else if (x == "/") this.stack.push(this.stack.pop() / this.stack.pop());
      else if (x == "DUP") this.stack.push(this.value);
      else if (x == "POP") this.stack.pop();
      else if (!isNaN(parseInt(x))) this.stack.push(parseInt(x));
      else {
        this.val = "Invalid instruction: " + x;
        error = true;
        return;
      }
      this.val = this.stack[this.stack.length-1];
    })
  }
  get value() {
    return this.val;
  }
}