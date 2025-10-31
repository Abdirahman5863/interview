<!-- explanation -->

## Problem
// export function groupAnagrams(words:string[]): string[][]

// Input: "["eat", "tan", "ate", "nat", "bat"]"

<!-- // Output: "[["eat", "ate"], ["tan", "nat"], ["bat"]]" -->
// 
// write a function that takes an array of strings and raturns a list of group where each group cantains words that are anagram
// ms 

## My Approach

I solved this by sorting the letters in each word to create a unique key for anagrams.

1. Create an object to store groups
2. For each word, sort its letters (e.g., "eat" → "aet")
3. Use the sorted letters as a key
4. Words with the same key are anagrams
5. Return all groups as an array

## How to Run
```bash
# Install dependencies
npm install -D tsx typescript @types/node

# Run the code
npx tsx array.ts
```

## Example
```
Input: ["eat", "tan", "ate", "nat", "bat"]

Step 1: Sort each word's letters
- "eat" → "aet"
- "tan" → "ant"  
- "ate" → "aet"
- "nat" → "ant"
- "bat" → "abt"

Step 2: Group by sorted key
- "aet": ["eat", "ate"]
- "ant": ["tan", "nat"]
- "abt": ["bat"]

Output: [["eat", "ate"], ["tan", "nat"], ["bat"]]
```