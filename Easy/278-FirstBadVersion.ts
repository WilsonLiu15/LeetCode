var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1, right = n

        while(left <= right) {
            const mid = Math.floor((left + right)/2)
            const isBadVer = isBadVersion(mid)

            if(isBadVer && !isBadVersion(mid-1)) {
                return mid
            } else if (isBadVer) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return 1
    };
};