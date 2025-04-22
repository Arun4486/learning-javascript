// for loop

// for (let index = 0; index < 10; index++) {
//     if(index+1 == 5) {
//         console.log("5 is best no");
//         continue;
//     }
//     console.log(index+1);
// }

// nested loops

// for(let i=0;i<5;i++){
//     console.log(`outer loop value ${i}`);
//     for(let j=0;j<5;j++){
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//         /*
//         outer loop value 0
//         inner loop value 0 and inner loop 0
//         inner loop value 1 and inner loop 0
//         inner loop value 2 and inner loop 0
//         inner loop value 3 and inner loop 0
//         inner loop value 4 and inner loop 0
//         outer loop value 1...
//         */
//     }
// }

// table 

for(let i=1;i<=5;i++){
    //console.log(`Table of ${i}`);
    
    for(let j=1;j<=10;j++){
       // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArr = ["flash", "batman", "superman"];
for(let i=0;i<myArr.length;i++){
    //console.log(myArr[i]);
    
}

// break and continue


for(let i=1;i<=20;i++){
    if(i==5){
        console.log(i);
        //break;
    }
    if(i==10){
        continue;
    }
    console.log(i);
}