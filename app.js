

// var myArray = {id1: 100, id2: 200, "tag with spaces": 300};
// myArray.id3 = 400;
// myArray["id4"] = 500;


// for (var key in myArray) {
//   console.log("key " + key + " has value " + myArray[key]);
// }
// var  myManInventory = {
//     water: 100,
//     soda: 100
// };

// for(var product in myInventory) {
//     console.log (product, inventory[product]);
// }


/************************************************** */

// Example Test case:
let convert = {};

convert.checkElement = function(obj, strKey){
    for(var key in obj){
        if(key === strKey)
        {
            return key + " " + obj[key] ;        
        }
    }
};

module.exports = convert;

/************************************************** */


