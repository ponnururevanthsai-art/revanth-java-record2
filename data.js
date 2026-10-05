const R=String.raw;
const PROFILE={name:"P. Revanth Sai",info:[["Roll No","25EU02112"],["Year","II"],["Branch","AI&ML"],["Section","B"],["Subject","Java Programming"]]};
const HOME={title:"Code. Compile. Run.",sub:"My Java Programming lab record, week by week, with every program, source code and output."};
const mk=(t,c,o)=>({t,c:c.trim(),o:o.trim()});
const WEEKS=[
{n:1,title:"Comparative Table",note:"Comparison of Java, C, C++, Python and JavaScript",progs:[],
table:[["Feature","Java","C","C++","Python","JavaScript"],
["Paradigm","Object-oriented","Procedural","Procedural + OOP","Multi-paradigm","Multi-paradigm, event-driven"],
["Typing","Static, strong","Static, weak","Static, strong","Dynamic, strong","Dynamic, weak"],
["Execution","Compiled to bytecode, run on JVM","Compiled to machine code","Compiled to machine code","Interpreted","Interpreted / JIT in browser"],
["Platform independence","Yes (WORA)","No","No","Yes","Yes"],
["Memory management","Automatic (Garbage Collector)","Manual","Manual","Automatic","Automatic"],
["Pointers","No explicit pointers","Yes","Yes","No","No"],
["Multiple inheritance","Via interfaces only","Not applicable","Supported","Supported","Via prototypes/mixins"],
["Speed","Fast","Fastest","Very fast","Slower","Moderate"],
["File extension",".java / .class",".c",".cpp",".py",".js"],
["Typical use","Enterprise, Android, web backend","OS, embedded systems","Games, system software","AI/ML, scripting, data science","Web front-end and back-end"]]},
{n:2,title:"JDK Installation",progs:[
{t:"Oracle JDK Installation on Windows",steps:["Open the Oracle Java downloads page and download the Windows x64 Installer (.exe).","Run the installer and click <b>Next</b> through the setup, keeping the default path <code>C:\\Program Files\\Java\\jdk-21</code>.","Open <b>Environment Variables</b> and create <code>JAVA_HOME</code> = the JDK install path.","Edit <code>Path</code> and add <code>%JAVA_HOME%\\bin</code>.","Open a new Command Prompt and verify with <code>java -version</code> and <code>javac -version</code>."],o:R`C:\> java -version
java version "21.0.2" 2024-01-16 LTS
Java(TM) SE Runtime Environment (build 21.0.2+13-LTS-58)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.2+13-LTS-58, mixed mode, sharing)

C:\> javac -version
javac 21.0.2`},
{t:"OpenJDK Installation on Windows",steps:["Download the OpenJDK Windows x64 zip (for example from jdk.java.net or Adoptium).","Extract it to <code>C:\\Program Files\\OpenJDK\\jdk-21</code>.","Set <code>JAVA_HOME</code> to the extracted folder.","Add <code>%JAVA_HOME%\\bin</code> to the system <code>Path</code>.","Open a new Command Prompt and run <code>java -version</code> to verify."],o:R`C:\> java -version
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment (build 21.0.2+13-67)
OpenJDK 64-Bit Server VM (build 21.0.2+13-67, mixed mode, sharing)`}]},
{n:3,title:"Java Basics",progs:[
mk("Display \"Hello, Java!\" and show the basic structure of a Java program",R`// Basic structure: class, main method, statement
public class P1 {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,"Hello, Java!"),
mk("Declare byte, short, int, long, float, double, char and boolean variables and display them",R`public class P2 {
    public static void main(String[] args) {
        byte b = 100; short s = 20000; int i = 100000; long l = 9876543210L;
        float f = 5.75f; double d = 19.99; char c = 'J'; boolean flag = true;
        System.out.println("byte    : " + b);
        System.out.println("short   : " + s);
        System.out.println("int     : " + i);
        System.out.println("long    : " + l);
        System.out.println("float   : " + f);
        System.out.println("double  : " + d);
        System.out.println("char    : " + c);
        System.out.println("boolean : " + flag);
    }
}`,R`byte    : 100
short   : 20000
int     : 100000
long    : 9876543210
float   : 5.75
double  : 19.99
char    : J
boolean : true`),
mk("Arithmetic operations on two integers",R`public class P3 {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
        System.out.println("Modulus        : " + (a % b));
    }
}`,R`Addition       : 26
Subtraction    : 14
Multiplication : 120
Division       : 3
Modulus        : 2`),
mk("Arithmetic operations on floating-point numbers",R`public class P4 {
    public static void main(String[] args) {
        double x = 7.5, y = 2.5;
        System.out.println("Addition       : " + (x + y));
        System.out.println("Subtraction    : " + (x - y));
        System.out.println("Multiplication : " + (x * y));
        System.out.println("Division       : " + (x / y));
    }
}`,R`Addition       : 10.0
Subtraction    : 5.0
Multiplication : 18.75
Division       : 3.0`),
mk("Character data type with its ASCII/Unicode value",R`public class P5 {
    public static void main(String[] args) {
        char ch = 'A';
        System.out.println("Character     : " + ch);
        System.out.println("ASCII/Unicode : " + (int) ch);
    }
}`,R`Character     : A
ASCII/Unicode : 65`),
mk("Boolean variables and expressions using relational operators",R`public class P6 {
    public static void main(String[] args) {
        int a = 10, b = 20;
        boolean isTrue = true;
        System.out.println("isTrue : " + isTrue);
        System.out.println("a > b  : " + (a > b));
        System.out.println("a < b  : " + (a < b));
        System.out.println("a >= b : " + (a >= b));
        System.out.println("a <= b : " + (a <= b));
        System.out.println("a == b : " + (a == b));
        System.out.println("a != b : " + (a != b));
    }
}`,R`isTrue : true
a > b  : false
a < b  : true
a >= b : false
a <= b : true
a == b : false
a != b : true`),
mk("Declare and initialize different types of variables",R`public class P7 {
    public static void main(String[] args) {
        int age = 19; double cgpa = 8.75; char grade = 'A';
        boolean passed = true; String name = "Revanth";
        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("CGPA   : " + cgpa);
        System.out.println("Grade  : " + grade);
        System.out.println("Passed : " + passed);
    }
}`,R`Name   : Revanth
Age    : 19
CGPA   : 8.75
Grade  : A
Passed : true`),
mk("Swap two variables using a temporary variable",R`public class P8 {
    public static void main(String[] args) {
        int a = 10, b = 25, temp;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        temp = a; a = b; b = temp;
        System.out.println("After swap : a = " + a + ", b = " + b);
    }
}`,R`Before swap: a = 10, b = 25
After swap : a = 25, b = 10`),
mk("Widening type conversion",R`public class P9 {
    public static void main(String[] args) {
        int i = 100;
        long l = i;      // int -> long
        float f = l;     // long -> float
        double d = f;    // float -> double
        System.out.println("int    : " + i);
        System.out.println("long   : " + l);
        System.out.println("float  : " + f);
        System.out.println("double : " + d);
    }
}`,R`int    : 100
long   : 100
float  : 100.0
double : 100.0`),
mk("Narrowing type casting",R`public class P10 {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d;     // double -> int
        byte b = (byte) i;   // int -> byte
        System.out.println("double : " + d);
        System.out.println("int    : " + i);
        System.out.println("byte   : " + b);
    }
}`,R`double : 9.78
int    : 9
byte   : 9`),
mk("Character and ASCII conversion",R`public class P11 {
    public static void main(String[] args) {
        char ch = 'a';
        int code = 100;
        System.out.println("ASCII of '" + ch + "'   : " + (int) ch);
        System.out.println("Character of " + code + " : " + (char) code);
    }
}`,R`ASCII of 'a'   : 97
Character of 100 : d`),
mk("Check whether a number is even or odd",R`public class P12 {
    public static void main(String[] args) {
        int num = 7;
        if (num % 2 == 0)
            System.out.println(num + " is Even");
        else
            System.out.println(num + " is Odd");
    }
}`,"7 is Odd"),
mk("Find the largest of two numbers",R`public class P13 {
    public static void main(String[] args) {
        int a = 45, b = 78;
        int max = (a > b) ? a : b;
        System.out.println("Largest of " + a + " and " + b + " is " + max);
    }
}`,"Largest of 45 and 78 is 78"),
mk("Reserved keywords in Java",R`// Program using several reserved keywords:
// public, class, static, void, int, if, else, for, return, final
public class P14 {
    static final int LIMIT = 3;
    public static void main(String[] args) {
        for (int i = 1; i <= LIMIT; i++) {
            if (i % 2 == 0) System.out.println(i + " even");
            else System.out.println(i + " odd");
        }
        return;
    }
}`,R`1 odd
2 even
3 odd`),
mk("for loop to print numbers 1 to 10",R`public class P15 {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
    }
}`,"1 2 3 4 5 6 7 8 9 10")]},
{n:4,title:"No Programming Task",note:"No programming task was assigned this week.",progs:[]},
{n:5,title:"No Programming Task",note:"No programming task was assigned this week.",progs:[]},
{n:6,title:"Classes, Objects & Constructors",progs:[]},
{n:7,title:"Strings & Inheritance",progs:[]},
{n:8,title:"Inheritance & Polymorphism",progs:[]},
{n:9,title:"Packages & Interfaces",progs:[]}
];
