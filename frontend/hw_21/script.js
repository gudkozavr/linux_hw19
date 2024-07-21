class CopyEntity {
  static copyObject(obj) {
    // for (let i = 0; i < obj.length; i++) {
    const objArr = obj.
    const newObj = obj.map();
    return newObj;
  }
}
const arr = [1, 2, 3];

const arr2 = CopyEntity.copyObject(arr);

arr[0] = 999;

console.log(arr);
console.log(arr2);
