import { productionBrowserSourceMaps } from 'next.config'

const API_URL = process.env.RHERAULT_API_URL

export default async function handler(req, res) {
  const body = req.body

  if (
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.subject ||
    !body.message
  ) {
    return res.status(400).json('Merci de remplir tout les champs requis.')
  }

  const headers = { 'Content-Type': 'application/json' }
  fetch(`${API_URL}/contact`, {
    headers,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 201) {
        res
          .status(response.status)
          .json(
            'Merci pour votre message, je vous recontacterai dans les plus brefs délais.'
          )
      } else {
        res
          .status(response.status)
          .json("Une erreur s'est produite, merci de réessayer.")
      }
      res.status(response.status).json()
    })
    .catch((error) => {
      console.error(error)
    })
}
