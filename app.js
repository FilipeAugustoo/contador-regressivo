const contadorSegundos = document.querySelector('#segundos')
const contadorMinutos = document.querySelector('#minutos')
const contadorHoras = document.querySelector('#horas')
const contadorDias = document.querySelector('#dias')
const contadorProximoAno = document.querySelector('#ano')
const carregandoAnimacao = document.querySelector('#carregando')
const contadorGeral = document.querySelector('#contador')

const anoSeguinte = new Date().getFullYear() + 1
const anoNovo = new Date(`Janeiro 01 ${anoSeguinte} 00:00:00`)

contadorProximoAno.textContent = anoSeguinte

const timerUnit = unit => unit < 10 ? '0' + unit : unit

const inserirValoresContador = ({ dias, horas, minutos, segundos }) => {
    contadorSegundos.textContent = timerUnit(segundos)
    contadorMinutos.textContent = timerUnit(minutos)
    contadorHoras.textContent = timerUnit(horas)
    contadorDias.textContent = timerUnit(dias)
}

const atualizarContador = () => {
    const rodarTimer = new Date()
    const diferenca = anoNovo - rodarTimer
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const minutos = Math.floor(diferenca / 1000 / 60) % 60
    const segundos = Math.floor(diferenca / 1000) % 60

    inserirValoresContador({ dias, horas, minutos, segundos })
}

setTimeout(() => {
    carregandoAnimacao.remove()
    contadorGeral.style.display = 'flex'
}, 1000)

setInterval(atualizarContador, 1000)