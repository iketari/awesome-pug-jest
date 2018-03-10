# awesome-pug-jest

A Jest transform that compiles .pug files as template functions and includes pug utils


Add to you `package.json`:
```
{
  "jest": {
    "transform": {
      "\\.(pug)$": "awesome-pug-jest"
    }
  }
}
```