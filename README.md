# Qhronus

from dataclasses import dataclass
from typing import Optional, List

@dataclass
class Tree:
    x: int = 0
    l: Optional['Tree'] = None
    r: Optional['Tree'] = None

def find_three_digit_numbers(root: Optional[Tree]) -> List[int]:
    if not root:
        return []
    
    results = []

    def dfs(node: Optional[Tree], path: List[int]):
        if node is None or len(path) > 2:
            return
        path.append(node.x)
        if len(path) == 3:
            results.append(int("".join(map(str, path))))
        else:
            dfs(node.l, path[:])
            dfs(node.r, path[:])
            if len(path) == 2:
                dfs(node.l, path[:]) # Traverse left again if it's the second move
                dfs(node.r, path[:]) # Traverse right again if it's the second move
        path.pop()

    def traverse_and_find(node: Optional[Tree]):
        if node is None:
            return
        dfs(node, [])
        traverse_and_find(node.l)
        traverse_and_find(node.r)
    
    traverse_and_find(root)
    return results

# Example usage
if __name__ == "__main__":
    # Construct the tree
    tree = Tree(1, 
                Tree(2, 
                     Tree(3), 
                     Tree(4)
                    ), 
                Tree(7, 
                     Tree(9), 
                     None
                    )
               )
    result = find_three_digit_numbers(tree)
    print(result)