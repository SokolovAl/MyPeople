$(document).ready(function() {
    const source = $("#template").html();
    const template = Handlebars.compile(source);
    const randomizer = Math.floor(Math.random() * 100);

    fetch(`https://randomuser.me/api/?results=${randomizer}`)
        .then(response => response.json())
        .then(data => {
            const users = data.results.map(result => {
                return {
                    name: result.name.first + ' ' + result.name.last,
                    email: result.email,
                };
            });

            const renderedHTML = template({ rows: users });
            $("#container").html(renderedHTML);
        })
        .catch(error => console.error(error));
});
