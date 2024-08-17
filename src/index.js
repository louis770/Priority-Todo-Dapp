const { hex2string, string2hex } = require("./utils");
const { createTask, updateTask, deleteTask, getTasks } = require("./task-priority-controller");

const rollupServer = process.env.ROLLUP_HTTP_SERVER_URL;
console.log("HTTP rollup server URL is " + rollupServer);

async function handleAdvance(data) {
    console.log("Received advance request data " + JSON.stringify(data));
    const { metadata, payload } = data;
    const sender = metadata.msg_sender;

    const actionData = hex2string(payload);
    const [action, ...params] = actionData.split(" ");

    let response;

    if (action === "create") {
        response = createTask(sender, ...params);
    } else if (action === "update") {
        response = updateTask(...params);
    } else if (action === "delete") {
        response = deleteTask(...params);
    } else {
        response = "Invalid action!";
    }

    await fetch(`${rollupServer}/notice`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ payload: string2hex(response) })
    });

    return "accept";
}

async function handleInspect(data) {
    console.log("Received inspect request data " + JSON.stringify(data));

    const action = hex2string(data.payload);

    let response;
    if (action === "list") {
        response = JSON.stringify(getTasks());
    } else {
        response = "Invalid action!";
    }

    await fetch(`${rollupServer}/report`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ payload: string2hex(response) })
    });

    return "accept";
}

const handlers = {
    advance_state: handleAdvance,
    inspect_state: handleInspect
};

(async () => {
    while (true) {
        const finishReq = await fetch(`${rollupServer}/finish`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "accept" })
        });

        if (finishReq.status === 202) {
            console.log("No pending rollup request, trying again");
        } else {
            const rollupReq = await finishReq.json();
            const handler = handlers[rollupReq.request_type];
            await handler(rollupReq.data);
        }
    }
})();
