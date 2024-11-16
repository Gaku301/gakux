
/**
 * 酒情報を取得する
 * @param {String} selected 
 * @returns 
 */
export const getSakeInfo = (selected) => {
  let sakeInfo = {};
  try {
    sakeInfo = sakeList[selected];
  } catch (err) {}

  return sakeInfo;
}

const path = 'models/';
// 酒リスト
const sakeList = {
  'zaku': {
    name: '作 / 穂乃智',
    enName: 'Zaku / Ho No Tomo',
    src: `${path}zaku.glb`,
  },
  'houraisen': {
    name: '蓬莱泉 / 和',
    enName: 'Houraisen / Wa',
    src: `${path}houraisen.glb`,
  }
}