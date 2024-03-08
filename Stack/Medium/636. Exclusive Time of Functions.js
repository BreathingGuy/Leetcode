var exclusiveTime = function(n, logs) {
    const stack = [];
    const result = Array(n).fill(0);

    for (let i = 0; i <= logs.length - 1; i++) {
        let [id, fl, time] = logs[i].split(":");
        id = parseInt(id);
        time = parseInt(time);

        if (fl === 'start') {
            stack.push([id, time]);
        } else {
            const [prev_id, prev_time] = stack.pop();
            const duration = time - prev_time + 1;

            result[id] += duration;

            if (stack.length) {
                const [top_log_id, top_log_time] = stack[stack.length - 1];
                result[top_log_id] -= duration;
            }
        }
    }

    return result;
};

// let n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"];
// n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"];
n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"];

console.log(exclusiveTime(n, logs));

