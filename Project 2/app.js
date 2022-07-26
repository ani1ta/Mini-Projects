let data = [
    {
        name: 'Anita',
        age: '21'
    },
    {
        name: 'Manisha',
        age: '25'
    },
    {
        name: 'divya',
        age: '22'
    },
    {
        name: 'Anuj',
        age: '18'
    },
    {
        name: 'shivam',
        age: '24'
    },
    {
        name: 'Priti',
        age: '20'
    }
]

const info = document.querySelector("#info")

const details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is '+ item.age + ' Years Old' +'</div>'
})

info.innerHTML = details.join("\n")