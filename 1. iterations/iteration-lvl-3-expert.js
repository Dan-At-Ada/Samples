// Expert Iteration Examples for New JavaScript Learners

// 1. Array methods for iteration - Data processing pipeline
console.log("1. Expert Array Iteration - Data processing pipeline:");
const rawData = [
  { id: 1, value: "10.5", category: "A" },
  { id: 2, value: "15.2", category: "B" },
  { id: 3, value: "8.7", category: "A" },
  { id: 4, value: "20.1", category: "C" },
  { id: 5, value: "12.3", category: "B" }
];

const processedData = rawData
  .map(function(item) { 
    return { ...item, value: parseFloat(item.value) };
  })
  .filter(function(item) { 
    return item.value > 10;
  })
  .sort(function(a, b) { 
    return b.value - a.value;
  })
  .reduce(function(acc, item) {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

console.log("Processed data:", JSON.stringify(processedData, null, 2));

// Question about the current code: How does the reduce function work in this example? What does it accomplish?
// Question for improvement: How would you modify this pipeline to calculate the total value for each category?

// 2. Recursive function - Directory tree traversal
console.log("\n2. Expert Recursive Function - Directory tree traversal:");
const fileSystem = {
  name: "root",
  children: [
    {
      name: "src",
      children: [
        { name: "index.js" },
        { name: "styles.css" }
      ]
    },
    {
      name: "public",
      children: [
        { name: "index.html" },
        {
          name: "images",
          children: [
            { name: "logo.png" },
            { name: "background.jpg" }
          ]
        }
      ]
    },
    { name: "package.json" }
  ]
};

function traverseFileSystem(node, depth) {
  depth = depth || 0;
  console.log("  ".repeat(depth) + node.name);
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      traverseFileSystem(node.children[i], depth + 1);
    }
  }
}

traverseFileSystem(fileSystem);

// Question about the current code: What is the purpose of the 'depth' parameter in the traverseFileSystem function? How does it affect the output?
// Question for improvement: How could you modify this function to count the total number of files and directories?

// 3. Custom Iterable - Fibonacci sequence generator
console.log("\n3. Expert Custom Iterable - Fibonacci sequence generator:");
var fibonacciSequence = {
  [Symbol.iterator]: function() {
    var prev = 0, curr = 1;
    return {
      next: function() {
        [prev, curr] = [curr, prev + curr];
        return { value: prev, done: false };
      }
    };
  }
};

console.log("First 10 Fibonacci numbers:");
var count = 0;
for (var num of fibonacciSequence) {
  if (count >= 10) break;
  console.log(num);
  count++;
}

// Question about the current code: How does the [Symbol.iterator] method work in this example? Why is it useful?
// Question for improvement: How would you modify this iterator to produce the Fibonacci sequence up to a specific maximum value?

// 4. Higher-order functions - Custom map and filter implementations
console.log("\n4. Higher-order functions - Custom map and filter implementations:");
function customMap(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

function customFilter(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];
var doubled = customMap(numbers, function(num) { return num * 2; });
var evens = customFilter(numbers, function(num) { return num % 2 === 0; });

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
console.log("Even numbers:", evens);

// Question about the current code: How do these custom implementations of map and filter compare to the built-in Array methods?
// Question for improvement: How would you implement a custom reduce function?

// 5. Closure - Creating a counter function
console.log("\n5. Closure - Creating a counter function:");
function createCounter(initialValue) {
  var count = initialValue || 0;
  return function() {
    count++;
    return count;
  };
}

var counter1 = createCounter();
var counter2 = createCounter(10);

console.log("Counter 1:", counter1(), counter1(), counter1());
console.log("Counter 2:", counter2(), counter2(), counter2());

// Question about the current code: What is a closure and how is it being used in this example?
// Question for improvement: How would you modify this counter to allow decrementing as well as incrementing?

// Examples using readline-sync
var readlineSync = require('readline-sync');

console.log("\nExamples using readline-sync:");

// Interactive task scheduler
console.log("\nInteractive task scheduler:");
var tasks = [];

function addTask(description, priority) {
  tasks.push({ description: description, priority: priority, completed: false });
}

function viewTasks() {
  console.log("Tasks (sorted by priority):");
  tasks.sort(function(a, b) { return b.priority - a.priority; })
    .forEach(function(task, index) {
      console.log((index + 1) + ". [" + (task.completed ? "X" : " ") + "] (Priority: " + task.priority + ") " + task.description);
    });
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log("Task marked as completed.");
  } else {
    console.log("Invalid task number.");
  }
}

while (true) {
  console.log("\n1. Add task\n2. View tasks\n3. Complete task\n4. Exit");
  var choice = readlineSync.question("Enter your choice: ");

  switch (choice) {
    case '1':
      var description = readlineSync.question("Enter task description: ");
      var priority = parseInt(readlineSync.question("Enter task priority (1-5): "));
      addTask(description, priority);
      break;
    case '2':
      viewTasks();
      break;
    case '3':
      var taskIndex = parseInt(readlineSync.question("Enter the number of the task to complete: ")) - 1;
      completeTask(taskIndex);
      break;
    case '4':
      console.log("Exiting...");
      process.exit(0);
    default:
      console.log("Invalid choice. Please try again.");
  }
}

// Question about the current code: How does the task sorting work in the viewTasks function?
// Question for improvement: How could you add a feature to remove completed tasks from the list?