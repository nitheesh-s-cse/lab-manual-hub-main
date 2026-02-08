export interface Program {
  id: string;
  number: number;
  title: string;
  problemStatement: string;
  algorithm: string[];
  code: string;
  sampleIO?: {
    input?: string;
    output: string;
  };
}

export const programs: Program[] = [
  {
    id: "program-1",
    number: 1,
    title: "Hello World Program",
    problemStatement:
      "Write a C program to display 'Hello, World!' on the screen.",
    algorithm: [
      "Start",
      "Include the standard input-output header file",
      "Define the main function",
      "Use printf() to display 'Hello, World!'",
      "Return 0 to indicate successful execution",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    sampleIO: {
      output: "Hello, World!",
    },
  },
  {
    id: "program-2",
    number: 2,
    title: "Addition of Two Numbers",
    problemStatement:
      "Write a C program to read two integers from the user and display their sum.",
    algorithm: [
      "Start",
      "Declare three integer variables: num1, num2, sum",
      "Read the first number from user into num1",
      "Read the second number from user into num2",
      "Calculate sum = num1 + num2",
      "Display the sum",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    
    printf("Sum = %d\\n", sum);
    
    return 0;
}`,
    sampleIO: {
      input: "Enter first number: 10\nEnter second number: 20",
      output: "Sum = 30",
    },
  },
  {
    id: "program-3",
    number: 3,
    title: "Check Even or Odd",
    problemStatement:
      "Write a C program to check whether a given integer is even or odd.",
    algorithm: [
      "Start",
      "Declare an integer variable num",
      "Read the number from user",
      "If num % 2 == 0, then number is Even",
      "Else number is Odd",
      "Display the result",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num;
    
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    if (num % 2 == 0) {
        printf("%d is Even\\n", num);
    } else {
        printf("%d is Odd\\n", num);
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter an integer: 7",
      output: "7 is Odd",
    },
  },
  {
    id: "program-4",
    number: 4,
    title: "Factorial of a Number",
    problemStatement:
      "Write a C program to calculate the factorial of a given positive integer.",
    algorithm: [
      "Start",
      "Declare variables: num, i, factorial = 1",
      "Read the number from user",
      "If num < 0, display error message",
      "Else, use a for loop from 1 to num",
      "In each iteration, multiply factorial by i",
      "Display the factorial",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num, i;
    unsigned long long factorial = 1;
    
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    if (num < 0) {
        printf("Error: Factorial is not defined for negative numbers.\\n");
    } else {
        for (i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        printf("Factorial of %d = %llu\\n", num, factorial);
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter a positive integer: 5",
      output: "Factorial of 5 = 120",
    },
  },
  {
    id: "program-5",
    number: 5,
    title: "Fibonacci Series",
    problemStatement:
      "Write a C program to generate the Fibonacci series up to n terms.",
    algorithm: [
      "Start",
      "Declare variables: n, first = 0, second = 1, next, i",
      "Read the number of terms (n) from user",
      "Display first and second if n >= 1 and n >= 2 respectively",
      "Use a for loop from 3 to n",
      "Calculate next = first + second",
      "Update first = second, second = next",
      "Display next",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int n, i;
    int first = 0, second = 1, next;
    
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci Series: ");
    
    for (i = 1; i <= n; i++) {
        if (i == 1) {
            printf("%d ", first);
            continue;
        }
        if (i == 2) {
            printf("%d ", second);
            continue;
        }
        next = first + second;
        first = second;
        second = next;
        printf("%d ", next);
    }
    
    printf("\\n");
    return 0;
}`,
    sampleIO: {
      input: "Enter the number of terms: 10",
      output: "Fibonacci Series: 0 1 1 2 3 5 8 13 21 34",
    },
  },
  {
    id: "program-6",
    number: 6,
    title: "Prime Number Check",
    problemStatement:
      "Write a C program to check whether a given number is prime or not.",
    algorithm: [
      "Start",
      "Declare variables: num, i, isPrime = 1",
      "Read the number from user",
      "If num <= 1, it is not prime",
      "Else, loop from 2 to num/2",
      "If num is divisible by any i, set isPrime = 0 and break",
      "If isPrime is 1, number is prime, else not prime",
      "Display the result",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num, i, isPrime = 1;
    
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    if (num <= 1) {
        isPrime = 0;
    } else {
        for (i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                isPrime = 0;
                break;
            }
        }
    }
    
    if (isPrime == 1) {
        printf("%d is a Prime number.\\n", num);
    } else {
        printf("%d is not a Prime number.\\n", num);
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter a positive integer: 17",
      output: "17 is a Prime number.",
    },
  },
  {
    id: "program-7",
    number: 7,
    title: "Reverse a Number",
    problemStatement:
      "Write a C program to reverse a given integer number.",
    algorithm: [
      "Start",
      "Declare variables: num, reversed = 0, remainder",
      "Read the number from user",
      "While num is not 0:",
      "  remainder = num % 10",
      "  reversed = reversed * 10 + remainder",
      "  num = num / 10",
      "Display the reversed number",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num, reversed = 0, remainder;
    
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    int original = num;
    
    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = num / 10;
    }
    
    printf("Reversed number of %d is %d\\n", original, reversed);
    
    return 0;
}`,
    sampleIO: {
      input: "Enter an integer: 12345",
      output: "Reversed number of 12345 is 54321",
    },
  },
  {
    id: "program-8",
    number: 8,
    title: "Palindrome Number Check",
    problemStatement:
      "Write a C program to check whether a given number is a palindrome.",
    algorithm: [
      "Start",
      "Declare variables: num, original, reversed = 0, remainder",
      "Read the number from user",
      "Store original value: original = num",
      "While num is not 0:",
      "  remainder = num % 10",
      "  reversed = reversed * 10 + remainder",
      "  num = num / 10",
      "If original == reversed, number is palindrome",
      "Else, number is not palindrome",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num, original, reversed = 0, remainder;
    
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    original = num;
    
    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = num / 10;
    }
    
    if (original == reversed) {
        printf("%d is a Palindrome.\\n", original);
    } else {
        printf("%d is not a Palindrome.\\n", original);
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter an integer: 12321",
      output: "12321 is a Palindrome.",
    },
  },
  {
    id: "program-9",
    number: 9,
    title: "Armstrong Number Check",
    problemStatement:
      "Write a C program to check whether a given 3-digit number is an Armstrong number. (A number is Armstrong if sum of cubes of its digits equals the number itself)",
    algorithm: [
      "Start",
      "Declare variables: num, original, remainder, sum = 0",
      "Read the 3-digit number from user",
      "Store original value: original = num",
      "While num is not 0:",
      "  remainder = num % 10",
      "  sum = sum + (remainder * remainder * remainder)",
      "  num = num / 10",
      "If original == sum, number is Armstrong",
      "Else, number is not Armstrong",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num, original, remainder, sum = 0;
    
    printf("Enter a 3-digit integer: ");
    scanf("%d", &num);
    
    original = num;
    
    while (num != 0) {
        remainder = num % 10;
        sum = sum + (remainder * remainder * remainder);
        num = num / 10;
    }
    
    if (original == sum) {
        printf("%d is an Armstrong number.\\n", original);
    } else {
        printf("%d is not an Armstrong number.\\n", original);
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter a 3-digit integer: 153",
      output: "153 is an Armstrong number.",
    },
  },
  {
    id: "program-10",
    number: 10,
    title: "Find Largest Among Three Numbers",
    problemStatement:
      "Write a C program to find the largest among three numbers entered by the user.",
    algorithm: [
      "Start",
      "Declare variables: num1, num2, num3, largest",
      "Read three numbers from user",
      "Assume num1 is largest",
      "If num2 > largest, then largest = num2",
      "If num3 > largest, then largest = num3",
      "Display the largest number",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int num1, num2, num3, largest;
    
    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);
    
    largest = num1;
    
    if (num2 > largest) {
        largest = num2;
    }
    
    if (num3 > largest) {
        largest = num3;
    }
    
    printf("Largest number is %d\\n", largest);
    
    return 0;
}`,
    sampleIO: {
      input: "Enter three numbers: 45 89 23",
      output: "Largest number is 89",
    },
  },
  {
    id: "program-11",
    number: 11,
    title: "Simple Calculator",
    problemStatement:
      "Write a C program to create a simple calculator that performs addition, subtraction, multiplication, and division based on user's choice.",
    algorithm: [
      "Start",
      "Declare variables: num1, num2, choice, result",
      "Display menu with options: 1-Add, 2-Subtract, 3-Multiply, 4-Divide",
      "Read user's choice",
      "Read two numbers",
      "Use switch-case to perform operation based on choice",
      "Display the result",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int choice;
    float num1, num2, result;
    
    printf("Simple Calculator\\n");
    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");
    printf("Enter your choice (1-4): ");
    scanf("%d", &choice);
    
    printf("Enter two numbers: ");
    scanf("%f %f", &num1, &num2);
    
    switch (choice) {
        case 1:
            result = num1 + num2;
            printf("%.2f + %.2f = %.2f\\n", num1, num2, result);
            break;
        case 2:
            result = num1 - num2;
            printf("%.2f - %.2f = %.2f\\n", num1, num2, result);
            break;
        case 3:
            result = num1 * num2;
            printf("%.2f * %.2f = %.2f\\n", num1, num2, result);
            break;
        case 4:
            if (num2 != 0) {
                result = num1 / num2;
                printf("%.2f / %.2f = %.2f\\n", num1, num2, result);
            } else {
                printf("Error: Division by zero!\\n");
            }
            break;
        default:
            printf("Invalid choice!\\n");
    }
    
    return 0;
}`,
    sampleIO: {
      input: "Enter your choice (1-4): 3\nEnter two numbers: 5 4",
      output: "5.00 * 4.00 = 20.00",
    },
  },
  {
    id: "program-12",
    number: 12,
    title: "Sum of Array Elements",
    problemStatement:
      "Write a C program to find the sum of all elements in an integer array.",
    algorithm: [
      "Start",
      "Declare array arr[100], variables n, i, sum = 0",
      "Read the number of elements (n)",
      "Read n elements into the array",
      "Loop from i = 0 to n-1",
      "  Add arr[i] to sum",
      "Display the sum",
      "Stop",
    ],
    code: `#include <stdio.h>

int main() {
    int arr[100], n, i, sum = 0;
    
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    for (i = 0; i < n; i++) {
        sum = sum + arr[i];
    }
    
    printf("Sum of array elements = %d\\n", sum);
    
    return 0;
}`,
    sampleIO: {
      input: "Enter the number of elements: 5\nEnter 5 elements:\n10 20 30 40 50",
      output: "Sum of array elements = 150",
    },
  },
];
