import itertools

def get_target_number():
    """Ask the user to input a target number."""
    return int(input("Enter the target number: "))

def find_unique_combination(target, operation='sum'):
    """
    Find a set of four unique digits between 1 and 9 that reach the target
    using the specified operation ('sum' or 'multiply').
    """
    digits = range(1, 10)
    # Generate all possible combinations of four unique digits
    combinations = itertools.permutations(digits, 4)
    
    # Find the correct combination based on the operation
    for comb in combinations:
        if operation == 'sum' and sum(comb) == target:
            return comb
        elif operation == 'multiply':
            product = comb[0] * comb[1] * comb[2] * comb[3]
            if product == target:
                return comb
    
    return None

def find_two_digit_multiplication(target):
    """
    Find two two-digit numbers whose product equals the target.
    """
    for i in range(10, 100):  # All possible two-digit numbers
        for j in range(10, 100):
            if i * j == target:
                # Find sets of four digits that sum up to these numbers.
                combination1 = find_unique_combination(i, operation='sum')
                combination2 = find_unique_combination(j, operation='sum')

                if combination1 and combination2:
                    return i, j, combination1, combination2
                
    return None

def sum_puzzle():
    """Perform the sum calculation."""
    target_sum = get_target_number()
    print(f"Target sum: {target_sum}")
    
    combination = find_unique_combination(target_sum, operation='sum')
    
    if combination:
        print(f"A possible unique combination of four digits that sums to {target_sum} is: {combination}")
    else:
        print(f"No combination of four unique digits found that sums to {target_sum}.")

def multiply_puzzle():
    """Perform the multiplication calculation."""
    target = get_target_number()
    
    combination = find_unique_combination(target, operation='multiply')
    
    if combination:
        print(f"A possible unique combination of four digits that multiplies to {target} is: {combination}")
    else:
        print(f"No combination of four unique digits found that multiplies to {target}.")

def two_digit_product_puzzle():
    """Find two two-digit numbers that multiply to the target and check digit sets."""
    target = get_target_number()
    result = find_two_digit_multiplication(target)
    
    if result:
        i, j, combination1, combination2 = result
        print(f"Two two-digit numbers that multiply to {target} are: {i} and {j}")
        print(f"A possible set of four digits that sums to {i} is: {combination1}")
        print(f"A possible set of four digits that sums to {j} is: {combination2}")
    else:
        print(f"No suitable pair of two-digit numbers found that multiply to {target} with sets of four digits.")

def main():
    """Start the program and ask the user to choose a calculation type."""
    print("Choose a calculation type:")
    print("1. Puzzle 1: Sum")
    print("2. Puzzle 2: Multiply")
    print("3. Puzzle 3: Product of two two-digit numbers")
    
    choice = input("Enter your choice (1, 2, or 3): ")
    
    if choice == "1":
        sum_puzzle()
    elif choice == "2":
        multiply_puzzle()
    elif choice == "3":
        two_digit_product_puzzle()
    else:
        print("Invalid choice. Please try again.")

# Start the script
if __name__ == "__main__":
    main()
