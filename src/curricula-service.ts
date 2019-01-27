import { IIntent, NLPTrainer } from "nlp-trainer"

export class CurriculaService {

    private readonly nlpTrainer: NLPTrainer

    public constructor() {
        this.nlpTrainer = new NLPTrainer()
    }

    public async provideCurriculumByID(id: string): Promise<IIntent[]> {
        return this.nlpTrainer.getIntents(id)
    }

    public async  saveCurriculumByID(id: string, intents: IIntent[]): Promise<void> {
        await this.nlpTrainer.saveIntents(id, intents)
    }

}
