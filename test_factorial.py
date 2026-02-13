import unittest
from factorial import factorial_recursive, factorial_iterative

class TestFactorial(unittest.TestCase):
    def test_recursive(self):
        self.assertEqual(factorial_recursive(0), 1)
        self.assertEqual(factorial_recursive(1), 1)
        self.assertEqual(factorial_recursive(5), 120)
        with self.assertRaises(ValueError):
            factorial_recursive(-1)

    def test_iterative(self):
        self.assertEqual(factorial_iterative(0), 1)
        self.assertEqual(factorial_iterative(1), 1)
        self.assertEqual(factorial_iterative(5), 120)
        with self.assertRaises(ValueError):
            factorial_iterative(-1)

if __name__ == '__main__':
    unittest.main()
