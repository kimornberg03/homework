//Mellanrum

let str = ''

for (let i = 0; i < 10; i++) {
    str = str + '* '
}

console.log(str + '\n')


//Kvadrat

str = ""
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {   
      str = str + '* '
  }
 str = str + '\n'
}

console.log(str)



//Romb
let str1 = ""

str = ''
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
         str = str + '* '
    }
    str1 = str1 + " "
    str = str + '\n' + str1 
}


console.log(str)


//Upponedvänd triangle
str = ''
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str = str + '*'
    }
    str = str + '\n'
}

console.log(str)
