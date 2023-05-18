const url = "https://api.adviceslip.com/advice"

getMessage = () => {
  axios
    .get(url)
    .then((response) => {
      const data = response.data
      const mensagem = data.slip.advice
      message.innerHTML = JSON.stringify(mensagem)
    })
    .catch((error) => console.log(error))
}

button_msg = () => {
  getMessage()
}
