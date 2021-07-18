const generateEmployees = employeeData => {
    for (i = 0; employeeData.length > i; i++) {
        if (employeeData[i].role === 'Manager') {
            return `
            <div>
                <div>
                    <h2>${employeeData[i].name}</h2>
                    <h3>${employeeData[i].role}</h3>
                </div>
                <div>
                    <ul style="list-style-type:none;">
                    <li>ID: ${employeeData[i].id}</li>
                    <li>Email:<a href="mailto;${employeeData[i].email}">${employeeData[i].email}</a></li>
                    <li>Office number: ${employeeData[i].office}</li>
                </div>
            </div>
        `
        }
        if (employeeData[i].role === 'Engineer') {
            return `
            <div>
                <div>
                    <h2>${employeeData[i].name}</h2>
                    <h3>${employeeData[i].role}</h3>
                </div>
                <div>
                    <ul style="list-style-type:none;">
                    <li>ID: ${employeeData[i].id}</li>
                    <li>Email:<a href="mailto;${employeeData[i].email}">${employeeData[i].email}</a></li>
                    <li>GitHub:<a href="https://github.com/${employeeData[i].github}">${employeeData.github}</a></li>
                </div>
            </div>
        `
        }
        if (employeeData[i].role === 'Intern') {
            return `
            <div>
                <div>
                    <h2>${employeeData[i].name}</h2>
                    <h3>${employeeData[i].role}</h3>
                </div>
                <div>
                    <ul style="list-style-type:none;">
                    <li>ID: ${employeeData[i].id}</li>
                    <li>Email:<a href="mailto;${employeeData[i].email}">${employeeData[i].email}</a></li>
                    <li>School: ${employeeData[i].school}</li>
                </div>
            </div>
        `
        }
        console.log(employeeData[i].role)
    }
}

module.exports = employeeData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team</title>
    </head>
    <body>
        <header><h1>Team</h1></header>
        <main>
        ${generateEmployees(employeeData)}
        </main>
    </body>
    </html>
    `
}