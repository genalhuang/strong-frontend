let arr = [{name:'aaaaa', key: 1},{name: 'bbbb', key:2},{name: 'cccc', key:3},{name: 'aaaaa3', key:1},{name: 'cccc2', key:3}]

function keyIndexCount(arr) {
    let count = new Array(5).fill(0)
    let aux = []
    let r = 3;
    for(var i=0;i<arr.length;i++) {
        count[arr[i].key+1]++
    }

    for(var i=0;i<r;i++) {
        count[i+1] += count[i]
    }
    
    console.log(count, arr)
    for(var i=0;i<arr.length; i++) {
        aux[count[arr[i].key]++] = arr[i]
    }

    for(var i=0;i<arr.length;i++) {
        arr[i] = aux[i]
    }
}


keyIndexCount(arr)
console.log(arr)