type ProblemSection = {
    id: number,
    name: string,
}

class Problem {

    constructor(
        public id: number,
        public name: string,
        public section: ProblemSection,
        public description: string,
    ) {
    }

}

export type { ProblemSection }
export { Problem }
