<p align="center">
  <img width="200px" src="https://i.postimg.cc/hv15fZR4/nusql-logo.png" alt="nusql logo">
</p>

<h1 align="center">Simplified SQL Query Builder</h1>
<div align="center">
 <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
<img src="https://img.shields.io/npm/v/nusql.svg" alt="npm version">
<img src="https://img.shields.io/npm/dt/nusql.svg" alt="npm downloads">
<img src="https://github.com/othastudio/nusql/actions/workflows/test-package.yml/badge.svg" alt="Testing">
</div>
<p align="center">Simplify your raw SQL usage in Node.js and TypeScript with Nusql. Nusql is a lightweight SQL query builder that allows you to construct complex SQL queries easily and safely.</p>

## Features

- 📝 Build SQL queries programmatically.
- 🛡️ Prevent SQL injection vulnerabilities.
- 🌐 Supports multiple SQL dialects.
- 🤝 Easily integrate with your existing Node.js projects.
- 📦 Lightweight and easy to use.

## Installation

```bash
npm install nusql
```
### Usage
```
const { Nusql } = require('nusql');

const nusql = Nusql.create();

const query = nusql
  .select()
  .from('users')
  .where('age', '>', 18)
  .orderBy('name')
  .build();
```


## Documentation
Check out the <a href="nusql.otha.studio">Nusql documentation</a> for detailed usage instructions, examples, and API reference.

## Contributing
We welcome contributions! If you'd like to contribute to Nusql, please follow our contributing guidelines.

## License
This project is licensed under the MIT License - see the <a href="https://github.com/othastudio/nusql/blob/main/LICENSE">LICENSE</a> file for details.

## Acknowledgments
Special thanks to the open-source community and our contributors for making Nusql better with each release.

## Support
If you encounter any issues, have questions, or need assistance, feel free to open an issue on our GitHub repository.
