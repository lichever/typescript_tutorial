/**
 * A class that represents a RangeList supporting add, remove, and print ranges as string operations.
 * 
 */
class RangeList {
    private ranges: Array<[number, number]>;

    constructor() {
        this.ranges = [];
    }

    /**
     * Adds a range to the list with time complexity O(n)
     * @param newRange - Array of two integers that specify beginning and end of range.
     */
    add(newRange: [number, number]): void {
        let left = newRange[0];
        let right = newRange[1];

        if (left >= right) {
            return;
        }

        let res: Array<[number, number]> = [];
        let isInserted: boolean = false;
        for (const range of this.ranges) {
            let l = range[0];
            let r = range[1];
            // no intersection
            if (r < left) {
                res.push([l, r]);
            } else if (right < l) {
                if (!isInserted) {
                    res.push([left, right]);
                    isInserted = true;
                }
                res.push([l, r]);
            } else {
                left = Math.min(left, l);
                right = Math.max(right, r);
            }
        }
        if (!isInserted) {
            res.push([left, right]);
        }
        this.ranges = res;
    }

    /**
     * Removes a range from the list with time complexity O(n)
     * @param DelRange - Array of two integers that specify beginning and end of range.
     */
    remove(DelRange: [number, number]): void {
        let left = DelRange[0];
        let right = DelRange[1];

        if (left >= right) {
            return;
        }

        let res: Array<[number, number]> = [];

        for (const range of this.ranges) {
            let l = range[0];
            let r = range[1];
            // no intersection
            if (r < left || right < l) {
                res.push([l, r]);
            } else {
                // intersection and check splitting
                if (l < left) {
                    res.push([l, left]);
                }
                if (right < r) {
                    res.push([right, r]);
                }
            }
        }
        this.ranges = res;
    }

    /**
     * Convert the list of ranges in the range list to a string with time complexity O(n)
     * print out a string representation of the range list
     */
    toString(): void {
        const rangesString = this.ranges
            .map((range) => `[${range[0]}, ${range[1]})`)
            .join(" ");
        console.log(rangesString);
    }
}



// test cases
const rl = new RangeList();
rl.add([1, 5]);
rl.toString(); //output:‍‌‍‍‍‌‍‌‍‌‍‌‍‍‌‍‌ [1, 5)
rl.add([10, 20]);
rl.toString(); //output: [1, 5) [10, 20)
rl.add([20, 20]);
rl.toString(); //output: [1, 5) [10, 20)
rl.add([20, 21]);
rl.toString(); //output: [1, 5) [10, 21)
rl.add([2, 4]);
rl.toString(); //output: [1, 5) [10, 21)
rl.add([3, 8]);
rl.toString(); //output: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.toString(); //output: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.toString(); //output: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.toString(); //output: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.toString(); //output: [1, 3) [19, 21)