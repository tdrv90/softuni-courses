a = input()
b = int(input())


def calculate_price(product, qty):
    PRICE_LIST = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }

    return '{:.2f}'.format(PRICE_LIST[product] * qty)


print(calculate_price(a, b))
