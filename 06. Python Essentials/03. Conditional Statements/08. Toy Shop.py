holiday_price = float(input())
puzzles = int(input())
dolls = int(input())
bears = int(input())
minions = int(input())
trucks = int(input())

toys_count = puzzles + dolls + bears + minions + trucks
toys_income = (puzzles * 2.60) + (dolls * 3.00) + \
    (bears * 4.10) + (minions * 8.20) + (trucks * 2.00)

if toys_count >= 50:
    toys_income *= 0.75

profit = toys_income * 0.90
diff = abs(holiday_price - profit)

if profit >= holiday_price:
    print(f'Yes! {diff:.2f} lv left.')
else:
    print(f'Not enough money! {diff:.2f} lv needed.')
