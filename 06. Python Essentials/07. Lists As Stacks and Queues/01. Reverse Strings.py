input_text = list(input())
output_text = []

while len(input_text) != 0:
    output_text.append(input_text.pop())

print(''.join(output_text))
