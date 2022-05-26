import { join } from 'path';
import { CASES_PATH, runCommand, cleanCache } from '../shared';

export const build = async (caseName: string) => {
  const casePath = join(CASES_PATH, caseName);

  await cleanCache(casePath);

  // cold boot build
  await runCommand(casePath, 'npm run build', {
    WITH_CACHE: 'false',
  });

  // hot boot build
  await runCommand(casePath, 'npm run build', {
    WITH_CACHE: 'true',
  });
};
