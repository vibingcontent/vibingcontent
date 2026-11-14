<p align="center">
  <img alt="Vibing Content" src="apps/frontend/public/logo-text.svg" width="280" />
</p>

# Vibing Content

Vibing Content is a social media scheduling app: plan your posts in a calendar,
schedule them to many social networks and chat platforms at once, review them
with your team, and track how they perform. It runs at
[app.vibingcontent.com](https://app.vibingcontent.com).

## Based on Postiz

Vibing Content is a modified version of [Postiz](https://github.com/gitroomhq/postiz-app),
the open-source social media scheduling tool created by Nevo David. Postiz is
licensed under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0),
and so is Vibing Content.

What we changed:

- the name, logo, favicons and accent colour (Vibing Content branding);
- removed links and sections that only apply to the upstream project's own
  hosted service (its CLI, browser extension, directory connectors, affiliate
  program and marketing content);
- an attribution line in Settings pointing to Postiz and to this source code.

Internal identifiers (package names, environment variables, API routes and
provider identifiers) keep their upstream names, so upstream updates merge
cleanly. The brand strings live in
[`libraries/helpers/src/utils/brand.ts`](libraries/helpers/src/utils/brand.ts).

## Source code

The complete source code of the version running at app.vibingcontent.com is
this repository: <https://github.com/vibingcontent/vibingcontent>.

## Running it

The code layout, tooling and setup are the same as upstream Postiz (a pnpm
monorepo with a NestJS backend, a Temporal orchestrator and a Next.js
frontend). See the [upstream repository](https://github.com/gitroomhq/postiz-app)
for configuration and self-hosting, and `docker-compose.dev.yaml` for the local
development services.

A production image is built from `Dockerfile.dev` on every push to `main` and
published to `ghcr.io/vibingcontent/vibingcontent`.

## License

[AGPL-3.0](LICENSE). Copyright of the original work belongs to the Postiz
authors; modifications in this repository are released under the same license.
