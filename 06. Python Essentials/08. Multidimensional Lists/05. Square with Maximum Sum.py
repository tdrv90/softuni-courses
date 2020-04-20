def read_matrix(split_by):
    (r_count, c_count) = map(int, input().split(', '))
    return [list(map(int, input().split(split_by))) for _ in range(r_count)]


def find_best_submatrix(matrix):
    rows_count = len(matrix)
    columns_count = len(matrix[0])

    best_sum = None
    best_start = None

    for r in range(rows_count - 1):
        for c in range(columns_count - 1):
            current_sum = \
                matrix[r][c] + \
                matrix[r][c + 1] + \
                matrix[r + 1][c] + \
                matrix[r + 1][c + 1]

            if best_sum:
                if best_sum < current_sum:
                    best_sum = current_sum
                    best_start = (r, c)
            else:
                best_sum = current_sum
                best_start = (r, c)

    (r, c) = best_start
    best_submatrix = [
        [matrix[r][c],
         matrix[r][c + 1]],
        [matrix[r + 1][c],
         matrix[r + 1][c + 1]]
    ]

    return (best_sum, best_submatrix)


matrix = read_matrix(', ')

(best_sum, best_submatrix) = find_best_submatrix(matrix)

[print(' '.join(map(str, row))) for row in best_submatrix]
print(best_sum)
