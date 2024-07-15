import re

def normalize_word(word):
    # Remove special characters
    word = re.sub(r'[^a-zA-Z]', '', word)
    # Map common typos or variations to the correct words
    typo_mapping = {
        "one": ["on3", "on3e", "0ne"],
        "two": ["tw0", "tw1o", "t*wo"]
    }
    for correct_word, variations in typo_mapping.items():
        if word in variations:
            return correct_word
    return word

def solution(S):
    # Dict to convert words to numbers
    word_to_number = {"one": 1, "two": 2}

    # Convert all to lowercase
    S = S.lower()

    # List to store number and operators
    list_num_operator = []

    try:
        # Separate S in list_num_operator
        temp = ""
        for char in S:
            if char in "+-":
                if temp:
                    normalized_word = normalize_word(temp)
                    list_num_operator.append(normalized_word)
                    temp = ""
                list_num_operator.append(char)
            else:
                temp += char
        if temp:
            normalized_word = normalize_word(temp)
            list_num_operator.append(normalized_word)

        # Convert words to numbers
        for i in range(len(list_num_operator)):
            if list_num_operator[i] in word_to_number:
                list_num_operator[i] = word_to_number[list_num_operator[i]]

        # Calculate the result
        result = list_num_operator[0]
        i = 1
        while i < len(list_num_operator):
            if list_num_operator[i] == '+':
                result += list_num_operator[i + 1]
            elif list_num_operator[i] == '-':
                result -= list_num_operator[i + 1]
            i += 2

        return result

    except (ValueError, KeyError, IndexError) as e:
        print(f"An error occurred: {e}")

# Example usage
S = "on3 + t*wo"
print(solution(S))  # Output should be 3 (1 + 2)