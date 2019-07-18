/**
 * Multidimensional data
 * Array
 * Object
 */
​
 var people = [ 
    {
        name: "antonio",
        age: 25,
        sallary: 10000000,
        skills: {
            frontend: {
                language: 'javascript',
                level: 'advance'
            },
            backend: {
                language: 'java',
                level: 'intermediate'
            }
        }
    },
    {
        name: "banderaz",
        age: 25,
        sallary: 10000000,
        skills: {
            frontend: {
                language: 'html',
                level: 'advance'
            },
            backend: {
                language: 'javascript',
                level: 'intermediate'
            }
        }
    },
    {
        name: "celine",
        age: 28,
        sallary: 13000000,
        skills: {
            frontend: {
                language: 'android',
                level: 'advance'
            },
            backend: {
                language: 'php',
                level: 'intermediate'
            }
        }
    },
    {
        name: "dion",
        age: 29,
        sallary: 14000000,
        skills: {
            frontend: {
                language: 'javascript',
                level: 'advance'
            },
            backend: {
                language: 'phyton',
                level: 'intermediate'
            }
        }
    },
]
​
function nextYear(people){
    /* semua naik gaji 1.000.000 */
    for(var i = 0; i < people.length; i++){
        people[i].sallary+=1000000
    }
    return people
}
​
// Menaikkan gaji setiap pegawai sebanyak 1 juta 
function getSallaryMoreThan(people, sallary){
​
}
// console.log(getSallaryMoreThan(people, 12000000))
​
// Menampilkan pegawai yang bisa javascript frontend
function hasJavascriptFrontEnd(people){
}
​
var bisaJsFront = hasJavascriptFrontEnd(people)
console.log(bisaJsFront);
​
// skills.frontend dan skills.backend sebelumnya object di ganti ke array of object agar kedepannya bisa di tambahkan skill lain
function changeSkillDataIntoArray(people){
}
console.log(JSON.stringify(changeSkillDataIntoArray(people), null, 2))