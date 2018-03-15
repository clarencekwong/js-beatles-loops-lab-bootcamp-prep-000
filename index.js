function theBeatlesPlay (ar1,ar2) {
  var ar3 = []
  for (var i = 0; i < ar1.length; i++) {
     ar3.push(`${ar1[i]}` + ' plays ' + `${ar2[i]}`)
  }
  return ar3
}

function