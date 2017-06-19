

// export default {
//   options: [6, 8, 16, 20, 24, 32, 48, 64, 96, 128],
//   manual: 'number'
// }

export default {
  fontSize: v => 'fs' + v,
  textAlign: v => 't' + v[0],
  textTransform: v => 'tt' + v[0],
  fontFamily: v => v.toLowerCase().replace(/ /g, '-'),
}