text = input("Text: ").strip()
letter = word = sentence = 0

#Do all the checking for letters, words and sentences
for i in range(len(text)):
    if text[i].isalpha(): 
        letter += 1
    if ( i == 0 and text[i] != ' ') or (i != len(text) - 1 and text[i + 1] != ' ' and text[i] == ' '):
        word += 1
    if text[i] == '.' or text[i] == '?' or text[i] == '!':
        sentence += 1

l = letter / word * 100
s = sentence / word * 100
grade = round(0.0588 * l - 0.296 * s - 15.8)

if grade < 1:
    print("\n===============================")
    print("Before Grade 1")
    print("===============================\n")
elif grade >= 16:
    print("\n===============================")
    print("Grade 16+")
    print("===============================\n")
else:
    print("\n===============================")
    print(f"Grade {grade}")
    print("===============================\n")


#checking part 
print (f"Letter Counter: {letter}")
print (f"Word Counter: {word}")
print (f"Sentence Counter: {sentence}")