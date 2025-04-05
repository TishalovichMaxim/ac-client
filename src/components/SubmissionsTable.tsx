import { Submission } from "../logic/submissions";

function SubmissionRow(props: {swe: Submission, key: number}) {
    return <tr>
        <th>
            {props.swe.id}
        </th>
        <th>
            {props.swe.problemId}
        </th>
        <th>
            {props.swe.progLangId}
        </th>
        <th>
            {props.swe.estimation?.estimationResId ?? "⏰"}
        </th>
    </tr>
}

function SubmissionsTable(props: {submissions: Submission[]}) {
    return <table>
        <thead>
            <tr>
                <th>id</th>
                <th>problem id</th>
                <th>lang id</th>
                <th>res id</th>
            </tr>
        </thead>
        <tbody>
            {props.submissions.map(swe => <SubmissionRow swe={swe} key={swe.id} />)}
        </tbody>
    </table>
}

export default SubmissionsTable;
