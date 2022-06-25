// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who developed Python Programming Language?",
    answer: "Guido van Rossum",
    options: [
      "Wick van Rossum",
      "Rasmus Lerdorf",
      "Guido van Rossum",
      "Niene Stom"
    ]
  },
    {
    numb: 2,
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
    numb: 3,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "none of the mentioned",
    options: [
      "no",
      "yes",
      "machine dependent",
      "none of the mentioned"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is the correct extension of the Python file?",
    answer: ".py",
    options: [
      "python",
      ".pl",
      ".py",
      ".p"
    ]
  },
  {
    numb: 5,
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
    numb: 6,
    question: "All keywords in Python are in _________",
    answer: "None of the mentioned",
    options: [
      "Capitalized",
      "lower case",
      "UPPER CASE",
      "None of the mentioned"
    ]
  },
  {
    numb: 7,
    question: "Which of the following is a feature of Python DocString?",
    answer: "All of the mentioned",
    options: [
      "In Python all functions should have a docstring",
      "Docstrings can be accessed by the __doc__ attribute on objects",
      "It provides a convenient way of associating documentation with Python modules, functions, classes, and methods",
      "All of the mentioned"
    ]
  },
    {
    numb: 8,
    question: "What is output of print(math.pow(3, 2))?",
    answer: "9.0",
    options: [
      " 9.0",
      "None",
      "9",
      "None of the mentioned"
    ]
  },
  {
    numb: 9,
    question: "Which of the following is the use of id() function in python?",
    answer: "In Python Id function returns the identity of the object",
    options: [
      "Every object in Python doesn’t have a unique id",
      "In Python Id function returns the identity of the object",
      "None of the mentioned",
      "All of the mentioned"
    ]
  },
    {
    numb: 10,
    question: "The process of pickling in Python includes ____________",
    answer: "conversion of a Python object hierarchy into byte stream",
    options: [
      "conversion of a Python object hierarchy into byte stream",
      "conversion of a datatable into a list",
      "conversion of a byte stream into Python object hierarchy",
      "conversion of a list into a datatable"
    ]
  },
  {
    numb: 11,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "yes",
    options: [
      "yes",
      "n",
      "machine dependent",
      "none of the mentioned"
    ]
  },
    {
    numb: 12,
    question: "Which of the following is an invalid variable?",
    answer: "1st_string",
    options: [
      "my_string_1",
      "1st_string",
      "foo",
      "_"
    ]
  },
  {
    numb: 13,
    question: "Which of the following is not a keyword?",
    answer: "eval",
    options: [
      "eval",
      "assert",
      "nonlocal",
      "pass"
    ]
  },
    {
    numb: 14,
    question: " Which of these in not a core data type?",
      answer: "Class",
    options: [
      "Lists",
      "Dictionary",
      "Tuples",
      "Class"
    ]
  },
  {
    numb: 15,
    question: "iven a function that does not return any value, What value is thrown by default when executed in shell.",
    answer: "None",
    options: [
      "int",
      "bool",
      "void",
      "None"
    ]
  },
    {
    numb: 16,
    question: "Which of the following will run without errors?",
    answer: "round(45.8)",
    options: [
      "round(45.8)",
      "round(6352.898,2,5)",
      "round()",
      "round(7463.123,2,1)"
    ]
  },
  {
    numb: 17,
    question: "What is the return type of function id?",
    answer: "int",
    options: [
      "int",
      "float",
      "bool",
      "dict"
    ]
  },
    {
    numb: 18,
    question: " Which of the following results in a SyntaxError?",
    answer: "‘3\’",
    options: [
      "‘”Once upon a time…”, she said.’",
      "“He said, ‘Yes!'”",
      "‘3\’",
      "”’That’s okay”’"
    ]
  },
  {
    numb: 19,
    question: " What arithmetic operators cannot be used with strings?",
    answer: "–",
    options: [
      "+",
      "*",
      "–",
      "All of the mentioned"
    ]
  },
    {
    numb: 20,
    question: ". How many except statements can a try-except block have?",
    answer: "more than one zero",
    options: [
      "zero",
      "one",
      "more than one",
      "more than one zero"
    ]
  },
  {
    numb: 21,
    question: " What does built-in function help do in context of classes?",
    answer: " Determines class description of any built-in type",
    options: [
      "Determines the object name of any value",
      "Determines the class identifiers of any value",
      "Determines class description of any built-in type",
      "Determines class description of any user-defined built-in type"
    ]
  },
    {
    numb: 22,
    question: "Which of the following is not a type of inheritance?",
    answer: "Double-level",
    options: [
      "Double-level",
      "Multi-level",
      "Single-level",
      "Multiple"
    ]
  },
  {
    numb: 23,
    question: "Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write?",
    answer: "A.__init__(self)",
    options: [
      "A.__init__(self)",
      "B.__init__(self)",
      "A.__init__(B)",
      "B.__init__(A)"
    ]
  },
    {
    numb: 24,
    question: " Which of the following statements is wrong about inheritance?",
    answer: "Private members of a class can be inherited and accessed",
    options: [
      "Protected members of a class can be inherited",
      "The inheriting class is called a subclass",
      "Private members of a class can be inherited and accessed",
      "Inheritance is one of the features of OOP"
    ]
  },
  {
    numb: 25,
    question: "Which of the following best describes inheritance?",
    answer: "Ability of a class to derive members of another class as a part of its own definition",
    options: [
      "Ability of a class to derive members of another class as a part of its own definition",
      "Means of bundling instance variables and methods in order to restrict access to certain class members",
      "Focuses on variables and passing of variables to functions",
      "Allows for implementation of elegant software that is well designed and easily modified"
    ]
  },
    {
    numb: 26,
    question: "Can one block of except statements handle multiple exception?",
    answer: "yes, like except TypeError, SyntaxError [,…]",
    options: [
      "yes, like except TypeError, SyntaxError [,…]",
      "yes, like except [TypeError, SyntaxError]",
      "no",
      "none of the mentioned"
      
    ]
  },
  {
    numb: 27,
    question: "When is the finally block executed?",
    answer: "always",
    options: [
      "when there is no exception",
      "when there is an exception",
      "only if some condition that has been specified is satisfied",
      "always"
    ]
  },
    {
    numb: 28,
    question: " When will the else part of try-except-else be executed?",
    answer: "when no exception occurs",
    options: [
      "always",
      "when an exception occurs",
      "when no exception occurs",
      "when an exception occurs in to except block"
    ]
  },
   {
    numb: 29,
    question: "_____ represents an entity in the real world with its identity and behaviour.",
    answer: "An object",
    options: [
      "A method",
      "An object",
      "A class",
      "An operato"
    ]
  },
  {
    numb: 30,
    question: "_____ is used to create an object.",
    answer: "constructor",
    options: [
      "class",
      "constructor",
      "User-defined functions",
      "In-built functions"
    ]
  },
  {
    numb: 31,
    question: "What is setattr() used for?",
    answer: "To set an attribute",
    options: [
      "To access the attribute of the object",
      "To set an attribute",
      "To check if an attribute exists or not",
      "To delete an attribute"
    ]
  },
  {
    numb: 32,
    question: "What is getattr() used for?",
    answer: "To access the attribute of the object",
    options: [
      "To access the attribute of the object",
      "To delete an attribute",
      "To check if an attribute exists or not",
      "To set an attribute"
    ]
  },
  {
    numb: 33,
    question: "To open a file c:\scores.txt for reading, we use _____________",
    answer: "infile = open(“c:\\scores.txt”, “r”)",
    options: [
      " infile = open(“c:\scores.txt”, “r”)",
      "infile = open(“c:\\scores.txt”, “r”)",
      "infile = open(file = “c:\scores.txt”, “r”)",
      "infile = open(file = “c:\\scores.txt”, “r”)"
    ]
  },
  {
    numb: 34,
    question: "Which of the following statements are true?",
    answer: "All of the mentioned",
    options: [
      "When you open a file for reading, if the file does not exist, an error occurs",
      "When you open a file for writing, if the file does not exist, a new file is created",
      "When you open a file for writing, if the file exists, the existing file is overwritten with the new file",
      "All of the mentioned"
    ]
  },
  {
    numb: 35,
    question: "To read two characters from a file object infile, we use ____________",
    answer: "infile.read(2)",
    options: [
      "infile.read(2)",
      "infile.read()",
      "infile.readline()",
      "infile.readlines()"
    ]
  },
  {
    numb: 36,
    question: "To read the entire remaining contents of the file as a string from a file object infile, we use ____________",
    answer: "infile.read()",
    options:[
      "infile.read(2)",
      "infile.read()",
      "infile.readline()",
      "infile.readlines()"
    ]
  },
  {
    numb: 37,
    question: " Which module in Python supports regular expressions?",
    answer: "re",
    options: [
      "re",
      "regex",
      "pyregex",
      "none of the mentioned"
    ]
  },
  {
    numb: 38,
    question: " Which of the following creates a pattern object?",
    answer: "re.compile(str)",
    options: [
      "re.create(str)",
      "re.regex(str)",
      "re.compile(str)",
      "re.assemble(str)"
    ]
  },
  {
    numb: 39,
    question: "What does the function re.match do?",
    answer: "matches a pattern at the start of the string",
    options: [
      "matches a pattern at the start of the string",
      "matches a pattern at any position in the string",
      "such a function does not exist",
      "none of the mentioned"
      
    ]
  },
  {
    numb: 40,
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
    numb: 41,
    question: "Which of the following is not an advantage of using modules?",
    answer: "Provides a means of reducing the size of the program",
    options: [
      "Provides a means of reuse of program code",
      "Provides a means of dividing up tasks",
      "Provides a means of reducing the size of the program",
      "Provides a means of testing individual parts of the program"
    ]
  },
  {
    numb: 42,
    question: "Program code making use of a given module is called a ______ of the module.",
    answer: "Client",
    options: [
      "Client",
      "Docstring",
      "Interface",
      "Modularity"
    ]
  },
  {
    numb: 43,
    question: "______ is a string literal denoted by triple quotes for providing the specifications of certain program elements.",
    answer: "Docstring",
    options: [
      "Interface",
      "Modularity",
      "Client",
      "Docstring"
    ]
  },
  {
    numb: 44,
    question: "Which of the following is true about top-down design process?",
    answer: "The overall design of the program is addressed before the details",
    options: [
      "The details of a program design are addressed before the overall design",
      "Only the details of the program are addressed",
      "The overall design of the program is addressed before the details",
      "Only the design of the program is addressed"
    ]
  },
  {
    numb: 45,
    question: "Which of the following is not a valid namespace?",
    answer: "Public namespace",
    options: [
      "Global namespace",
      "Public namespace",
      "Built-in namespace",
      "Local namespace"
    ]
  },
  {
    numb: 46,
    question: "What is the type of each element in sys.argv?",
    answer: "string",
    options: [
      "set",
      "list",
      "tuple",
      "string"
    ]
  },
  {
    numb: 47,
    question: "What is the length of sys.argv?",
    answer: "none of the mentioned",
    options: [
      "number of arguments",
      "number of arguments + 1",
      "number of arguments – 1",
      "none of the mentioned"
    ]
  },
  {
    numb: 48,
    question: "How are keyword arguments specified in the function heading?",
    answer: "two stars followed by a valid identifier",
    options: [
      "one-star followed by a valid identifier",
      "one underscore followed by a valid identifier",
      "two stars followed by a valid identifier",
      "two underscores followed by a valid identifier"
    ]
  },
  {
    numb: 49,
    question: "How many keyword arguments can be passed to a function in a single function call?",
    answer: "zero or more",
    options: [
      "zero",
      "one",
      "zero or more",
      "one or more"
    ]
  },
  {
    numb: 50,
    question: "Which of the following is the use of function in python? ",
    answer: "Functions are reusable pieces of programs",
    options: [
      "Functions are reusable pieces of programs",
      "Functions don’t provide better modularity for your application",
      "you can’t also create your own functions",
      "All of the mentioned"
    ]
  },
  {
    numb: 51,
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
    numb: 52,
    question: "Which of the following is a feature of DocString?",
    answer: "All of the mentioned",
    options: [
      "Provide a convenient way of associating documentation with Python modules, functions, classes, and methods",
      "All functions should have a docstring",
      "Docstrings can be accessed by the __doc__ attribute on objects",
      "All of the mentioned"
    ]
  },
  {
    numb: 53,
    question: "Which of the following functions is a built-in function in python?",
    answer: "print()",
    options: [
      "seed()",
      "sqrt()",
      "factorial()",
      "print()"
    ]
  },
  {
    numb: 54,
    question: " Which of the following statements create a dictionary?",
    answer: "All of the mentioned",
    options: [
      "= {}",
      "d = {“john”:40, “peter”:45}",
      "d = {40:”john”, 45:”peter”}",
      "All of the mentioned"
    ]
  },
  {
    numb: 55,
    question: "Suppose d = {“john”:40, “peter”:45}, to delete the entry for “john” what command do we use?",
    answer: "del d[“john”]",
    options: [
      "d.delete(“john”:40)",
      "d.delete(“john”)",
      "del d[“john”]",
      "del d(“john”:40)"
    ]
  },{
    numb: 56,
    question: "Suppose d = {“john”:40, “peter”:45}. To obtain the number of entries in dictionary which command do we use?",
    answer: "len(d)",
    options: [
      "d.size()",
      "len(d)",
      "size(d)",
      "d.len()"
    ]
  },
  {
    numb: 57,
    question: "Suppose d = {“john”:40, “peter”:45}, what happens when we try to retrieve a value using the expression d[“susan”]?",
    answer: "Since “susan” is not a key in the set, Python raises a KeyError exception",
    options: [
      "Since “susan” is not a value in the set, Python raises a KeyError exception",
      "It is executed fine and no exception is raised, and it returns None",
      "Since “susan” is not a key in the set, Python raises a KeyError exception",
      "Since “susan” is not a key in the set, Python raises a syntax error"
    ]
  },
  {
    numb: 58,
    question: "Which of these about a set is not true?",
    answer: "Immutable data type",
    options: [
      "Mutable data type",
      "Allows duplicate values",
      "Data type with unordered values",
      "Immutable data type"
    ]
  },
  {
    numb: 59,
    question: "Which of the following is not the correct syntax for creating a set?",
    answer: "set([[1,2],[3,4]])",
    options: [
      "set([[1,2],[3,4]])",
      "set([1,2,2,3,4])",
      "((1,2,3,4))",
      "{1,2,3,4}"
    ]
  },
  {
    numb: 60,
    question: "Which of the following statements is used to create an empty set? ",
    answer: "set()",
    options: [
      " { }",
      "set()",
      "[ ]",
      "( )"
    ]
  }, 
]