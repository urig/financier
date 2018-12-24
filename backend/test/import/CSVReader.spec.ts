import { CSVReader } from "../../src/import/CSVReader";

describe("CSVReader", ()=>{
    it("should read the first line", () => {
        /** Arrange **/
        const target = new CSVReader("");
        /** Act  **/
        const actual = target.readFirstLine();
        /** Assert **/
        expect(actual).toBe("");
    })
})