string = str(input())
string = string.lower()

sum_of_vowels = 0

for char in string:
    if char == 'a':
        sum_of_vowels += 1
    elif char == 'e':
        sum_of_vowels += 2
    elif char == 'i':
        sum_of_vowels += 3
    elif char == 'o':
        sum_of_vowels += 4
    elif char == 'u':
        sum_of_vowels += 5

print(sum_of_vowels)
