const express = require("express")
const Producto = require("./models/Producto.js")
const cors = require('cors');
const sequelize = require("./db/connection.js");

const app= express()
app.use(express.json())

app.use(cors({ origin: 'http://localhost:3000' }));


//suma de todos los valores por categoria


app.get('/suma-valores', async(req,res)=>{
    try {
        const result = await Producto.findAll({
            attributes: ['categoryCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Sumatoria de valores']
            ],
            group: ['categoryCode']
        })

        res.json(result)
    } catch (error) {
        res.status(500).json({error: "ocurrió un error"+ error});
    }
})

//conteo de productos por categoría

app.get('/cuenta-productos', async(req,res)=>{
    try {
        const result = await Producto.findAll({
            attributes: ['categoryCode',
                [sequelize.fn('COUNT', sequelize.col('name')), 'cantidad de productos']
            ],
            group: ['categoryCode']
        })

        res.json(result)
    } catch (error) {
        res.status(500).json({error: "ocurrió un error"+ error});
    }
})

//promedio de valores por categoria

app.get('/avg-valores', async(req,res)=>{
    try {
        const result = await Producto.findAll({
            attributes: ['categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedio valores']
            ],
            group: ['categoryCode'],
            order:['categoryCode']
        })

        res.json(result)
    } catch (error) {
        res.status(500).json({error: "ocurrió un error"+ error});
    }
})

//Valor máximo de una categoria

app.get('/max-valor/:category', async(req,res)=>{
    const {category} = req.params;

    try {
        const result = await Producto.findAll({
            attributes: ['categoryCode',
                [sequelize.fn('MAX', sequelize.col('value')), 'Valor máximo']
            ],
            where: {categoryCode:category},
            order:['categoryCode']
        })

        res.json(result)
    } catch (error) {
        res.status(500).json({error: "ocurrió un error"+ error});
    }
})



app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})
