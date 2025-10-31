// export function groupAnagrams(words:string[]): string[][]

// Input: "["eat", "tan", "ate", "nat", "bat"]"

// Output: "[["eat", "ate"], ["tan", "nat"], ["bat"]]"
// }
// write a function that takes an array of strings and raturns a list of group where each group cantains words that are anagra
// ms 



    
function groupAnagrams(arrs: string[]): string[][] {
  const groups: { [key: string]: string[] } = {};
  
  for (const arr of arrs) {
    const sorted = arr.split('').sort().join('');
    
    if (!groups[sorted]) {
      groups[sorted] = [];
    }
    
    groups[sorted].push(arr);
  }
  
  const result: string[][] = [];
  for (const key in groups) {
    result.push(groups[key]);
  }
  
  return result;
}

const arr = ["eat", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));




