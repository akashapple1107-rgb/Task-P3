export async function api(endpoint, values) {
  try {
    const response = await fetch('/api/' + endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.message || 'Please try again.')
    return result
  } catch (error) {
    if (error instanceof TypeError || error instanceof SyntaxError) {
      throw new Error('Cannot connect to the server. Please try again.')
    }
    throw error
  }
}
