const router = require('express').Router()

//rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})


module.exports = router 