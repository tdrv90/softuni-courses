age = int(input())
washer_price = float(input())
toy_price = int(input())

toys_count = 0
gift_amount = 10
brothers_tax = 0
savings = 0

for i in range(1, age + 1):
    if i % 2 == 1:
        toys_count += 1
    else:
        savings += gift_amount
        gift_amount += 10
        brothers_tax += 1

savings = (savings - brothers_tax) + (toys_count * toy_price)
diff = abs(savings - washer_price)

if savings >= washer_price:
    print(f'Yes! {diff:.2f}')
else:
    print(f'No! {diff:.2f}')
