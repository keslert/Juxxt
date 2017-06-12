
const conversion = {
  '1x1': '100P',
  '16x9': '56p25P',
  '9x16': '177P',
  '4x3': '75P',
  '3x4': '133p33P',
  '6x4': '66p66P',
  '4x6': '150P',
  '8x5': '62p5P',
  '5x8': '160P',
  '7x5': '71p42P',
  '5x7': '140P',
}

export default {
  aspectRatio: v => 'pb-' + conversion[v],
}