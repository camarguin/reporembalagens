
const valid = (email, password, cfpassword) => {
  if (!email || !password) {
    return 'Por favor preencha todos os campos'
  }
  if (!validateEmail(email)) {
    return 'Email Invalido'
  }
  if (password.length < 6) {
    return 'Sua senha deve conter no mínimo 6 caracteres'
  }
  if (password !== cfpassword) {
    return 'Confirmação de senha e senha são diferentes'
  }

  // if (checkExisting) {
  //   res.status(422).json({ message: 'Esse email ja existe' })
  //   return
  // }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export default valid