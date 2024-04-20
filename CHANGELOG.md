# Changelog


## v0.0.2

[compare changes](https://github.com/becem-gharbi/wip/compare/v0.0.1...v0.0.2)

### 🚀 Enhancements

- Implement teams for project sharing ([#2](https://github.com/becem-gharbi/wip/pull/2))
- Implement chat for realtime text messaging ([#3](https://github.com/becem-gharbi/wip/pull/3))
- **chat:** Implement media messaging ([18eb508](https://github.com/becem-gharbi/wip/commit/18eb508))

### 🩹 Fixes

- Close media stream on unmount ([55ce0e9](https://github.com/becem-gharbi/wip/commit/55ce0e9))

### 💅 Refactors

- Create separate components for modal content ([ac64349](https://github.com/becem-gharbi/wip/commit/ac64349))
- Add close button to modals ([f767775](https://github.com/becem-gharbi/wip/commit/f767775))
- Add placeholders for inputs ([ca0c933](https://github.com/becem-gharbi/wip/commit/ca0c933))
- **chat:** Create Media tab ([0136dd6](https://github.com/becem-gharbi/wip/commit/0136dd6))
- Allow using custom peerjs server ([47b84b6](https://github.com/becem-gharbi/wip/commit/47b84b6))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem <becem.gharbi@live.com>

## v0.0.1


### 🚀 Enhancements

- Implement basic UI ([#1](https://github.com/becem-gharbi/wip/pull/1))
- **data:** Implement Project CRUD ([265d8dc](https://github.com/becem-gharbi/wip/commit/265d8dc))
- Create `useEntity` for smart data fetching and state management ([6398637](https://github.com/becem-gharbi/wip/commit/6398637))
- **data:** Implement Issue CRUD ([7a41736](https://github.com/becem-gharbi/wip/commit/7a41736))
- **kanban:** Implement moving by column ([cb80627](https://github.com/becem-gharbi/wip/commit/cb80627))
- Add project icon input ([9aa1dd1](https://github.com/becem-gharbi/wip/commit/9aa1dd1))
- Add project description input ([1cba73e](https://github.com/becem-gharbi/wip/commit/1cba73e))
- Add Issue description input ([d530220](https://github.com/becem-gharbi/wip/commit/d530220))
- Add Issue labels ([8589d7e](https://github.com/becem-gharbi/wip/commit/8589d7e))

### 🔥 Performance

- **schema:** Replace `uuid` with `cuid` ([2767f20](https://github.com/becem-gharbi/wip/commit/2767f20))
- Improve useEntity ([45950c4](https://github.com/becem-gharbi/wip/commit/45950c4))
- Change Issue id type to number ([d07c346](https://github.com/becem-gharbi/wip/commit/d07c346))

### 🩹 Fixes

- **base:** Validate name of profile update ([659bba0](https://github.com/becem-gharbi/wip/commit/659bba0))

### 💅 Refactors

- **kanban:** Display column size ([c1047bd](https://github.com/becem-gharbi/wip/commit/c1047bd))
- Create Kanban layer ([d1e5391](https://github.com/becem-gharbi/wip/commit/d1e5391))
- Limit text input length ([a27bbf8](https://github.com/becem-gharbi/wip/commit/a27bbf8))
- Collapse delete section by default ([cb19560](https://github.com/becem-gharbi/wip/commit/cb19560))

### 📖 Documentation

- Add features and requirements ([2c0fac0](https://github.com/becem-gharbi/wip/commit/2c0fac0))

### 🌊 Types

- **useEntity:** Infer all types ([d0e1368](https://github.com/becem-gharbi/wip/commit/d0e1368))

### 🏡 Chore

- Prepare project ([12bffe0](https://github.com/becem-gharbi/wip/commit/12bffe0))
- **schema:** Define data models ([cab40e0](https://github.com/becem-gharbi/wip/commit/cab40e0))
- **schema:** Allow cascade delete ([9c82a9b](https://github.com/becem-gharbi/wip/commit/9c82a9b))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem <becem.gharbi@live.com>

## v0.1.3

[compare changes](https://github.com/becem-gharbi/prisma-cloudflare/compare/v0.1.2...v0.1.3)

### 🚀 Enhancements

- Add spa loading animation ([03abe6b](https://github.com/becem-gharbi/prisma-cloudflare/commit/03abe6b))

### 🔥 Performance

- Download icons ([4788e2b](https://github.com/becem-gharbi/prisma-cloudflare/commit/4788e2b))

### 💅 Refactors

- Disable ssr on base layer ([45c4793](https://github.com/becem-gharbi/prisma-cloudflare/commit/45c4793))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v0.1.2

[compare changes](https://github.com/becem-gharbi/prisma-cloudflare/compare/v0.1.1...v0.1.2)

### 🚀 Enhancements

- Add `migrate` scripts to simplify db migrations ([1376780](https://github.com/becem-gharbi/prisma-cloudflare/commit/1376780))
- Show naiveui dialog on account delete ([c5368b6](https://github.com/becem-gharbi/prisma-cloudflare/commit/c5368b6))

### 💅 Refactors

- Increase dropdown min width ([066f460](https://github.com/becem-gharbi/prisma-cloudflare/commit/066f460))

### 📖 Documentation

- Update README ([ecf255e](https://github.com/becem-gharbi/prisma-cloudflare/commit/ecf255e))

### 🏡 Chore

- **migrations:** Try alter table ([5f80af4](https://github.com/becem-gharbi/prisma-cloudflare/commit/5f80af4))
- Update wrangler.toml ([64cd191](https://github.com/becem-gharbi/prisma-cloudflare/commit/64cd191))
- Allow override database name on `migrate:apply` script ([ebfd367](https://github.com/becem-gharbi/prisma-cloudflare/commit/ebfd367))
- Add repo link ([c87d264](https://github.com/becem-gharbi/prisma-cloudflare/commit/c87d264))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v0.1.1


### 🚀 Enhancements

- Add account delete option ([9c54e2f](https://github.com/becem-gharbi/prisma-cloudflare/commit/9c54e2f))

### 🩹 Fixes

- **prisma:** Use server middleware instead of hook ([56e4624](https://github.com/becem-gharbi/prisma-cloudflare/commit/56e4624))

### 💅 Refactors

- No significant change ([12f3a25](https://github.com/becem-gharbi/prisma-cloudflare/commit/12f3a25))
- Create base layer ([425b95a](https://github.com/becem-gharbi/prisma-cloudflare/commit/425b95a))

### 🏡 Chore

- **prisma:** Change provider to sqlite ([7263f20](https://github.com/becem-gharbi/prisma-cloudflare/commit/7263f20))
- **d1:** Setup config and run migrations ([a7f17bd](https://github.com/becem-gharbi/prisma-cloudflare/commit/a7f17bd))
- **prisma:** Instantiate and expose client to nuxt-auth ([8e16fea](https://github.com/becem-gharbi/prisma-cloudflare/commit/8e16fea))
- **prisma:** Support wasm ([7836115](https://github.com/becem-gharbi/prisma-cloudflare/commit/7836115))
- Reduce bundle size ([2aed8af](https://github.com/becem-gharbi/prisma-cloudflare/commit/2aed8af))
- Create example.wrangler ([3b59b2a](https://github.com/becem-gharbi/prisma-cloudflare/commit/3b59b2a))
- Remove file storage ([ac72f48](https://github.com/becem-gharbi/prisma-cloudflare/commit/ac72f48))
- Rename components ([ca8161d](https://github.com/becem-gharbi/prisma-cloudflare/commit/ca8161d))
- **prisma:** Change id to uuid ([ad27ac3](https://github.com/becem-gharbi/prisma-cloudflare/commit/ad27ac3))
- No significant change ([9113901](https://github.com/becem-gharbi/prisma-cloudflare/commit/9113901))
- Commit db migrations ([2440c99](https://github.com/becem-gharbi/prisma-cloudflare/commit/2440c99))
- Remove prisma generate from build scripts ([62079de](https://github.com/becem-gharbi/prisma-cloudflare/commit/62079de))
- Remove changelog ([0c180a2](https://github.com/becem-gharbi/prisma-cloudflare/commit/0c180a2))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

