export default function matrix (size) {
  let matrix = []

  for (var y = 0; y < size; y++) {
    matrix[y] = []

    for (var x = 0; x < size; x++) {
      matrix[y].push(0)
    }
  }

  return matrix
}
