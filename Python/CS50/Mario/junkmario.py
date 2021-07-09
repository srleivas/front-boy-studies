validation = False

#Check if input is valid and between range
while validation == False:
    pyheight = input("Height: ")
    validation = pyheight.isdigit()
    
    if validation == True:
        pyheight = int(pyheight)
        if pyheight > 0 and pyheight < 9:
            continue
        else:
            validation = False
#Print :)
for i in range(pyheight):
    print("#" * (i + 1))