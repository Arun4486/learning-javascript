// SWITCH
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4;
switch (month) {
    case 1:
        console.log("JAN");
        break; // if not break then all after this will be execited too
    case 2:
        console.log("FAB");
        break;
    case 3:
        console.log("MAR");
        break;
    case 4:
        console.log("APR");
        break;
    default:
        console.log("Not the first quarter of the year");
        break;
}