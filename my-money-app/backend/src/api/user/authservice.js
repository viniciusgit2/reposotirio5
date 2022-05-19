const { env } = require("process")
const { json } = require("stream/consumers")
const_=require(loaddash)
const jwt=require(jsonwebtoken)
const env=requere (env)
const user=requere(user)
const login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''
  User.findOne({email}, (err, user) => {
  if(err) {
  return sendErrorsFromDB(res, err)
  } else if (user && bcrypt.compareSync(password, user.password)) {
  const token = jwt.sign(user, env.authSecret, {
  expiresIn: "1 day"
  })
  const { name, email } = user
  res.json({ name, email, token })
  } else {
  return res.status(400).send({errors: ['Usuário/Senha inválidos']})
  }
  })
}

