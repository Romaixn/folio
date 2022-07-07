const API_URL = process.env.RHERAULT_API_URL

async function fetchAPI(route = '', { parameters } = {}) {
  const headers = { Accept: 'application/json' }

  const res = await fetch(`${API_URL}/${route}`, {
    headers,
    method: 'GET',
  })

  const json = await res.json()

  if (!json) {
    console.error(json)
    throw new Error('Failed to fetch API')
  }

  return json
}

export async function getAllProjects() {
  const data = await fetchAPI('projects')
  return data
}

export async function getProject(slug) {
  const data = await fetchAPI(`projects/${slug}`)
  return data
}
