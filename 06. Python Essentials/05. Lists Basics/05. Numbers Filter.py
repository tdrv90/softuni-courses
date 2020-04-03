FILTERS_DICT = {
    'even': lambda x: x % 2 == 0,
    'odd': lambda x: x % 2 == 1,
    'negative': lambda x: x < 0,
    'positive': lambda x: x >= 0,
}

n = int(input())
list_of_nums = []

for _ in range(n):
    list_of_nums.append(int(input()))

keyword = str(input())
filtered_list = list(filter(FILTERS_DICT[keyword], list_of_nums))

print(filtered_list)
