function findMatching(array, name){
    return array.filter((driver) => {
       return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(array, name){
    name = name.toLowerCase()
    return array.filter((driver)=>{
        driver = driver.toLowerCase()
        return name[0] == driver[0] && name[1] == driver[1]
    })

}

function matchName(array, name){
    return array.filter((driver) => {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}