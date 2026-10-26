# AGENTS.md — Portfolio Engineering Guide

## Project Mission

Modernize the existing personal portfolio into a premium, interactive, production-ready portfolio for a full-stack software engineer and developer-community speaker with 2.5+ years of professional experience.

This is an evolution of an existing project, not a disposable demo. Preserve useful content, working functionality, valid assets, and meaningful project history while improving the architecture, design, performance, accessibility, and maintainability.

## Professional Positioning

Present the owner as:
- A full-stack software engineer with 2.5+ years of experience.
- An engineer interested in web performance, scalable frontend architecture, and developer tooling.
- A developer-community speaker and volunteer involved in technical events.
- A practical builder who can communicate engineering decisions and measurable results.

Use verified professional experience, real projects, actual speaking engagements, and evidence-backed achievements.

Never invent employers, dates, metrics, speaking engagements, testimonials, awards, GitHub statistics, or project results. Flag missing information for the owner to provide.

## Mandatory Skill Usage

Before designing or implementing anything:

1. Locate and read the complete `SKILL.md` instructions for all four skills:
   - `3d-web-experience`
   - `interactive-portfolio`
   - `premium-web-design`
   - `ui-ux-pro-max`

2. Search the skill directories supported by the current coding agent, including the existing `.claude/skills/` directory if present and the configured OpenCode skill directories.

3. Follow the applicable guidance from all four skills. Resolve conflicts by prioritizing correctness, accessibility, performance, and maintainability over decorative effects.

4. Do not assume a skill was loaded merely because its folder exists. If a skill is missing or unreadable, report that fact and continue with the remaining available instructions.

## Initial Repository Audit

Before editing files:

- Inspect the entire project structure and identify its current framework version, React version, package manager, scripts, dependencies, routing system, styling system, animation libraries, and build configuration.
- Review `package.json`, lockfiles, Next.js configuration, TypeScript configuration, lint configuration, existing routes, reusable components, assets, metadata, and deployment settings.
- Identify legacy APIs, deprecated dependencies, broken routes, duplicated components, oversized client bundles, and existing functionality that must be preserved.
- Run existing checks where possible and record the baseline build, lint, type-check, and test status.
- Inspect Git status. Never overwrite or discard unrelated user changes.
- Create a migration plan before making architectural changes.

## Technology Strategy

Use the latest stable, production-ready versions compatible with the project's environment.

- Next.js: latest stable release after verifying the official documentation and upgrade guide.
- React: version supported by the chosen Next.js release.
- TypeScript: strict typing wherever practical.
- Routing: App Router as the target architecture, migrating from Pages Router if applicable.
- Styling: retain a useful existing styling system or adopt Tailwind CSS when it improves consistency and maintainability.
- Animation: GSAP for intentional scroll-driven storytelling and complex motion; use CSS transitions or a lightweight animation library for simpler interactions.
- 3D: use React Three Fiber and Drei only when a meaningful 3D experience improves the portfolio.
- Icons: use a consistent icon library rather than emoji as interface icons.
- Quality: add appropriate linting, formatting, type checking, and tests where missing.

Verify package compatibility, official migration instructions, Node.js requirements, and security advisories before upgrading. Do not blindly install prereleases, experimental APIs, or incompatible packages.

Avoid dependency proliferation. Every new library must solve a concrete problem.

## Design Direction

Create a distinctive, editorial-quality developer portfolio. Avoid generic SaaS landing-page layouts, excessive gradients, glassmorphism everywhere, template-like card grids, and unnecessary animations.

Design for:
- Clear typography and strong visual hierarchy.
- A memorable first screen with an immediate professional introduction.
- Deliberate whitespace, a coherent spacing system, and restrained colors.
- Subtle depth, polished hover states, and purposeful transitions.
- A recognizable visual identity that remains professional.
- Excellent mobile and desktop layouts.

The website should feel crafted by an experienced engineer with strong design judgment.

## Information Architecture

Evaluate and implement the following sections according to the existing content and project scope:

