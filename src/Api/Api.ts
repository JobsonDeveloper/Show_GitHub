export async function pegarDados(url: string) {
  try {
    const response = await fetch(url)
    const dados = await response.json()
    return dados
  } catch (error) {
    return error
  }
}
