import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerPackWithSkills, registerDiagramRenderer } from '@sabbour/adaptive-ui-core';
import { createAzurePack } from '@sabbour/adaptive-ui-azure-pack';
import { createGitHubPack } from '@sabbour/adaptive-ui-github-pack';
import { registerAzureDiagramIcons } from '@sabbour/adaptive-ui-azure-pack/diagram-icons';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import '@sabbour/adaptive-ui-core/css/adaptive.css';
import { SolutionArchitectApp } from './SolutionArchitectApp';

// Register packs
registerPackWithSkills(createAzurePack());
registerPackWithSkills(createGitHubPack());
registerAzureDiagramIcons();

// Register mermaid-based diagram renderer
registerDiagramRenderer(ArchitectureDiagram);

ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(React.StrictMode, null,
    React.createElement(SolutionArchitectApp)
  )
);
