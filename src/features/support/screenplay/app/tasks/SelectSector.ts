import { Task } from '@serenity-js/core';
import { Click} from '@serenity-js/protractor';
import { SectorPage } from '../pageObjects';

export const SelectSector = {
    of: (sector: string) =>
        Task.where(`#actor click to select ${sector}`,
            Click.on(SectorPage.IT),
    ),
};
