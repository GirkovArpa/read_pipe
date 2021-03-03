import { spawn } from '@sys';
import { read_pipe } from './read_pipe.js';

test();

async function test() {
  const chrome = spawn([
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '--remote-debugging-port=0'
  ], { stderr: 'pipe' });

  for await (const line of read_pipe(chrome.stderr)) {
    console.log(`“${line}”`);
  }
}