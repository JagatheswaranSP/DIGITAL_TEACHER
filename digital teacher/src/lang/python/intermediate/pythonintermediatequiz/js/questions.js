// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is the use of function in python?",
    answer: "Functions are reusable pieces of programs",
    options: [
      "Functions are reusable pieces of programs",
      "Functions don’t provide better modularity for your application",
      "you can’t also create your own functions",
      "All of the mentioned"
    ]
  },
    {
    numb: 2,
    question: "Which keyword is used for function?",
    answer: "Def",
    options: [
      "Fun",
      "Define",
      "Def",
      "Function"
    ]
  },
    {
    numb: 3,
    question: "Python supports the creation of anonymous functions at runtime, using a construct called _____",
    answer: "lambda",
    options: [
      "pi",
      "lambda",
      "anonymous",
      "none of the mentioned"
    ]
  },
    {
    numb: 4,
    question: "Does Lambda contains return statements?",
    answer: "False",
    options: [
      "True",
      "False",
      "All of the above",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is not a class method?",
    answer: "Non-static",
    options: [
      "Non-static",
      "Static",
      "Bound",
      "Unbounded"
    ]
  },
   {
    numb: 6,
    question: "What is delattr(obj,name) used for?",
    answer: "To delete an attribute",
    options: [
      "To print deleted attribute",
      "To delete an attribute",
      "To check if an attribute is deleted or not",
      "To set an attribute"
    ]
  },
    {
    numb: 7,
    question: "Which of the following best describes inheritance?",
    answer: "Ability of a class to derive members of another class as a part of its own definition",
    options: [
      "Means of bundling instance variables and methods in order to restrict access to certain class members",
      "Focuses on variables and passing of variables to functions",
      "Ability of a class to derive members of another class as a part of its own definition",
      "Allows for implementation of elegant software that is well designed and easily modified"
    ]
  },
    {
    numb: 8,
    question: "Which of the following statements is wrong about inheritance?",
    answer: "Private members of a class can be inherited and accessed",
    options: [
      "Protected members of a class can be inherited",
      "The inheriting class is called a subclass",
      "Inheritance is one of the features of OOP",
      "Private members of a class can be inherited and accessed"
    ]
  },
    {
    numb: 9,
    question: "An exception is:",
    answer: "an object",
    options: [
      "an object",
      "a special function",
      "a standard module",
      "a module"
    ]
  },
    {
    numb: 10,
    question: "How to create an iterator object from a list?",
    answer: "By giving the list to the iter() function.",
    options: [
      "Using a for loop.",
      "Using a while loop.",
      "By giving the list to the iter() function.",
      "You cannot create an iterable object from a list."
    ]
 },
    {
    numb: 11,
    question: "Which of the following statements is correct?",
    answer: "An exception is an error that occurs during execution.",
    options: [
      "A syntax error is also an exception.",
      "An exception is an error that occurs during execution.",
      "An exception is used to exclude a block of code in Python.",
      "All the answers are true"
    ]
  },
    {
    numb: 12,
    question: "Which of the following data structures is returned by the functions globals() and locals()?",
    answer: "dictionary",
    options: [
      "list",
      "set",
      "tuple",
      "dictionary"
    ]
  },
    {
    numb: 13,
    question: "Which module in Python supports regular expressions?",
    answer: "re",
    options: [
      "re",
      "regex",
      "pyregex",
      "none of the mentioned"
    ]
  },
    {
    numb: 14,
    question: "Which of the following creates a pattern object?",
    answer: "re.compile(str)",
    options: [
      "re.create(str)",
      "re.regex(str)",
      "re.compile(str)",
      "re.assemble(str)"
    ]
  },
    {
    numb: 15,
    question: "Which of these definitions correctly describes a module?",
    answer: "Design and implementation of specific functionality to be incorporated into a program",
    options: [
      "Denoted by triple quotes for providing the specification of certain program elements",
      "Design and implementation of specific functionality to be incorporated into a program",
      "Defines the specification of how it is to be used",
      "Any program that reuses code"
    ]
  },
    {
    numb: 16,
    question: "Program code making use of a given module is called a ______ of the module.",
    answer: "",
    options: [
      "Docstring",
      "Interface",
      "Modularity",
      "Client"
    ]
  },
    {
    numb: 17,
    question: "The value returned when we use the function isoweekday() is ______ and that for the function weekday() is ________ if the system date is 19th June, 2017 (Monday).",
    answer: "1,0",
    options: [
      "0,0",
      "0,1",
      "1,1",
      "1,0"
    ]
  },
    {
    numb: 18,
    question: " _____ represents an entity in the real world with its identity and behaviour.",
    answer: "An object",
    options: [
      "A method",
      "An object",
      "A class",
      "An operator"
    ]
  },
    {
    numb: 19,
    question: "What is the result of math.trunc(3.1)?",
    answer: "3",
    options: [
      "3.0",
      "3",
      "0.1",
      "1"
    ]
  },
    {
    numb: 20,
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
    numb: 21,
    question: "Which one of the following is not a keyword in Python language?",
    answer: "eval",
    options: [
      "pass",
      "eval",
      "assert",
      "nonlocal"
    ]
  },
    {
    numb: 22,
    question: "What arithmetic operators cannot be used with strings in Python?",
    answer: "–",
    options: [
      "*",
      "+",
      "–",
      "All of the mentioned"
    ]
  },
    {
    numb: 23,
    question: "What are the two main types of functions in Python?",
    answer: "Built-in function & User defined function",
    options: [
      "System function",
      "Built-in function & User defined function",
      "Custom function",
      "User function"
    ]
  },
    {
    numb: 24,
    question: "How many except statements can a try-except block have?",
    answer: "more than zero",
    options: [
      "zero",
      "more than one",
      "one",
      "more than zero"
    ]
  },
    {
    numb: 25,
    question: "Which of the following statements are used in Exception Handling in Python?",
    answer: "All of the above",
    options: [
      "try",
      "except",
      "finally",
      "All of the above"
    ]
  },
];