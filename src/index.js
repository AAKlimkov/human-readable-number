module.exports = function toReadable(number) {
    let before13 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let hundred = before13[parseInt(number / 100)]
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let ten = tens[parseInt(number % 100 / 10)]
    let tenless = (number % 100)

    let one = before13[number % 10]
    let tenPlus = number % 100
if(!number){
    return 'zero'
}
    if (hundred) {
        if (tenless > 19) {
            return `${hundred} hundred ${ten} ${one}`.replace('  ', ' ').trim()
        } else {
            return `${hundred} hundred ${before13[tenless]}`.replace('  ', ' ').trim()
        }
    }
    if (tenless > 19) {
        return ` ${ten} ${one}`.replace('  ', ' ').trim()
    }
    return `${before13[tenless]}`.replace('  ', ' ').trim()


    //     if(tenPlus < 14 ){
    //         console.log(tenPlus)
    //     return `${hundred} hundred ${before13[tenPlus]}`.replace('  ',' ').trim()
    // }

    //      else if (hundred) {
    //         return `${hundred} hundred ${ten} ${one}`.replace('  ',' ').trim()
    //     }
    //     else {

    //         `${ten} ${one}`.replace('  ',' ').trim()
    //     }

}
