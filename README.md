def solution(A):
    # Contar pares e impares
    count_even = 0
    count_odd = 0
    
    for num in A:
        if num % 2 == 0:
            count_even += 1
        else:
            count_odd += 1
    
    # Verificar si podemos formar los pares necesarios
    return count_even == count_odd

# Ejemplos de uso
if __name__ == "__main__":
    print(solution([2, 7, 4, 6, 3, 1]))  # Expected output: True
    print(solution([1, 1, 1]))           # Expected output: False
    print(solution([1, 2, 3, 4]))        # Expected output: True
    print(solution([2, 4, 6, 8]))        # Expected output: False
    print(solution([-1, 3, 4, 7, 7, 7])) # Expected output: False