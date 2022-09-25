export default function orderByProps(object, props = []) {
  //   const filteredObject = Object.keys(object)
  //     .sort()
  //     .filter((key) => !props.includes(key))
  //     .reduce((obj, key) => {
  //       obj[key] = object[key];
  //       return obj;
  //     }, {});

  //   const filteredProps = Object.keys(object)
  //     .filter((key) => props.includes(key))
  //     .reduce((obj, key) => {
  //       obj[key] = object[key];
  //       return obj;
  //     }, {});

  //   const mergedPropsObject = Object.assign(filteredProps, filteredObject);
  //   const mergedOrderedArray = Object.entries(mergedPropsObject).map((key) => ({
  //     key: key[0],
  //     value: key[1],
  //   }));

  //   return mergedOrderedArray;

  const sortedArray = Object.entries(object).sort();
  const sortedObject = Object.fromEntries(sortedArray);
  if (props.length) {
    const propsObject = {};

    for (const prop in object) {
      if (Object.prototype.hasOwnProperty.call(object, prop)) {
        props.forEach((el) => {
          if (prop === el) {
            propsObject[prop] = object[prop];
            delete sortedObject[prop];
          }
        });
      }
    }

    const mergedPropsObject = { ...propsObject, ...sortedObject };
    const orderedArray = Object.entries(mergedPropsObject).map((key) => ({
      key: key[0],
      value: key[1],
    }));
    return orderedArray;
  } else {
    const orderedArray = Object.entries(sortedObject).map((key) => ({
      key: key[0],
      value: key[1],
    }));
    return orderedArray;
  }
}
