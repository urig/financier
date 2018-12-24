export class CSVReader {
    pathToCSVFile: string;

    constructor(pathToCSVFile: string) {
        this.pathToCSVFile = pathToCSVFile;
    }

    readFirstLine(): string {
        return "";
    }
}