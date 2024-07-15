from extratypes import Tree  # Library with types used in the task

def solution(T):
    if not T:
        return 0
    
    unique_numbers = set()  # Set to store unique three-digit numbers

    def dfs(node: Optional[Tree], path: str):
        """ Perform depth-first search to find all possible three-digit numbers. """
        if node is None:
            return
        path += str(node.x)  # Add current node value to path
        if len(path) == 3:
            unique_numbers.add(int(path))  # Add three-digit number to set
            return
        # Recursively traverse left and right subtrees
        dfs(node.l, path)
        dfs(node.r, path)
        if len(path) == 2:
            # If it's the second move, allow another move in the same subtree
            dfs(node.l, path)
            dfs(node.r, path)
    
    def traverse_and_find(node: Optional[Tree]):
        """ Traverse the entire tree and initiate DFS from each node. """
        if node is None:
            return
        dfs(node, "")  # Start DFS from the current node
        traverse_and_find(node.l)  # Recur on the left subtree
        traverse_and_find(node.r)  # Recur on the right subtree
    
    traverse_and_find(T)  # Start traversal from the root
    return len(unique_numbers)  # Return the count of unique three-digit numbers

# Example usage
if __name__ == "__main__":
    # Construct the tree from the example
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
    result = solution(tree)
    print(result)  # Expected output: 4

    # Another example tree
    another_tree = Tree(9,
                        Tree(9,
                             Tree(9),
                             Tree(5, Tree(9), Tree(9))
                            ),
                        Tree(5,
                             Tree(9),
                             Tree(5, None, Tree(9))
                            )
                       )
    another_result = solution(another_tree)
    print(another_result)  # Expected output: 5