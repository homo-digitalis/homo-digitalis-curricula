import { IIntent } from "nlp-trainer"
import { CurriculaService } from "./curricula-service"

describe("CurriculaService", () => {

    it("should provide curriculum by id", async () => {
        const curriculaService: CurriculaService = new CurriculaService()

        const exampleIntents: IIntent[] =
            await curriculaService.provideCurriculumByID("exampleMap")

        expect(exampleIntents.length)
            .toEqual(4)
    })

    it("should save and provide a curriculum", async () => {
        const curriculaService: CurriculaService = new CurriculaService()

        await curriculaService.saveCurriculumByID("ATest", [])

        const exampleIntents: IIntent[] =
            await curriculaService.provideCurriculumByID("ATest")

        expect(exampleIntents.length)
            .toEqual(0)

    })

})
