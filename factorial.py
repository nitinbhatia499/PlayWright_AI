def factorial_recursive(n):
    """Calculates factorial recursively."""
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    """Calculates factorial iteratively."""
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

if __name__ == "__main__":
    try:
        user_input = input("Enter a non-negative integer: ")
        num = int(user_input)
        print(f"Factorial of {num} (recursive): {factorial_recursive(num)}")
        print(f"Factorial of {num} (iterative): {factorial_iterative(num)}")
    except ValueError as e:
        print(f"Invalid input: {e}")
