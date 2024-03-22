export function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export function randomElementFromArray(arr) {
    const element = arr[Math.floor(Math.random() * arr.length)];
    return element;
  }