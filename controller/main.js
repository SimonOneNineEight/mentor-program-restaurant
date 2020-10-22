const db = require('../models')
const Prize = db.Prize
const User = db.User

const mainController = {
  init: (req, res) => {
    Prize.findAll().then(prizes => {
      res.render('main', {
        prizes
      })
    })
  },

  getAll: (req, res) => {
    Prize.findAll().then(prizes => {
      res.json(prizes)
    })
  },
}

module.exports = mainController