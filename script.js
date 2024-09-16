let name = prompt('qual o nome do turista?')
let visit = prompt('já visitou alguma cidade?')
let city = []
let numberOfcities = 0


while (visit == 'sim') {
  city[numberOfcities] = prompt('qual o nome a cidade visitada ?')
  numberOfcities += 1

  visit = prompt('já visitou alguma outra cidade?')

}
alert(name + ' visitou ' + numberOfcities + ' cidades: ' + city)