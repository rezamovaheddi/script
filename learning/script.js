const UserList = [{
    name: 'reza',
    family: 'movahedi',
    age: 17,
    city: 'Tehran',
}, {
    name: 'ali',
    family: 'sajadi',
    age: 45,
    city: 'Babol',

}, {
    name: 'Mohammad',
    family: 'saeedinia',
    age: 35,
    city: 'Tehran'

}]

UserList.forEach((user) => {
    console.log(user.name);
})