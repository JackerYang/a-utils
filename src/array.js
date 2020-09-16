/**
 * 在一个对象数组中，根据对象的某一个键的值找到该对象
 * @param arr
 * @param key
 * @param val
 * @return item
 */
const findItemInArrayByKey = (arr, key, val) => {
    let item = null
    let len = arr.length
    for (let i = 0; i < len; i ++) {
        if (arr[i][key] === val) {
            item = arr[i]
            break
        }
    }
    return item
}

/**
 * 判断数组是否为空
 * @param arr
 * @return boolean
 */
const isEmptyArray = arr => {
    return arr.length === 0
}