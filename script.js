document.querySelector('.get-users').addEventListener('click', getUsers);
document.querySelector('.alert').addEventListener('click', anAlert);

function anAlert() {
    alert('It Works');
}

function getUsers() {
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `
            <li><a href="${user.html_url}"><img src="${user.avatar_url}" alt="${user.login}"></a></li>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}