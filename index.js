const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

 
// const findMatching = drivers.filter(string => string.length > 5)


// console.log(findMatching)

const findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}



const fuzzyMatch = (array, string) => {
    return array.filter(driver => {
        if (driver.startsWith(string)) {
            return driver;
        }
    })
}

const matchName = (array, string) => {
    return array.filter(driver => driver.name === string)
}

console.log(matchName(drivers, "Sally"))