words = str(input()).split(' ')
palindrome = str(input())

palindromes = []

for w in words:
    if w == w[::-1]:
        palindromes.append(w)

counter = palindromes.count(palindrome)

print(palindromes)
print(f'Found palindrome {counter} times')
