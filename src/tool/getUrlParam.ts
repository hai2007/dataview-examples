interface FormatUrl {
    router: Array<string>,
    params: any
}

export default function (): FormatUrl {

    let splitTemp = window.location.href.split('?')
    let routerTemp = (splitTemp[0] + "#").split("#")[1].replace(/^\//, '').replace(/\/$/, '').split('/')
    let paramTemp = splitTemp[1] || ""

    let paramResult: any, paramArray: Array<string>
    if (paramTemp == "") {
        paramResult = {}
    } else {
        paramArray = paramTemp.split("&"), paramResult = {}
        paramArray.forEach((item: string) => {
            let temp = item.split("=")
            paramResult[temp[0]] = temp[1]
        })
    }

    return {
        router: routerTemp[0] == '' ? [] : routerTemp,
        params: paramResult
    }

}