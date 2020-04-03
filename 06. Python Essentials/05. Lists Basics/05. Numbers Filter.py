type_of_filter = {
    'even': lambda x: x % 2 == 0,
    'odd': lambda x: x % 2 == 1,
    'negative': lambda x: x < 0,
    'positive': lambda x: x >= 0,
}

n = int(input())
list_of_nums = []
filtered_list = []

for _ in range(n):
    list_of_nums.append(int(input()))

keyword = str(input())
filtered_list = list(filter(type_of_filter[keyword], list_of_nums))

print(filtered_list)
