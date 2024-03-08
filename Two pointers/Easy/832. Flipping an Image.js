/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let left; 
    let right;

    image.forEach ((a) => {
        left = 0;
        right = a.length - 1;

        while (left <= right) {

            if (a[right] == 0) {

                if (a[left] == 0) {
                    a[right] = 1;
                } else {
                    a[right] = 0;
                }

                a[left] = 1;
            } else {

                if (a[left] == 0) {
                    a[right] = 1;
                } else {
                    a[right] = 0;
                }

                a[left] = 0;
            }

            right--;
            left++;
        }
    });

    return image;
};