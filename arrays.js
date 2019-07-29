var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(chocolateBars, element){
  return [element,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, element]
}

function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element){
  return chocolateBars.shift(element)
}

function removeElementFromBeginningOfArray(chocolateBars, element){
  chocolateBars.slice(1)
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}
