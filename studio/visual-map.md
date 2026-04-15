# Studio Visual Map

This page gives a fast visual overview of the studio logic.

## Studio Architecture

```mermaid
flowchart TD
  A["Product Studio Workbench"] --> B["Core Thesis"]
  A --> C["Business Model"]
  A --> D["Commercial Validation"]
  A --> E["Offers"]
  A --> F["Products"]
  A --> G["Venture Partnerships"]

  B --> B1["Organizations lose value when they commit resources too early"]
  B --> B2["Signals must become problems, value, priorities, and proportional action"]

  C --> C1["Paid services fund learning"]
  C --> C2["Products capture recurrence"]
  C --> C3["Partnerships capture upside"]

  D --> D1["20 prospects"]
  D --> D2["10 conversations"]
  D --> D3["3 pilot offers"]
  D --> D4["1 paid pilot"]

  E --> E1["Offer 1: Pre-Delivery Decision Map"]
  F --> F1["Future products from repeated patterns"]
  G --> G1["Only with market access, distribution, domain depth, or real customers"]
```

## First Commercial Experiment

```mermaid
flowchart LR
  A["Ambiguous opportunity"] --> B["Initial request"]
  B --> C["Reframed problem"]
  C --> D["Value at stake"]
  D --> E["Delivery risks"]
  E --> F["Defensible scope"]
  F --> G["Proportional next step"]
  G --> H["Sales/delivery handoff"]
```

## Decision Boundary

```mermaid
flowchart TD
  A["Signal or opportunity appears"] --> B{"Is the problem formulated?"}
  B -- "No" --> C["Do not commit delivery capacity yet"]
  C --> D["Build decision map"]
  D --> E["Clarify problem, value, risk, scope, and next step"]
  E --> F{"Is action proportional?"}
  F -- "No" --> G["Resize, pause, reject, or clarify"]
  F -- "Yes" --> H["Commit resources"]
  B -- "Yes" --> F
```

## What The Studio Must Avoid

```mermaid
flowchart TD
  A["Ambiguous brief"] --> B["Fast deliverable"]
  B --> C["Unclear scope"]
  C --> D["Delivery rework"]
  D --> E["Margin loss"]
  E --> F["Senior rescue"]
```

The studio should not become a machine for turning ambiguous briefs into fast deliverables.

