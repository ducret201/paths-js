import Path from './path'
import O from './ops'

export default function({points, closed}) {
  let l = points.length
  let head = points[0]
  let tail = points.slice(1, l + 1)
  let path = tail.reduce(function(pt, p) {
    return pt.lineto(...p)
  }, Path().moveto(...head));

  return {
    path: closed ? path.closepath() : path,
    centroid: O.average(points)
  }
}
