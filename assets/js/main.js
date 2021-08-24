//Exersize 1-13 Arrays join
let text1 = ["Hello", "World"];
let text2 = ["Anass", "Elaine", "Eric", "Georg"]
let text3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = text2.join()
let join2 = text2.join('')
let join3 = text2.join(' ')
let join4 = text2.join('+')
console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)
//Exersize 1-2 sort and reverse
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
  
  console.log(languages.sort().reverse())

  //Exersize 2-2 sort bigger number
  let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
  numArray2.sort((a,b) =>{
      if (a > b){
          return 1;
      }else if (a < b){
          return -1 ;
      }else {
          return 0;
      } 
  }
  )
  console.log(numArray2)
  //or the short solution
  numArray2.sort((a,b)=>a-b);
  console.log(numArray2)

//Exersize 3-1 reverse name ,word
let name1 = ["Sergio","Hannah","Regallager", "Reliefpfeiler", "Rentner"];
let sentence = ["Ella mag alle Bohnen"]
function rev(arr){
    return arr.map(element => element.split('').reverse().join(''))
     
}           
    console.log(rev(sentence))
    console.log(rev(name1))

    
//forEach lev-1
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
 let myDrink = (arr) =>{
      arr.sort().forEach(element => {
          document.write(element+"<br>")
          
      }); 
      console.log(arr)
 }
 myDrink(getraenke);

 //map lev-1-2
 let upperDrinks = (arr) =>{
     return arr.map(element => {
        return element.toUpperCase()
     })
     
 }
 getraenke = upperDrinks(getraenke);
 console.log(getraenke)

//map 1-3
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
  let mul = (arr) =>{
    return arr.sort((a,b) => a-b).map(element => {
        return element*2
    })
  }
  console.log(mul(array));
  
  //map 1-4
  let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
  let toCel = (arr) =>{
      return arr.map(element =>{
          return ((element-32)/1.8).toFixed()
      })
  }
  console.log(toCel(fahrenheit))

//forEach 1-5
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
 
let newArr = [];
let compare = (i,b) =>{
    if (i % 3 == 0){
        i.push(b+100)
    }else {
        i.push(b);
    }
}
checkNumber.forEach(element =>{
    compare(newArr,element)
})
  console.log(newArr);