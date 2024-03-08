// ? :
const pointUser = 999;
const levelUser = pointUser >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const colorUser = null;
const colorPatern = colorUser || 'Preta';

console.log(levelUser, colorPatern)

// if (pointUser >= 1000){
//     console.log('Usuario Vip')
// } else {
//     console.log('Usuario normal')
// }