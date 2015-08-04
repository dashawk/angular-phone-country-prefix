# Usage #

First, include as dependency in your angular module.

```js
angular.module('myApp', ['phonePrefix']);
```

It will accept a list of countries. In your controller, declare a new scope variable.
The countryID is important since it is used to select our country flag via css.

I got the css from here (forgot the repo name). Contact me if anyone knows the source repo for the flags and the css.

```js
$scope.countries = [
	{ countryID: 'au', name: 'Australia', prefix: '+61' },
	{ countryID: 'us', name: 'United States', prefix: '+1' }
];
```

It can also accept a phone prefix to pre-select an item in the list
```js
$scope.currentPrefix = '+61';
```

Then in the DOM

```html
<phone-prefix ng-model="currentPrefix" countries="countries"></phone-prefix>
```

# Contribution #
Fork this repo and install the dependencies
```cli
npm install
bower install
```
