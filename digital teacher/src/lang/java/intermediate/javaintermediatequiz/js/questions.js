// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is not an OOPS concept?",
    answer: "Exception",
    options: [
      "Encapsulation", 
      "Polymorphism", 
      "Exception", 
      "Abstraction"

    ]
  },
    {
    numb: 2,
    question: "Which feature of OOPS described the reusability of code?",
    answer: "Inheritance",
    options: [
      "Abstraction", 
      "Encapsulation", 
      "Polymorphism", 
      "Inheritance"

    ]
  },
    {
    numb: 3,
    question: "Which feature of OOPS derives the class from another class?",
    answer: "Inheritance",
    options: [
      "Inheritance", 
      "Data hiding", 
      "Encapsulation", 
      "Polymorphism"
      
    ]
  },
    {
    numb: 4,
    question: "Define the programming language, which does not support all four types of inheritance?",
    answer: "Java",
    options: [
      "Smalltalk", 
      "Kotlin", 
      "Java", 
      "C++"
      
    ]
  },
    {
    numb: 5,
    question: "A single program of OOPS contains _______ classes?",
    answer: "Any number",
    options: [
      "Only 1", 
      "Only 999", 
      "Only 100", 
      "Any number"
      
    ]
  },
    {
    numb: 6,
    question: "Which operator from the following can be used to illustrate the feature of polymorphism?",
    answer: "Overloading <<",
    options: [
      "Overloading <<", 
      "Overloading &&", 
      "Overloading ||", 
      "Overloading +="
      
     ]
   }, 
     {
    numb: 7,
    question: "Which two features of object-oriented programming are the same?",
    answer: "Encapsulation and Abstraction",
    options: [
      "Abstraction and Polymorphism features are the same", 
      "Inheritance and Encapsulation features are the same", 
      "Encapsulation and Polymorphism features are the same", 
      "Encapsulation and Abstraction"
      
     ]
   }, 
     {
    numb: 8,
    question: "Which of the following definition is incorrect for polymorphism?",
    answer: "It always increases the overhead of function definition",
    options: [
      "Polymorphism helps in redefining the same functionality", 
      "Polymorphism concept is the feature of object-oriented programming (OOP)", 
      "It always increases the overhead of function definition", 
      "Ease in the readability of the program"
      
     ]
   }, 
     {
    numb: 9,
    question: "Which among the following cannot be used for the concept of polymorphism?",
    answer: "Static member function",
    options: [
      "Static member function", 
      "Constructor Overloading", 
      "Member function overloading", 
      "Global member function"
      
     ]
   }, 
     {
    numb: 10,
    question: "Which function best describe the concept of polymorphism in programming languages?",
    answer: "Virtual function",
    options: [
      "Class member function", 
      "Virtual function", 
      "Inline function", 
      "Undefined function"
      
     ]
   }, 
      {
    numb: 11,
    question: "Which member of the superclass is never accessible to the subclass?",
    answer: "Private member",
    options: [
      "Public member", 
      "Protected member", 
      "Private member", 
      "All of the mentioned"
      
     ]
   }, 
     {
    numb: 12,
    question: "Which class cannot create its instance?",
    answer: "Abstract class",
    options: [
      "Parent class", 
      "Nested class", 
      "Anonymous class", 
      "Abstract class"
      
     ]
   }, 
     {
    numb: 13,
    question: "Which of the following variable violates the definition of encapsulation?",
    answer: "Global variables",
    options: [
      "Array variables", 
      "Local variables", 
      "Global variables", 
      "Public variables"
      
     ]
   }, 
     {
    numb: 14,
    question: "The concept of encapsulation helps in writing which type of classes in the Java programming language?",
    answer: "Immutable classes",
    options: [
      "Abstract classes", 
      "Wrapper classes", 
      "Mutable classes", 
      "Immutable classes"
      
     ]
   }, 
     {
    numb: 15,
    question: "Which of the following statement of a program is not right?",
    answer: "class teacher{ }s[];",
    options: [
      "class teacher{ }; teacher s[5];", 
      "class teacher{ }s[];", 
      "class teacher{ }; teacher s;", 
      "class teacher{ }s;"
      
     ]
   }, 
      {
    numb: 16,
    question: "Which method returns the elements of Enum class?",
    answer: "getEnumConstants()",
    options: [
      "getEnums()", 
      "getEnumList()", 
      "getEnumConstants()", 
      "getEnum()"
      
     ]
   }, 
      {
    numb: 17,
    question: "Which class does all the Enums extend?",
    answer: "Enum",
    options: [
      "Object", 
      "EnumClass", 
      "Enums", 
      "Enum"
      
     ]
   }, 
      {
    numb: 18,
    question: "What is the order of variables in Enum?",
    answer: "Ascending order",
    options: [
      "Ascending order", 
      "Descending order", 
      "Random order", 
      "Depends on the order() method"
      
     ]
   }, 
      {
    numb: 19,
    question: "The principle of abstraction",
    answer: "is used to avoid duplication",
    options: [
      "is used to achieve OOPS.", 
      "is used to remove longer codes", 
      "Use abstraction at its minimum", 
      "is used to avoid duplication"
      
     ]
   }, 
      {
    numb: 20,
    question: "Which of the following is a type of polymorphism in Java Programming?",
    answer: "Compile time polymorphism",
    options: [
      "Multiple polymorphism",
      "Compile time polymorphism",
      "Multilevel polymorphism",
      "Execution time polymorphism"
     ]
   }, 
      {
    numb: 21,
    question: "What is true about constructor",
    answer: "It can take any number of parameters",
    options: [
      "It can take any number of parameters",
      "It can contain return type",
      "It can have any non access modifiers",
      "Constructor cannot throw an exception"
     ]
   }, 
      {
    numb: 22,
    question: "Which is the most restrictive access modifier in Java?",
    answer: "private",
    options: [
      "public",
      "protected",
      "private",
      "default"
     ]
   }, 
      {
    numb: 23,
    question: "Which of these packages contains the exception Stack Overflow in Java?",
    answer: "java.lang",
    options: [
      "java.io",
      "java.system",
      "java.util",
      "java.lang"
     ]
   }, 
      {
    numb: 24,
    question: "Which of these keywords is used to define packages in Java?",
    answer: "package",
    options: [
      "package",
      "Pkg",
      "pkg",
      "Package"
     ]
   }, 
      {
    numb: 25,
    question: "What is the numerical range of a char data type in Java?",
    answer: "0 to 65535",
    options: [
      "0 to 256",
      "-128 to 127",
      "0 to 65535",
      "0 to 32767"
     ]
   }, 
];