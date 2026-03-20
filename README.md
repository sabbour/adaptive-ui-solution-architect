# Solution Architect Coworker

An AI coworker for designing and deploying **production-grade cloud-native architectures**, built with the [Adaptive UI Framework](https://github.com/sabbour/adaptive-ui-framework).

## What It Does

The Solution Architect is a conversational AI agent that acts as a senior cloud architect. It walks you through a structured workflow:

1. **Discover** — Gathers requirements across application type, data needs, scale targets, security/compliance, and operations preferences over 2–3 conversational turns
2. **Design** — Proposes a production-ready architecture with reasoning, cost estimates, and a live diagram
3. **Iterate** — Refines based on your feedback, presents trade-off comparisons when multiple approaches exist
4. **Generate** — Produces Infrastructure-as-Code (Bicep/Terraform), deployment pipelines, and application scaffolding
5. **Commit** — Creates a pull request to a GitHub repository with all generated files
6. **Deploy** — Guides bootstrap and deployment

## Layout

The app uses a three-panel layout:

- **Left panel** — Session sidebar with file explorer showing generated artifacts
- **Center panel** — File viewer/editor for IaC, deployment configs, and architecture diagrams (Mermaid with Azure icons)
- **Right panel** — Conversational chat with the AI architect

## Packs Used

| Pack | Purpose |
|------|---------|
| [@sabbour/adaptive-ui-azure-pack](https://github.com/sabbour/adaptive-ui-azure-pack) | Azure sign-in, ARM API queries, dynamic resource forms, Azure diagram icons |
| [@sabbour/adaptive-ui-github-pack](https://github.com/sabbour/adaptive-ui-github-pack) | GitHub sign-in, repo management, creating PRs with generated code |

## Running Locally

```bash
npm install
npm run dev
```

Click the gear icon to connect your OpenAI-compatible LLM endpoint.

For local pack development, symlink local checkouts:

```bash
npm run link:packs
```

## License

MIT
