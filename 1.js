let arr = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}]

let filterArr = arr.filter((val)=>{ 
    return val.type == 'external'
    })

console.log(filterArr)

output - [{'id':1, 'type': 'external'}]