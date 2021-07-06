## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/7007


## Version information

```
Environment variables loaded from prisma\.env
prisma               : 2.23.0-dev.25
@prisma/client       : 2.23.0-dev.25
Current platform     : windows
Query Engine         : query-engine 936e9b9eb66e6b265d1d25f687dd97f6ff479d7f (at node_modules\@prisma\engines\query-engine-windows.exe)
Migration Engine     : migration-engine-cli 936e9b9eb66e6b265d1d25f687dd97f6ff479d7f (at node_modules\@prisma\engines\migration-engine-windows.exe)
Introspection Engine : introspection-core 936e9b9eb66e6b265d1d25f687dd97f6ff479d7f (at node_modules\@prisma\engines\introspection-engine-windows.exe)
Format Binary        : prisma-fmt 936e9b9eb66e6b265d1d25f687dd97f6ff479d7f (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash : 936e9b9eb66e6b265d1d25f687dd97f6ff479d7f
Studio               : 0.391.0
```

## Steps

1. Clone the repository and install deps using `yarn`
2. Replace mysql creds in `prisma/.env`
3. Run `npx prisma db push`
4. Run `yarn start` to reproduce

