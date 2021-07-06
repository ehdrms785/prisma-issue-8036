## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/8036


## Version information

```
Environment variables loaded from prisma\.env
prisma               : 2.23.0-dev.25
@prisma/client       : 2.23.0-dev.25
Current platform     : windows
```

## Steps

1. Clone the repository and install deps using `yarn`
2. Replace mysql creds in `prisma/.env`
3. Run `npx prisma db push`
4. Run `yarn start` to reproduce

