# Network Request List

A Node.js library to get a list of all the requests made by a website

Uses [puppeteer](https://github.com/puppeteer/puppeteer) so will be quite a large install

## Install

```
npm install network-request-list
```

## Usage

```js
import getRequests from "network-request-list";
const requests = await getRequests("https://samrobbins.uk");

console.log(requests);
```
