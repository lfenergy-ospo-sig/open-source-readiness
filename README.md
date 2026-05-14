[![Slack](https://img.shields.io/badge/slack-%23ospo--sig-green.svg?logo=slack)](https://lfenergy.slack.com/archives/C09SF8UBUE9)

<img align="right" width="40%" src="https://artwork.lfenergy.org/sigs/ospo-sig/horizontal/color/ospo-sig-horizontal-color.png">

# LF Energy Open Source Readiness Guide

Welcome to the LF Energy Open Source Readiness Guide (LFE OSR). The purpose of this guide is to accelerate open source readiness for energy organizations by creating a body of resources to 1) advance the readiness of participants and 2) provide guidance for the broader industry.

Read more at [https://lfe-osr.netlify.app/](https://lfe-osr.netlify.app/).

Special thanks to the [FINOS OSR](https://osr.finos.org) for inspiration and for providing a great foundation for us to build on.

This work is part of the [LF Energy OSPO SIG](https://lists.lfenergy.org/g/ospo-sig). We communicate primarily via:
- Slack: [#ospo-sig](https://lfenergy.slack.com/archives/C09SF8UBUE9) in the [LF Energy Slack](https://lfenergy.slack.com)
- Mailing list: [ospo-sig@lists.lfenergy.org](https://lists.lfenergy.org/g/ospo-sig)

## Meetings

The OSPO SIG meets monthly. See the [LF Energy calendar](https://zoom-lfx.platform.linuxfoundation.org/meetings/ospo-sig?view=month) for upcoming meetings.

Minutes for past meetings can be found [here](https://github.com/lfenergy-ospo-sig/meetings). Agendas for upcoming meetings are [here](https://github.com/lfenergy-ospo-sig/meetings/issues).

## Running the Site Locally

The site is a [Docusaurus](https://docusaurus.io/) project under `website/`. The project uses **Yarn** (not npm) and requires **Node 18 or 20**.

```sh
cd website
yarn install
yarn start          # dev server with hot reload at http://localhost:3000
```

To preview the production build (what Netlify ships):

```sh
yarn build          # outputs to website/build/
yarn docusaurus serve   # serves website/build/ at http://localhost:3000
```

## Contributing to This Repository

1. [Fork it...](https://github.com/lfenergy-ospo-sig/open-source-readiness/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](CONTRIBUTING.md) and the [LF Energy Code of Conduct](https://tac.lfenergy.org/code_of_conduct.html)
4. Commit your changes with a DCO sign-off (`git commit -asm 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new [pull request...](https://github.com/lfenergy-ospo-sig/open-source-readiness/pulls)

## License

Copyright Fintech Open Source Foundation. Modifications copyright LF Energy.

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)