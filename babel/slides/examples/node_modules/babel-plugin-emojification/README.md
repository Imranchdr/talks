# babel-plugin-emojification

Turn all binding identifiers to unicode escaped emoji

## Installation

```sh
$ npm install babel-plugin-emojification
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["emojification"]
}
```

### Via CLI

```sh
$ babel --plugins emojification script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["emojification"]
});
```
