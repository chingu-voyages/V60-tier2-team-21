# Team Working Agreement

## 1. Tech Stack
- Framework: Next.js (React + TypeScript)
- Styling: TailwindCSS
- UI Components: shadcn/ui
- Linter and Formatter: Biome
- State management: [Zustand | React Context | None until needed]

---

## 2. Coding Standards
- Use TypeScript strictly (no `any` unless necessary)
- Follow consistent folder structure
- Use functional components only
- Use meaningful variable and function names
- Use Biome for linting formatting
- Keep components small and reusable

---

## 3. Git & Branching Strategy
- Main branches:
  - `main` → production
  - `develop` → active development
- Feature branches:
  - `feature/<feature-name>`
- Bug fixes:
  - `fix/<issue-name>`


---

## 4. Commit Message Format

Use clear, consistent commit messages following this format:

### Format

<type>/#<ticket-number>:<short description>

- Use lowercase for the type
- Include the ticket/issue ID when available (e.g., #20)
- Use imperative mood (e.g., add, fix, implement, resolve)
- Keep the description concise (ideally under 50 characters)
- Focus on what the change does, not how
- Avoid vague messages like “update” or “fix stuff”
- Make small, atomic commits (one logical change per commit)

Examples:
- `feat/#35: implement auto login for new signups`
- `fix/#34: resolve status update bug`
- `docs/#10: add working agreement file`
- `refactor/#45: simplify form validation logic`

Types:
- feat: new feature
- fix: bug fix
- refactor: code improvement without changing functionality
- docs: documentation changes
- style: formatting or styling changes (no logic changes)
- chore: maintenance tasks 

---

## 5. Pull Request Process
- Create PR into `develop`
- PR must include:
  - Description of changes
  - Screenshots (if UI)
  - **Lint/test checks must pass (Biome + any tests)**
- At least **1 approval required**
- No self-merging
- Resolve all comments before merging

---

## 6. Branch Protection Rules
- `main` and `develop` are protected
- **Enforce via GitHub**: 
    - Settings > Branches → Add protection rules for `main` and `develop`
    - Enable: "Require pull request before merging" + "Require status checks to pass"
    - Add Biome linting as required status check (via GitHub Actions)
- No direct pushes allowed
- PR required before merging
- All checks must pass before merge

---

## 7. Deployment Strategy
- `main` → Production
- `develop` → Staging (preview environment)

Deployment platform:
- Vercel

Rules:
- Every PR should be tested in preview
- Each sprint → deploy to `main` at least once
- Test features in staging before production

---

## 8. Meetings & Communication
- Weekly Sprint Planning: (Monday/21:00 CET)
- Weekly Standup: (Wednesday/21:00 CET)
- Sprint Retrospective: (Friday/21:00 CET)
- Async updates via Discord Team Channel
- Use GitHub Projects for task tracking

---

## 9. Decision Making
- Discuss as a team first
- If stuck → majority vote
- If still blocked → temporary decision by facilitator

---

## 10. Team Expectations
- Communicate blockers early
- Be respectful and supportive
- Ask for help when needed
- Stay consistent with contributions

---

## 11. Definition of Done
A task is done when:
- Code is written, **tests pass (if applicable)**, and working
- Reviewed and approved
- No console errors
- Responsive UI (if applicable)
- Merged into `develop`