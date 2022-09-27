const specialProps = 'special';

export default function getSpecialAttack(obj) {
  if (Object.prototype.hasOwnProperty.call(obj, specialProps)) {
    const resultArray = new Array();
    const { special } = obj;

    if (special.length) {
      special.forEach((specialElement) => {
        const {
          id,
          name,
          description = 'Описание недоступно',
          icon,
        } = specialElement;

        resultArray.push({
          id,
          name,
          description,
          icon,
        });
      });
    }
    return resultArray;
  } else return [];
}

// export default function getSpecialAttack(obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, specialProps)) {
//     const resultArray = new Array();
//     const {
//       [specialProps]: [...specialObjects],
//     } = obj;

//     if (specialObjects.length) {
//       specialObjects.forEach((specialElement) => {
//         const {
//           id,
//           name,
//           description = 'Описание недоступно',
//           icon,
//         } = specialElement;

//         resultArray.push({
//           id,
//           name,
//           description,
//           icon,
//         });
//       });
//     }
//     return resultArray;
//   } else return [];
// }

// export default function getSpecialAttack(obj) {
//   const resultArray = new Array();
//   const { special } = obj;

//   if (special.length) {
//     for (const specialElement of special) {
//       const {
//         id,
//         name,
//         description = 'Описание недоступно',
//         icon,
//       } = specialElement;

//       resultArray.push({
//         id,
//         name,
//         description,
//         icon,
//       });
//     }
//     return resultArray;
//   } else return [];
// }
