// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who invented Java Programming?",
    answer: "James Gosling",
    options: [
      "Guido van Rossum",
      "James Gosling",
      "Dennis Ritchie",
      "Bjarne Stroustrup"
    ]
  },
    {
    numb: 2,
    question: "Which of the following language was developed as the first purely object programming language?",
    answer: "SmallTalk",
    options: [
      "SmallTalk",
      "C++",
      "Kotlin",
      "Java"
    ]
  },
    {
    numb: 3,
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
    numb: 4,
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
    numb: 5,
    question: "What is the significance of Matcher class for regular expression in java?",
    answer: "interpreted both pattern and performs match operations in the string",
    options: [
       "interpretes pattern in the string",
       "Performs match in the string",
       "interpreted both pattern and performs match operations in the string",
       "None of the mentioned"
    ]
  },
    {
    numb: 6,
    question: "Which statement is true about Java?",
    answer: "Java is a sequence-dependent programming languag",
    options: [
      "Java is a sequence-dependent programming language",
      "Java is a code dependent programming language",
      "Java is a platform-dependent programming language",
      "Java is a platform-independent programming languaged"
     ]
   }, 
     {
    numb: 7,
    question: "Choose the correct statement about Java main method",
    answer: "All the above",
    options: [
      "The main method is not a required method",
      "The main method must be declared public static void",
      "you can define program flow using the main method. The Java virtual machine calls the main method directly",
      "All the above"
     ]
   }, 
     {
    numb: 8,
    question: "What is the return type of the hashcode() method in the Object class?",
    answer: "int",
    options: [
      "Object",
      "int",
      "long",
      "void"
     ]
   }, 
     {
    numb: 9,
    question: "How does one identify if a compilation unit is an interface or class from a .class file?",
    answer: "Java source file header",
    options: [
      "Extension of the compilation unit",
      "Java source file header",
      "The class and interface cannot be differentiated",
      "The unit type must be used to postfix interface or class name"
     ]
   }, 
     {
    numb: 10,
    question: "Evaluate the following Java expression,if x=3,y=5,and z=10: ++z+y-y+z+x++",
    answer: "25",
    options: [
      "24",
      "23",
      "20",
      "25"
     ]
   }, 
      {
    numb: 11,
    question: " Out of these methods of the String class, which one can be used for testing the strings for equality?",
    answer: "equals()",
    options: [
      "isequals()",
      "isequal()",     
      "equals()",
      "equal()"
     ]
   }, 
     {
    numb: 12,
    question: "Which of the following operators are used to compare two values and give the results",
    answer: "Comparison",
    options: [
      "Increment and Decrement",
      "Logical",
      "Comparison",
      "Arithmetic"
     ]
   }, 
     {
    numb: 13,
    question: "Which of the following method can be used to set the size of the buffer",
    answer: "ensureCapacity( )",
    options: [
      "ensureCapacity( )",
      "length( )",
      "capacity( )",
      "setLength( )"
     ]
   }, 
     {
    numb: 14,
    question: "Which of the following method returns the reversed object on which it is called",
    answer: "reverse( )",
    options: [
      "insert( )",
      "replace( )",
      "delete( )",
      "reverse( )"
     ]
   }, 
     {
    numb: 15,
    question: "Method used to extract a single character from a String",
    answer: "charAt( )",
    options: [
      "toCharArray( )",
      "getChars( )",
      "getBytes( )",
      "charAt( )"
     ]
   }, 
      {
    numb: 16,
    question: "Which is the keyword used to specify the DEFAULT access modifier in java?",
    answer: "There is no keyword",
    options: [
      "default",
      "bydefault",
      "normal",
      "There is no keyword"
     ]
   }, 
      {
    numb: 17,
    question: "Which is the most restrictive access modifier in Java?",
    answer: "private",
    options: [
      "public",
      "private",
      "protected",
      "default"
     ]
   }, 
      {
    numb: 18,
    question: " The ___ statement takes an object of an exception class as a parameter",
    answer: "catch",
    options: [
      "try",
      "if",
      "catch",
      "finally"
     ]
   }, 
      {
    numb: 19,
    question: "The languages that support classes but not polymorphism is called?",
    answer: "Object-based language",
    options: [
      "child Class-based language",
      "Class-based language",
      "Object-based language",
      "ocedure Oriented language"
     ]
   }, 
      {
    numb: 20,
    question: "Which of these class can generate an array which can increase and decrease in size automatically?",
    answer: "ArrayList()",
    options: [
      "ArrayList()",
      "DynamicList()",
      "LinkedList()",
      "MallocList()"
     ]
   }, 
      {
    numb: 21,
    question: " Which of these method can be used to increase the capacity of ArrayList object manually?",
    answer: "ensureCapacity()",
    options: [
      "Capacity()",
      "increaseCapacity()",
      "increasecapacity()",
      "ensureCapacity()"
     ]
   }, 
      {
    numb: 22,
    question: "In Java, the underlying data structure for the LinkedList class is?",
    answer: "Doubly linked list",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "None of these"
     ]
   }, 
      {
    numb: 23,
    question: "LinkedList class implements?",
    answer: "Both (a) and (b)",
    options: [
      "List interface",
      "Deque interface",
      "Both (a) and (b)",
      "None of these"
     ]
   }, 
      {
    numb: 24,
    question: "Which of the below does not implement Map interface",
    answer: "Vector",
    options: [
      "HashMap",
      "Hashtable",
      "EnumMap",
      "Vector"
     ]
   }, 
      {
    numb: 25,
    question: "What is the premise of equality for IdentityHashMap?",
    answer: "Reference equality",
    options: [
      "Reference equality",
      "Name equality",
      "ashcode equality",
      "Length equality"
     ]
   }, 
      {
    numb: 26,
    question: "If two threads access the same hashmap at the same time, what would happen?",
    answer: "ConcurrentModificationException",
    options: [
      "ConcurrentModificationException",
      "NullPointerException",
      "ClassNotFoundException",
      "RuntimeException"
     ]
   }, 
     {
    numb: 27,
    question: " If large number of items are stored in hash bucket, what happens to the internal structure?",
    answer: "The bucket will increase its size by a factor of load size defined",
    options: [
      "The bucket will switch from LinkedList to BalancedTree",
      "The bucket will increase its size by a factor of load size defined",
      "The LinkedList will be replaced by another hashmap",
      "Any further addition throws Overflow exception"
     ]
   }, 
     {
    numb: 28,
    question: "What is the default clone of HashSet?",
    answer: "Shallow clone",
    options: [
      "Deep clone",
      "Shallow clone",
      "Plain clone",
      "Hollow clone"
     ]
   }, 
     {
    numb: 29,
    question: " What does Collections.emptySet() return?",
    answer: "Mutable Set",
    options: [
      "Immutable Set",
      "Mutable Set",
      "The type of Set depends on the parameter passed to the emptySet() method",
      "Null object"
     ]
   }, 
     {
    numb: 30,
    question: "What is the relation between hashset and hashmap?",
    answer: "HashMap is the interface; HashSet is the concrete class",
    options: [
      "HashSet internally implements HashMap",
      "HashMap internally implements HashSet",
      "HashMap is the interface; HashSet is the concrete class",
      "HashSet is the interface; HashMap is the concrete class"
     ]
   }, 
     {
    numb: 31,
    question: " What is the difference between TreeSet and SortedSet?",
    answer: "SortedSet is an interface; TreeSet is a concrete class",
    options: [
      "TreeSet is more efficient than SortedSet",
      "ortedSet is more efficient than TreeSet",
      "TreeSet is an interface; SortedSet is a concrete class",
      "SortedSet is an interface; TreeSet is a concrete class"
     ]
   }, 
     {
    numb: 32,
    question: "What is the unique feature of LinkedHashSet?",
    answer: "It maintains the insertion order and guarantees uniqueness",
    options: [
      " It is not a valid class",
      "It maintains the insertion order and guarantees uniqueness",
      "It provides a way to store key values with uniqueness",
      "The elements in the collection are linked to each other"
     ]
   }, 
     {
    numb: 33,
    question: "Which of these return type of hasNext() method of an iterator?",
    answer: "Boolean",
    options: [
      "Integer",
      "Double",
      "Boolean",
      "Collections Object"
     ]
   }, 
     {
    numb: 34,
    question: "Which of these methods is used to obtain an iterator to the start of collection?",
    answer: "iterator()",
    options: [
      "start()",
      "begin()",
      "iteratorSet()",
      "iterator()"
      
     ]
   }, 
     {
    numb: 35,
    question: " Which of these methods can be used to move to next element in a collection?",
    answer: "next()",
    options: [
      "next()",
      "move()",
      "shuffle()",
      "hasNext()"
      
     ]
   }, 
   {
    numb: 36,
    question: "Which of these is a method of ListIterator used to obtain index of previous element?",
    answer: "previousIndex()",
    options: [
      "previous()",
      "previousIndex()",
      "back()",
      "goBack()"
     ]
   }, 
   {
    numb: 37,
    question: ". What is the use of try & catch?",
    answer: "All of the mentioned",
    options: [
      "It allows us to manually handle the exception",
      "It allows to fix errors",
      "It prevents automatic terminating of the program in cases when an exception occurs",
      "All of the mentioned"
     ]
   }, 
   {
    numb: 38,
    question: "Which of these keywords are used for the block to be examined for exceptions",
    answer: "try",
    options: [
      "try",
      "catch",
      "throw",
      "check"
      
     ]
   }, 
   {
    numb: 39,
    question: " Which of these keywords are used for the block to handle the exceptions generated by try block?",
    answer: "catch",
    options: [
      "try",
      "catch",
      "throw",
      "check"
     ]
   }, 
   {
    numb: 40,
    question: "Which of these statements is incorrect?",
    answer: "try need not to be followed by anything",
    options: [
      "try block need not to be followed by catch block",
      "try block can be followed by finally block instead of catch block",
      "try can be followed by both catch and finally block",
      "try need not to be followed by anything"
     ]
   }, 
   {
    numb: 41,
    question: "Which Scanner class method is used to read string value from the user?",
    answer: "Both 1 and 3",
    options: [
      "next()",
      "nextString()",
      "nextLine()",
      "Both 1 and 3"
     ] 
    },
    {
      numb: 42,
      question: "Which is the correct syntax to declare Scanner class object?",
      answer: "Scanner objectName= new Scanner(System.in);",
      options: [
        "Scanner objectName= Scanner();",
        "Scanner objectName= new Scanner();",
        "Scanner objectName= Scanner(System.in);",
        "Scanner objectName= new Scanner(System.in);"
       ] 
    },
    {
      numb: 43,
      question: "Consider the following object declaration statement Scanner objectName= new Scanner(System.in); What is System.in in this declaration?",
      answer: "Reference to Input stream",
      options: [
        "Class which point input device",
        "Reference to Input stream",
        "Reference to Computer System",
        "None of these"
       ] 
    },
    {
      numb: 44,
      question: "This set of Java Multiple Choice Questions & Answers (MCQs) focuses on “Data Structures-Enums",
      answer: "Ascending order",
      options: [
        "Ascending order",
        "Descending order",
        "Random order",
        "Depends on the order() method"
       ] 
    },
    {
      numb: 45,
      question: "If we try to add Enum constants to a TreeSet, what sorting order will it use? ",
      answetr: "Sorted in the order of declaration of Enums",
      options: [
        "Sorted in the order of declaration of Enums",
        "Sorted in alphabetical order of Enums",
        "Sorted based on order() method",
        "Sorted in descending order of names of Enums"
       ] 
    },
    {
      numb: 46,
      question: "Which method returns the elements of Enum class?",
      answer: "getEnumConstants()",
      options: [
        "getEnums()",
        "getEnumConstants()",
        "getEnumList()",
        "getEnum()"
       ] 
    },
    {
      numb: 47,
      question: "Which class does all the Enums extend?",
      answer: "Enum",
      options: [
        "Object",
        "Enums",
        "Enum",
        "EnumClass"
       ] 
    },
    {
      numb: 48,
      question: "How to format date from one form to another?",
      answer: "SimpleDateFormat",
      options: [
        "SimpleDateFormat",
        "DateFormat",
        "SimpleFormat",
        "DateConverter"
       ] 
    },
    {
      numb: 50,
      question: " How to identify if a timezone is eligible for DayLight Saving?",
      answer: "useDaylightTime() of TimeZone class",
      options: [
        "useDaylightTime() of Time class",
        "useDaylightTime() of Date class",
        "useDaylightTime() of TimeZone class",
        "useDaylightTime() of DateTime class"
       ] 
    },
    {
      numb: 51,
      question: "What is the replacement of joda time library in java 8?",
      answer: "java.time (JSR-310)",
      options: [
        "java.time (JSR-310)",
        "java.date (JSR-310)",
        "java.joda",
        "java.jodaTime"
       ] 
    },
    {
      numb: 52,
      question: "How is Date stored in database?",
      answer: "java.sql.Date",
      options: [
        "java.sql.Date",
        "java.util.Date",
        "java.sql.DateTime",
        "java.util.DateTime"
       ] 
    },
    {
      numb: 53,
      question: "What does LocalTime represent?",
      answer: "Time without Date",
      options: [
        "Date without time",
        "Time without Date",
        "Date and Time",
        "Date and Time with timezone"
       ] 
    },
    {
      numb: 54,
      question: "How to get UTC time?",
      answer: "Instant.now();",
      options: [
        "Time.getUTC();",
        "Date.getUTC();",
        "Instant.now();",
        "TimeZone.getUTC();"
       ] 
    },
    {
      numb: 55,
      question: " Which of these is a wrapper for data type int?",
      answer: "Integer",
      options: [
        "Integer",
        "Long",
        "Byte",
        "Double"
       ] 
    },
    {
      numb: 56,
      question: "Which of the following methods is a method of wrapper Integer for obtaining hash code for the invoking object?",
      answer: "int hashCode()",
      options: [
        "int hash()",
        "int hashcode()",
        "int hashCode()",
        "Integer hashcode()"
       ] 
    },
    {
      numb: 57,
      question: "Which of these is a super class of wrappers Long, Character & Integer?",
      answer:"Number",
      options: [
        "Long",
        "Digits",
        "Float",
        "Number"
       ] 
    },
    {
      numb: 58,
      question: " Which of these is a wrapper for simple data type char?",
      answer: "Character",
      options: [
        "Float",
        "Character",
        "String",
        "Integer"
       ] 
    },
    {
      numb: 59,
      question: "Which of the following is method of wrapper Integer for converting the value of an object into int?",
      answer: "int intValue();",
      options: [
        " bytevalue()",
        "int intValue();",
        "Bytevalue()",
        "Byte Bytevalue()"
       ] 
    },
    {
      numb: 60,
      question: "Which of these methods is used to obtain value of invoking object as a long?",
      answer: "long longValue()",
      options: [
        "long value()",
        "long longValue()",
        "Long longvalue()",
        "Long Longvalue()"
       ] 
    },
  ];