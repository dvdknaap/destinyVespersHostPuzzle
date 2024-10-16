# Destiny 2 Vespers Host - Ice Breaker Catalyst Puzzles Solver

This Python script helps solve puzzles related to the Destiny 2 Vespers Host, specifically the Ice Breaker Catalyst puzzles. The script is designed to find combinations of numbers that satisfy certain conditions, such as sums or products using unique digits.

## How It Works

The script provides three different types of calculations or puzzles to solve:

1. **Puzzle 1: Sum Calculation**
   - The user provides a target sum.
   - The script finds four unique digits (between 1 and 9) that add up to the given target sum.

2. **Puzzle 2: Multiplication Calculation**
   - The user provides a target product.
   - The script finds four unique digits (between 1 and 9) that, when multiplied together, equal the given target.

3. **Puzzle 3: Product of Two Two-Digit Numbers**
   - The user provides a target number.
   - The script finds two two-digit numbers that, when multiplied, equal the target.
   - For each of these two-digit numbers, it then finds four unique digits that sum up to each number, ensuring that there is no overlap between the digits used for each set.

## Usage

1. **Requirements**: 
   - Python 3.x must be installed on your system.
   - Install any required libraries using:
     ```bash
     pip install itertools
     ```

2. **Running the Script**:
   - Clone or download this repository.
   - Open a terminal or command prompt in the directory where the script is located.
   - Run the script using:
     ```bash
     python script_name.py
     ```
   - Replace `script_name.py` with the actual name of the script file.

3. **Using the Script**:
   - After running the script, you will be prompted to choose one of the three puzzles:
     ```
     Choose a calculation type:
     1. Puzzle 1: Sum
     2. Puzzle 2: Multiply
     3. Puzzle 3: Product of two two-digit numbers
     ```
   - Enter `1`, `2`, or `3` based on the puzzle you want to solve.

4. **Inputting the Target Number**:
   - The script will then ask for a target number based on the chosen puzzle:
     - For Puzzle 1 and 2, provide a target sum or product.
     - For Puzzle 3, provide a target number that can be the product of two two-digit numbers.
   - The script will calculate the solution and display the results.

## Example

Here are a few examples of how to use the script:

- **Example 1**: Solving for a sum of 16 using Puzzle 1.
   - Input `1` when prompted to select a puzzle.
   - Input `16` when asked for the target sum.
   - Output:
     ```
     A possible unique combination of four digits that sums to 16 is: [1, 2, 4, 9]
     ```

- **Example 2**: Solving for a product of 450 using Puzzle 3.
   - Input `3` when prompted to select a puzzle.
   - Input `450` when asked for the target number.
   - Output:
     ```
     Two two-digit numbers that multiply to 450 are: 15 and 30
     A possible set of four digits that sums to 15 is: [1, 2, 3, 9]
     A possible set of four digits that sums to 30 is: [6, 7, 8, 9]
     ```

## Important Notes

- The script assumes that the input target can be achieved with the given conditions. If no valid combination exists, the script will inform the user.
- For Puzzle 3, the script ensures that the sets of digits for each two-digit number do not overlap.

## Contributions

Feel free to fork this repository, make improvements, and submit a pull request. All contributions are welcome!

## License

This project is open-source and available under the MIT License.
