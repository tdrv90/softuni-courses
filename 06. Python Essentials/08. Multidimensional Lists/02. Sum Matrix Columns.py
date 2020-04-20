def read_matrix(split_by):
    (r_count, c_count) = map(int, input().split(', '))
    return [list(map(int, input().split(split_by))) for _ in range(r_count)]


def get_column_sum(matrix):
    rows_count = len(matrix)
    columns_count = len(matrix[0])

    column_sums = [0] * columns_count

    for r in range(rows_count):
        for c in range(columns_count):
            column_sums[c] += matrix[r][c]

    return column_sums


matrix = read_matrix(' ')
[print(c_sum) for c_sum in get_column_sum(matrix)]
