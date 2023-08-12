for i in range(1, 11):
    for j in range(i):
        print("*", end=" ") if j == i - 1 else print(" ", end=" ") # Print * or space depending on the level and row number.
    print() # Move to the next line after each row.
