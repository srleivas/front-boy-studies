validation = False
coin_25 = coin_10 = coin_5 = coin_1 = 0.0

def check(text):
    try:
        float(cash)
        return True
    except ValueError:
        return False


cash = input("Cash: ")
validation = check(cash)

if validation == True:  
    cents = round(cash * 100)
# while validation == False:
#     cash = input("To be Exchanged: ")
#     validation = cash.isnumeric()
#     if validation == True:
#         if validation == True:
#             cash = float(cash)
#             cents = round(cash * 100)
#             break

while cents > -1:
    if cents > 0:
        while cents >= 25:
            coin_25 += 1
            cents -= 25
        while cents >= 10:
            coin_10 += 1 
            cents = cents - 10
        while cents >= 5:
            coin_5 += 1
            cents = cents - 5
        while cents >= 1:
            coin_1 += 1
            cents = cents - 1
    else:
        totalcoins = (int)(coin_25 + coin_10 + coin_5 + coin_1)
        print(f"Minimum coins: {totalcoins}")
        cents =- 1

