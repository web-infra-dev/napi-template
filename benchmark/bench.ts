import { Suite } from 'benchmark'
import chalk from "chalk";

import { add } from "../node"

const s = new Suite("bench")

s
  .add('add#native', () => {
    add(1, 2)
  })
  .add('add#node', () => {
    const res = 1 + 2
  })
  .on('cycle', function (event: Event) {
     console.info(String(event.target));
  })
  .on('complete', function (this: any) {
     console.info(`${this.name} bench suite: Fastest is ${chalk.green(this.filter('fastest').map('name'))}\n\n`);
  })
  .run();