export interface ResultProps {
    serachString: string;
    results: Array<ResultType>;
    updateResults: any
}
export interface ResultType {
    id: string;
    name: string;
    email: string;
    role: string;
    checked?: boolean
}