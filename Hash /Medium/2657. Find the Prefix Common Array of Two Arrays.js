var findThePrefixCommonArray = function(A, B) {
    let set = new Set()
    let res = []
    let count = 0

    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) {
            count++
            }
        else set.add(A[i])

        if (set.has(B[i])) {
            count++
            }
        else set.add(B[i])

        res.push(count)
    }
    return res
};