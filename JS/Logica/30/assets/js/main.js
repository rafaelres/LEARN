// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle:'full', timeStyle:'short'})

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
//  h1.innerHTML = data.toLocaleString('pt-BR', opcoes)

 const h1 = document.querySelector('.container h1')
 const date = new Date()

 function getWeekDay(week) {
     const weekdays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
    'sexta-feira', 'sábado'];
    return weekdays[week]
}

 function getMonth(month) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio','junho', 'julho',
 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ];

    return months[month]

     }

 function zeroAEsquerda (num) {
     return num >= 10 ? num : `0${num}`
 }

   function createData (date) {
       const week = date.getDay();
       const month = date.getMonth();

       const weekday = getWeekDay(week)
       const months = getMonth(month)

       return (
         `${weekday}, ${date.getDate()} de ${month} ` +
         `de ${date.getFullYear()}` +
         ` ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
         );
   }

  h1.innerHTML = createData(date)



// const h1 = document.querySelector('.container h1')
// const date = new Date()

// function getWeekDay(week) {
//     let weekday;

//     switch (week) {
//         case 0:
//             weekday = 'domingo';
//             return weekday;
//         case 1:
//             weekday = 'segunda-feira'
//             return weekday;
//         case 2:
//             weekday = 'terça-feira'
//             return weekday;
//         case 3:
//             weekday = 'quarta-feira';
//             return weekday;
//         case 4:
//             weekday = 'quinta-feira'
//             return weekday;
//         case 5:
//             weekday = 'sexta-feira';
//             return weekday;
//         case 6:
//             weekday = 'sábado';
//             return weekday;
//         default:
//             weekday = '';
//             return weekday;

//     }
// }

// function getMonth(numMes) {
//     let month;

//     switch (numMes) {
//         case 0:
//             month = 'janeiro';
//             return month;
//         case 1:
//             month = 'fevereiro'
//             return month;
//         case 2:
//             month = 'março'
//             return month;
//         case 3:
//             month = 'abril';
//             return month;
//         case 4:
//             month = 'maio'
//             return month;
//         case 5:
//             month = 'junho';
//             return month;
//         case 6:
//             month = 'julho';
//             return month;
//         case 7:
//             month = 'agosto';
//             return month;
//         case 8:
//             month = 'setembro';
//             return month;
//         case 9:
//             month = 'outubro';
//             return month;
//         case 10:
//             month = 'novembro';
//             return month;
//         case 11:
//             month = 'dezembro';
//             return month;
//         default:
//             month = '';
//             return month;

//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`
// }

//   function createData (date) {
//       const week = date.getDay();
//       const numMes = date.getMonth();

//       const weekday = getWeekDay(week)
//       const month = getMonth(numMes)

//       return (
//         `${weekday}, ${date.getDate()} de ${month} ` +
//         `de ${date.getFullYear()}` +
//         ` ${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`
//         );
//   }

//  h1.innerHTML = createData(date)