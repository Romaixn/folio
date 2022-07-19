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
    return res
      .status(400)
      .json({ data: 'Merci de remplir tout les champs requis.' })
  }

  const headers = { 'Content-Type': 'application/json' }
  fetch(`${API_URL}/contact`, {
    headers,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((response) => {
      res
        .status(response.status)
        .json(
          'Merci pour votre message, je vous recontacterai dans les plus brefs délais.'
        )
    })
    .catch((error) => {
      console.error(error)
    })
}
