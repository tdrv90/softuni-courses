def read_matrix():
    (rows_count, _) = map(int, input().split(', '))
    return [list(map(int, input().split(', '))) for _ in range(rows_count)]


def sum_matrix(matrix):
    sum_of_matrix = 0

    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            sum_of_matrix += matrix[row][col]

    return sum_of_matrix


matrix = read_matrix()
print(sum_matrix(matrix))
print(matrix)
