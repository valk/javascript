# eslint-config-seekingalpha-qa

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install eslint@7.5.0 eslint-plugin-protractor@2.1.1 eslint-plugin-mocha@7.0.1 --save-dev

or **Yarn**:

    yarn add --dev eslint@7.5.0 eslint-plugin-protractor@2.1.1 eslint-plugin-mocha@7.0.1


Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-qa --save-dev

For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-qa

## Usage

This shareable config includes all rules from following plugins:

* [eslint-plugin-protractor](https://github.com/alecxe/eslint-plugin-protractor)
* [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)

Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the relevant .eslintrc.js configuration in your project with `seekingalpha-qa` rules:

```javascript
{
  extends: [
    'seekingalpha-qa'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)

