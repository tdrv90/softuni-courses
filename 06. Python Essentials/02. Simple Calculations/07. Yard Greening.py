square_meters = float(input())
totalPrice = square_meters * 7.61
discount = totalPrice * 0.18
print(f'The final price is: {(totalPrice - discount):.2f} lv.')
print(f'The discount is: {discount:.2f} lv.')