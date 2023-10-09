<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://i.postimg.cc/k5p0W4nX/nuclea-sql.png">
    <source media="(prefers-color-scheme: light)" srcset="https://i.postimg.cc/k5p0W4nX/nuclea-sql.png">
    <img width="50" alt="nuclea-logo" src="https://i.postimg.cc/k5p0W4nX/nuclea-sql.png">
  </picture>
</div>
<div align="center">
  <strong>Simplified SQL Query Building for Node.js</strong>
  <p>Nuclea-SQL is a versatile and lightweight SQL query builder package designed to streamline database interactions in Node.js applications. Whether you're building web applications, APIs, or backend services with Nuclea, Nuclea-SQL can help simplify complex SQL query construction while providing a clean and intuitive interface.</p>
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.2-blue.svg" alt="GitHub stars">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="GitHub">
</div>
</div>

## Example Usage

```
const { nusql } = require('nuclea-sql');

const query = nusql()
  .select('*')
  .from('users')
  .where('age', '>', 25)
  .limit(10)
  .offset(0)
  .build();

const connect = db.query
try{
  console.log(connect['rows'])
}
catch(e){
  console.error(e)
}


console.log(query);
// Output: SELECT * FROM users WHERE age > 25 LIMIT 10 OFFSET 0

```
Nuclea-SQL's concise and readable syntax empowers developers to build complex queries without sacrificing readability.

## Getting Started

To start using Nuclea-SQL in your Nuclea-powered project, follow these simple steps:

1. Installation: 
Install Nuclea-SQL as a dependency in your Node.js project using npm or yarn:
```
npm install nuclea-sql
```
2. Import: 
Import Nuclea-SQL into your project and start building SQL queries with ease:
```
const { nusql } = require('nuclea-sql');
```
3. Documentation: 
Explore the comprehensive Nuclea-SQL Documentation for detailed usage instructions, examples, and advanced features.



## Contributing

We welcome contributions! If you'd like to contribute to this sql builder or report issues, please check our Contribution Guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Thanks to the github community for their valuable contributions.

If you find the nuclea-sql helpful, please consider giving it a ⭐️ on GitHub!

Happy coding! 🔥