1. Hero: name, role, experience, concise value proposition, and clear calls to action.
2. Selected work: real projects, responsibilities, technical decisions, and verified outcomes.
3. Experience: professional timeline with employers, roles, and accurate dates.
4. Engineering expertise: frontend, backend, databases, architecture, performance, and relevant tools.
5. Speaking: verified talks, event names, topics, and links to recordings, slides, or proposals when available.
6. Community: relevant volunteering, event organizing, and open-source contributions.
7. About: concise professional narrative.
8. Contact: working email or contact links and relevant professional profiles.

Use real supplied information and existing project assets. Do not fabricate missing content. Keep navigation focused and avoid adding empty sections just to increase page length.

## Engineering Architecture

- Prefer Server Components by default.
- Add Client Components only when browser APIs, state, event handlers, or interactive behavior require them.
- Keep client boundaries small and avoid unnecessarily hydrating the entire application.
- Use semantic HTML and reusable, composable components.
- Keep content data separate from presentation where that improves maintainability.
- Use typed data models for projects, experience, and speaking engagements.
- Use optimized image and font loading.
- Add appropriate metadata, canonical URLs where applicable, Open Graph images, sitemap, robots configuration, and structured data when justified.
- Preserve existing working routes and links or document intentional changes.
- Respect reduced-motion preferences.
- Ensure keyboard navigation, visible focus states, appropriate contrast, and accessible names.
- Prevent layout shifts and avoid unnecessary JavaScript, network requests, and third-party scripts.

## Motion and 3D Rules

- Motion must support storytelling, hierarchy, or interaction.
- Provide graceful fallbacks when WebGL, GPU acceleration, or browser capabilities are unavailable.
- Lazy-load heavy 3D scenes and nonessential interactive modules.
- Do not block primary content behind a loading animation.
- Avoid excessive scroll hijacking, pointer-only interactions, and distracting continuous movement.
- Respect `prefers-reduced-motion`.
- Keep the initial page usable if animation or 3D fails.

## Performance and Quality Targets

Measure the existing application before optimization and compare results after implementation.

Aim for:
- Lighthouse Performance: 90+ where realistically achievable.
- Lighthouse Accessibility: 95+.
- Lighthouse Best Practices: 95+.
- Lighthouse SEO: 95+.
- Core Web Vitals in the good range: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, CLS ≤ 0.1.

Treat these as targets, not fabricated test results or guarantees. Record actual measurements and identify the test environment.

## Execution Workflow

1. Audit the repository and read all available skills.
2. Report the current architecture, migration risks, and baseline quality.
3. Propose a phased implementation plan.
4. Upgrade framework and dependencies using supported migration steps.
5. Implement the design system and shared layout.
6. Build and refine the major portfolio sections.
7. Add carefully selected interactive, animated, or 3D experiences.
8. Run production builds, linting, type checking, and available tests.
9. Fix regressions and verify responsive layouts, accessibility, navigation, metadata, and performance.
10. Summarize the changes, verification results, remaining issues, and required owner input.

Work in small, understandable stages. Do not stop after producing a plan unless blocked by a consequential decision or missing access. Do not claim a build or test passed unless it was actually executed and passed.

## Safety and Change Management

- Never delete user content, assets, configuration, or Git history without justification.
- Do not expose API keys, credentials, environment variables, or personal contact information beyond the intended public portfolio.
- Do not replace the existing application wholesale before understanding its dependencies and functionality.
- Avoid unrelated refactoring.
- Document breaking changes and required environment updates.
- If a migration fails, diagnose the cause instead of hiding the error or suppressing type checks.

## Definition of Done

The portfolio is complete when:
- The existing project is modernized and builds successfully.
- The main routes and intended interactions work.
- The design is coherent and responsive.
- The four skills have been considered and applied where appropriate.
- No unsupported professional claims have been introduced.
- Accessibility, metadata, and performance have been checked.
- Remaining limitations and follow-up tasks are explicitly documented.