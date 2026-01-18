import chalk from 'chalk';

console.log(chalk.blue.italic('Hello world!'));
const log = console.log;

// Combine styled and normal strings
log(chalk.blue.bold.bgYellow('Hello') + chalk.blue.bold('World') + chalk.red.bold.bgCyan('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgYellow('ptnxlo'));

console.log(chalk.green("Green text"));
console.log(chalk.red("Red text"));
console.log(chalk.blue("Blue text"));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));