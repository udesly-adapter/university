---
title: Local
description: Install Ghost locally
---

Naturally, if you are just playing around with Ghost platform, you better spin up Ghost locally. You just need a [*supported version*](https://ghost.org/docs/faq/node-versions/) of [**Node.js**](https://nodejs.org/en/), and to install the Ghost-Cli.

To install the Ghost-cli you just need to run this command:

```bash
npm install ghost-cli@latest -g
```

Then you need to create a folder on your OS. And inside that folder run the command:

```bash
ghost install local
```

Once the install is finished you’ll be able to access your new site on ```http://localhost:2368``` and ```http://localhost:2368/ghost``` to access Ghost Admin ✨