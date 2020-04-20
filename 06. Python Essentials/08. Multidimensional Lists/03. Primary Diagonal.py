def read_matrix(split_by):
    row_column_count = int(input())
    return [list(map(int, input().split(split_by))) for _ in range(row_column_count)]


def sum_prime_diagonal(matrix):
    sum = 0

    for x in range(len(matrix)):
        sum += int(matrix[x][x])

    return sum

# sum of the second diagonal (not included in the exercise):
# def sum_secondary_diagonal(matrix):
#     sum = 0

#     for x in range(len(matrix)):
#         sum += int(matrix[x][(len(matrix) - 1 - x)])

#     return sum


matrix = read_matrix(' ')
print(sum_prime_diagonal(matrix))
# print(sum_secondary_diagonal(matrix))
