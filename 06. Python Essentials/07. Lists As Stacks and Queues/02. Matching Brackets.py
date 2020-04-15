def get_sub_expressions(expr):
    opening_bracket_indices = []

    for index in range(len(expr)):
        char = expr[index]
        if char == "(":
            opening_bracket_indices.append(index)
        elif char == ")":
            start_index = opening_bracket_indices.pop()
            end_index = index
            print(expr[start_index:end_index + 1])


get_sub_expressions(input())
