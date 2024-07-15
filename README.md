def solution(S):
    # Diccionario para convertir palabras a números
    word_to_number = {"one": 1, "two": 2}

    # Normalizar la cadena a minúsculas
    S = S.lower()

    # Lista para almacenar números y operadores
    tokens = []

    # Dividir la cadena en tokens de números y operadores
    temp = ""
    for char in S:
        if char in "+-":
            tokens.append(temp)
            tokens.append(char)
            temp = ""
        else:
            temp += char
    tokens.append(temp)

    # Convertir palabras a números
    for i in range(len(tokens)):
        if tokens[i] in word_to_number:
            tokens[i] = word_to_number[tokens[i]]

    # Calcular el resultado
    result = tokens[0]
    i = 1
    while i < len(tokens):
        if tokens[i] == "+":
            result += tokens[i + 1]
        elif tokens[i] == "-":
            result -= tokens[i + 1]
        i += 2

    return result

# Ejemplos de uso
if __name__ == "__main__":
    print(solution("one+two+one+one+two+one"))  # Expected output: 4
    print(solution("TwO-tWo-one-twO"))          # Expected output: -3
    print(solution("tWo+TwO-One"))              # Expected output: 3