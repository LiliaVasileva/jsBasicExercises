function projectCreation(input){
    let architect_name = input[0]
    let count_projects = Number(input[1])
    let projects_hours = count_projects * 3
    let result = `The architect ${architect_name} will need ${projects_hours} hours to complete ${count_projects} project/s.`
    console.log(result)

}

projectCreation(["George ","4 "])
projectCreation(["Sanya ","9 "])