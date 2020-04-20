def read_matrix():
    row_column_length = int(input())
    return [list(str(input())) for _ in range(row_column_length)]


def search_for_symbol(matrix):
    searched_symbol = input()

    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            if searched_symbol == matrix[r][c]:
                return f'({r}, {c})'

    return f'{searched_symbol} does not occur in the matrix'


matrix = read_matrix()
print(search_for_symbol(matrix))


# Test 1:
# input:
# 3
# ABC
# DEF
# X!@
# !
# output:
# (2, 1)

# Test 2:
# input:
# 4
# asdd
# xczc
# qwee
# qefw
# 4
# output:
# 4 does not occur in the matrix
