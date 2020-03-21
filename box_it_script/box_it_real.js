arr = ["sdfsdfsfdsds", "sdfsddd", "sd"]
let max = 0
for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i].length)
}
console.log(max)