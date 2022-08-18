const hashKeyIntoInt = (nameOfKey, sizeOfTable) => {
  let hash = 17;

  for (let i = 0; i < nameOfKey.length; i++) {
    hash = (13 * hash * nameOfKey.charCodeAt(i)) % sizeOfTable;
  }

  return hash;
};

class HashTable {
  constructor() {
    this.table = new Array(3);
  }

  setItem(key, value) {
    const index = hashKeyIntoInt(key, this.table.length);

    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  }

  getItem(key) {
    const index = hashKeyIntoInt(key, this.table.length);
    return this.table[index].find(arr => arr[0] === key);
  }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'sydney');
myTable.setItem('age', 32);
myTable.setItem('school', 'upsa');
myTable.setItem('movie', 'The walking dead');
myTable.setItem('sister', 'Otuko');
myTable.setItem('movie', 'The walking dead');

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('movie'));
console.log(myTable.getItem('school'));
console.log(myTable.getItem('sister'));
