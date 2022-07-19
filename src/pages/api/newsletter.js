const API_URL = process.env.RHERAULT_API_URL

export default async function handler(req, res) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json('Merci de renseigner votre adresse mail')
  }

  const headers = { 'Content-Type': 'application/json' }
  fetch(`${API_URL}/subscriber`, {
    headers,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 201) {
        res
          .status(response.status)
          .json("Vous allez recevoir un mail de confirmation d'ici peu.")
      } else {
        res
          .status(response.status)
          .json('Votre adresse email est déjà inscrite.')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
