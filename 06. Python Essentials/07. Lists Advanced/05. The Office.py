current_happiness = input().split(' ')
happiness_improvement_factor = int(input())

improved_happiness = [
    int(x) * happiness_improvement_factor for x in current_happiness]

average_happiness = sum(improved_happiness) / len(improved_happiness)

filtered_happiness = [x for x in improved_happiness if x >= average_happiness]

happiness_coefficient = len(filtered_happiness) / len(improved_happiness)

if happiness_coefficient >= 0.5:
    print(
        f'Score: {len(filtered_happiness)}/{len(improved_happiness)}. Employees are happy!')
else:
    print(
        f'Score: {len(filtered_happiness)}/{len(improved_happiness)}. Employees are not happy!')
