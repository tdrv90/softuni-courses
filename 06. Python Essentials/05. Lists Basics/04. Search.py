n = int(input())
wordSearched = str(input())
my_list = []
filteredList = []

for i in range(n):
    my_list.append(str(input()))

filteredList = list(filter(lambda x: wordSearched in x, my_list))

print(my_list)
print(filteredList)
