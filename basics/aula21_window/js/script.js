alert('Bem vindo ao JS') // window.alert() existe um objeto window
const help = confirm('Quer usar lógica desnecessária pra contas simples pq o JS n sabe induzir um número?')
if (help) {
  const num1 = parseFloat(prompt('insira primeiro numero'))
  const num2 = Number(prompt('insira segundo numero'))
  alert(`o resultado é ${num1 + num2}`)
}
