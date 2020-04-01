n = int(input())

negatives = []
positives = []

for i in range(n):
    current = int(input())
    if current >= 0:
        positives.append(current)
    else:
        negatives.append(current)

print(positives)
print(negatives)
print(f'Count of positives: {len(positives)}. Sum of negatives: {sum(negatives)}')