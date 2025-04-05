import { Config } from "../../config";
import { getSubmissions, Submission } from "../submissions";

let socket: WebSocket

async function onAppear(problemId: number, setSubmissions: (sumbissions: Submission[]) => void) {
    socket = new WebSocket(`ws://${Config.SubmissionsUrl}/test`);

    socket.addEventListener("message", (event) => {
        console.log(`Retrieved from server: ${event.data}`)
    });

    const submissions = await getSubmissions(problemId, (_) => {})
    if (submissions) {
        setSubmissions(submissions)
    }

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
