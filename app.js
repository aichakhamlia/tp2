const express = require('express');
const app = express();
const port =3000;
app. use(express.json());
app.use(express.urlencoded({extended: true}));
let users= [
    { id: 1, name: 'aicha', email:'khamliaiacha14@gmail.com' },
    { id: 2, name: 'loulou', email: 'loulou@gmail.com' }
];
app.get("/users", (req,res) =>
    res.json(users)
);

// GET a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
    });


// POST a new user
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
    });




app.listen(port, ()=> {
    console.log(`application exemple a l'ecoute sur le pc`)
});

