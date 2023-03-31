// Code your solution here
function findMatching(array, string) {
   return array.filter(function(item){
        return item.toUpperCase() === string.toUpperCase()
    })
}


function fuzzyMatch(array, string) {
    return array.filter(function(item){
        return item.slice(0, string.length) === string
    })
}

function matchName(array, string){
   return array.filter(function(item){
        return item.name === string
    })
}
