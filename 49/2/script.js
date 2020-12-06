//Mellanrum

let str = "* "

str = str.repeat(10)

console.log(str + '\n')


//Kvadrat
str = "* "


for (let i = 0; i < 2; i++) {   
    str = str.repeat(4) + '\n'
}

console.log(str)


//Romb
let str1 = ""
let str2 = ""

str = '* '
str = str.repeat(4) + '\n'

for (let i = 0; i < 4; i++) {
    str1 = str1 + " "
    str2 = str2 + str + str1
}

console.log(str2)