export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query        // 比较获取的数组中有没有新值
  }, SEARCH_MAX_LEN)        // 存储最大值
  storage.set(SEARCH_KEY, searches)    //存入本地存储
  return searches
}