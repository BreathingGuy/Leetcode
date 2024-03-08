
var trap = function(height) {
    let left = 0;
    let right = 1;
    let water = 0;

    while (left <= height.length) {

        while (height[right] < height[left]) {
            right++;

            if (right >= height.length) {
                left++;
                right = left + 1;
            }
        }

        for (let i = left + 1; i < right; i++) {
            water += height[left] - height[i];
        }

        left = right;
        right++;
    }

    if (water === 0) {
        height.reverse();

        left = 0;
        right = 1;
        water = 0;

        while (left <= height.length) {

            while (height[right] < height[left]) {
                right++;
    
                if (right >= height.length) {
                    left++;
                    right = left + 1;
                }
            }
    
            for (let i = left + 1; i < right; i++) {
                water += height[left] - height[i];
            }
    
            left = right;
            right++;
        }

    }

    return water;
};