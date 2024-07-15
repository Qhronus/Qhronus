def solution(S):
    # Dict to convert words to numbers
    word_to_number = {"one": 1, "two": 2}
    
    # Convert all to lowercase (assuming input is not case-sensitive)
    S = S.lower()
    
    # Separate the string into numbers and operators using split
    tokens = S.split()
    
    # Convert words to numbers and evaluate the expression
    result = 0
    i = 0
    
    while i < len(tokens):
        if tokens[i] in word_to_number:
            num = word_to_number[tokens[i]]
        else:
            num = int(tokens[i])
        
        if i + 1 < len(tokens):
            operator = tokens[i + 1]
            if operator == "+":
                result += num
            elif operator == "-":
                result -= num
            i += 2
        else:
            result = num
            i += 1
            
    return result