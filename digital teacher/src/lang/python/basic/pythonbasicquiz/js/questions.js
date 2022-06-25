// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is the use of id() function in python?",
    answer: "Id returns the identity of the object",
    options: [
      "Every object doesn’t have a unique id",
      "Id returns the identity of the object",
      "All of the mentioned",
      "None of the mentioned"
    ]
  },
    {
    numb: 2,
    question: "All Keywords in python are in?",
    answer: "None of the mentioned",
    options: [
      "UPPER CASE",
      "lower case",
      "Capitalized",
      "None of the mentioned"
    ]
  },
    {
    numb: 3,
    question: "Which type of Programming does Python support?",
    answer: "all of the mentioned",
    options: [
      "object-oriented programming",
      "structured programming",
      "functional programming",
      "all of the mentioned"
    ]
  },
    {
    numb: 4,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "no",
    options: [
      "no",
      "yes",
      "machine dependent",
      "none of the mentioned"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is the correct extension of the Python file?",
    answer: ".py",
    options: [
      ".python",
      ".pl",
      ".py",
      ".p"
    ]
  },
    {
    numb: 6,
    question: "Is Python code compiled or interpreted?",
    answer: "Python code is neither compiled nor interpreted",
    options: [
      "Python code is both compiled and interpreted",
      "Python code is neither compiled nor interpreted",
      "Python code is only compiled",
      "Python code is only interpreted"
     ]
   }, 
     {
    numb: 7,
    question: "What will be the value of the following Python expression? 4+3%5",
    answer: "7",
    options: [
      "7", 
      "2",
      "4",
      "1"
     ]
   }, 
     {
    numb: 8,
    question: "Which of the following is used to define a block of code in Python language?",
    answer: "Indentation",
    options: [
      "Indentation",
      "Key",
      "Brackets",
      "All of the mentioned"
     ]
   }, 
     {
    numb: 9,
    question: "Which keyword is used for function in Python language?",
    answer: "Def",
    options: [
      "Function",
      "Def",
      "Fun",
      "Define"
     ]
   }, 
     {
    numb: 10,
    question: "Which of the following character is used to give single-line comments in Python?",
    answer: "#",
    options: [
      "//",
      "#",
      "!",
      "/*"
     ]
   }, 
      {
    numb: 11,
    question: "Which of the following functions can help us to find the version of python that we are currently working on?",
    answer: "sys.version(1)",
    options: [
      "sys.version(1)",
      "sys.version(0)",
      "sys.version()",
      "sys.version"
     ]
   }, 
     {
    numb: 12,
    question: "Python supports the creation of anonymous functions at runtime, using a construct called",
    answer: "lambda",
    options: [
      "pi",
      "anonymous",
      "lambda",
      "none of the mentioned"
     ]
   }, 
     {
    numb: 13,
    question: "What will be the output of the following Python code snippet if x=1? x<<2",
    answer: "4",
    options: [
      "4",
      "2",
      "1",
      "8"
     ]
   }, 
     {
    numb: 14,
    question: "What does pip stand for python?",
    answer: "Preferred Installer Program",
    options: [
      "unlimited length",
      "all private members must have leading and trailing underscores",
      "Preferred Installer Program",
      "none of the mentioned"
     ]
   }, 
     {
    numb: 15,
    question: "Which of the following is true for variable names in Python?",
    answer: "unlimited length",
    options: [
      "underscore and ampersand are the only two special characters allowed",
      "unlimited length",
      "all private members must have leading and trailing underscores",
      "none of the mentioned"
     ]
   }, 
      {
    numb: 16,
    question: "Which of the following is the truncation division operator in Python?",
    answer: "//",
    options: [
      "|",
      "//",
      "/",
      "%"
     ]
   }, 
      {
    numb: 17,
    question: "Which of the following functions is a built-in function in python?",
    answer: "print()",
    options: [
      "factorial()",
      "print()",
      "seed()",
      "sqrt()"
     ]
   }, 
      {
    numb: 18,
    question: "Which of the following is not a core data type in Python programming?",
    answer: "Class",
    options: [
      "Tuples",
      "Lists",
      "Class",
      "Dictionary"
     ]
   }, 
      {
    numb: 19,
    question: "Which of these is the definition for packages in Python?",
    answer: "A folder of python modules",
    options: [
      "A set of main modules",
      "A folder of python modules",
      "A number of files containing Python definitions and statements",
      "A set of programs making use of Python modules"
     ]
   }, 
      {
    numb: 20,
    question: "What is the order of namespaces in which Python looks for an identifier?",
    answer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
    options: [
      "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
      "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
      "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
      "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
     ]
   }, 
      {
    numb: 21,
    question: "Which module in the python standard library parses options received from the command line?",
    answer: "getopt",
    options: [
      "getarg",
      "getopt",
      "main",
      "os"
     ]
   }, 
      {
    numb: 22,
    question: "What arithmetic operators cannot be used with strings in Python?",
    answer: "-",
    options: [
      "*",
      "-",
      "+",
      "All of the mentioned"
     ]
   }, 
      {
    numb: 23,
    question: "Which of the following statements is used to create an empty set in Python?",
    answer: "set()",
    options: [
      "()",
      "[]",
      "{}",
      "set()"
     ]
   }, 
      {
    numb: 24,
    question: "To add a new element to a list we use which Python command?",
    answer: "list1.append(5)",
    options: [
      "list1.addEnd(5)",
      "list1.addLast(5)",
      "list1.append(5)",
      "list1.add(5)"
     ]
   }, 
      {
    numb: 25,
    question: "Which one of the following is the use of function in python?",
    answer: "Functions are reusable pieces of programs",
    options: [
      "Functions don’t provide better modularity for your application",
      "you can’t also create your own functions",
      "Functions are reusable pieces of programs",
      "All of the mentioned"
     ]
   }, 
];