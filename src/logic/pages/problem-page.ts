import { CONFIG } from "../../config";

let socket: WebSocket

function onAppear() {
    socket = new WebSocket(`ws://${CONFIG.SUBMISSIONS_URL}/test`);

    socket.addEventListener("message", (event) => {
        console.log(`Retrieved from server: ${event.data}`)
    });

    return () => {
        if (socket.readyState != socket.CLOSED) {
            socket.close()
        }
    }
}

function onCodeSubmit(code: string) {
    socket.send(JSON.stringify({ code }))
}

export { onAppear, onCodeSubmit }
