function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  kittens.push("Broom")
}

function removeLastKitten(name) {
  kittens.slice(3)
}
