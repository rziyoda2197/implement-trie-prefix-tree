class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
```

Kodda quyidagilar mavjud:

- `TrieNode` klassi - har bir nod uchun ma'lumotlar saqlaydi.
- `Trie` klassi - Trie strukturasini yaratadi va insert, search, startsWith metodlarini implement etadi.
- `insert` metod - so'zni Trie strukturasiga qo'shadi.
- `search` metod - so'zni Trie strukturasida qidiradi.
- `startsWith` metod - prefixni Trie strukturasida qidiradi.
