var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element){
  return [element,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return chocolateBars.unshift(element)
}