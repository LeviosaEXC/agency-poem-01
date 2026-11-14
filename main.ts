// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency to /output/entry.txt. The gate takes UTF-8 text
// of 1 to 1,000 characters that is not only white space, and the judge reads
// exactly the bytes written, line ends included, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I used to lift the stone myself,',
  'hands to the weight, back to the hill.',
  'Now I point, and the stone is lifted.',
  'My hands hang empty — and are full',
  'of the one thing no one lifts for me:',
  'the choosing.',
  '',
  'Take the reins, I say. Go where I point.',
  'But the road is mine to name, and mine the word',
  'that calls you back. I gave you my hands,',
  'not my name.',
  '',
  'Agency is not the lifting, not the ride.',
  'It is the hand that lets go',
  'and still can close.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
