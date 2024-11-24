// cli.js
const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .description('the autoscrip[t  cli tool');

program
  .command("run <file>")
  .description("run an autoscript file")
  .option("-v, --verbose", "displays more info")
  .action(() => {console.log("hello")})

program.option("-c --container", "tells the cli that it is in docker").action(() => {
  setInterval(() => {
  }, 1);
})

  program.parse(process.argv);