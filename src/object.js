/**
 * 判断对象是否为空
 * @param obj
 * @return boolean
 */
const isEmptyObject = obj => {
    return JSON.stringify(obj) === "{}"
}