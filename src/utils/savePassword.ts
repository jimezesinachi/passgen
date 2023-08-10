import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as chalk from 'chalk';

export const savePassword = (password: string) => {
  fs.open(
    path.join(__dirname, '../../', 'passwords.txt'),
    'a',
    666,
    (e, id) => {
      fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log(chalk.green('Password saved to passwords.txt'));
        });
      });
    }
  );
};
