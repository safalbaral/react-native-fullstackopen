const formatNumber = (number) => {
    if (number >= 1000) {
        const shortNumber = parseFloat((number / 1000).toFixed(1))
        return `${shortNumber}k`
    } 
    return number
}

export default formatNumber;