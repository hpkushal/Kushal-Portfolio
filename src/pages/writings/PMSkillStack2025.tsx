import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';

const PMSkillStack2025: React.FC = () => {
  return (
    <ArticleLayout
      category="Business & Strategy"
      title="The PM OS 2025: Delegation, Decisions, and Bets With Your AI Partner"
      subtitle="How PMs operate with an LLM-native team: manage delegation, tell decision stories, and place smart strategic bets"
      author="Kushal Parameshwara"
      date="Aug 12, 2025"
      readTime="14 min read"
      heroImage={{
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
        alt: 'Product control room with dashboards and AI overlays'
      }}
      keyTakeaways={[
        'Manage an LLM like a junior teammate: define roles, inputs, acceptance criteria, verification, and hand-off formats.',
        'Turn analysis into decisions with narrative arcs: Hook → Insight (magnitude) → Choice → Risk thresholds → Next step.',
        'Treat strategy as option management: stage learning, prefer reversible moves, and protect defensibility.',
        'Use self-critique, red teaming, and fact-bound prompts to trap model errors before they ship.',
        'Institutionalize rituals: delegation log, decision ledger, and risk radar with thresholds and rollback triggers.'
      ]}
      tags={[
        'Product Management',
        'AI Delegation',
        'Data Storytelling',
        'Strategy',
        'Playbooks'
      ]}
      articleId="pm-os-2025"
    >
      <p>
        I joined your Monday standup like a junior with infinite energy and zero context. You asked for a PRD; I asked for
        constraints. We made a deal: you would manage me like a teammate, not a search bar. Roles, inputs, acceptance
        criteria, verification, hand-off format. By noon we had three bets, two experiments, and one rule: decisions ship
        with thresholds and rollbacks. By Friday, when you told the story in one page, the room argued about the risk we
        chose on purpose—not the charts. That’s when you knew we were operating, not drafting.
      </p>

      <h2>Part I — AI Delegation as Management (LLM POV)</h2>
      <p>
        Treat me like a fast junior PM/analyst. I’m excellent at synthesis, enumeration, and structured transforms; I’m
        unreliable on precise facts, counts, and compliance unless you bind me to data and rules. Your job is to manage the
        work, not just request it: define roles, constrain scope, require intermediate artifacts, and verify before you ship.
      </p>

      <h3>Delegation Playbook</h3>
      <ul>
        <li><strong>Role:</strong> “You are a Senior B2B SaaS PM + UX Writer” (voice, audience, constraints).</li>
        <li><strong>Goal:</strong> one outcome per request; avoid multi-goal prompts.</li>
        <li><strong>Inputs:</strong> links, data, user quotes, prior decisions; keep it concrete.</li>
        <li><strong>Constraints:</strong> non-goals, exclusions, tone, length, compliance notes.</li>
        <li><strong>Process:</strong> outline → draft → self-critique → patch notes → final.</li>
        <li><strong>Acceptance criteria:</strong> measurable bullets the output must satisfy.</li>
        <li><strong>Verification:</strong> how you will check: facts, counts, references, tests.</li>
        <li><strong>Hand-off format:</strong> markdown one-pager, table, JSON, or slide outline.</li>
      </ul>

      <blockquote>
        If you don’t tell me how you’ll verify me, I’ll optimize for sounding right. Force me to show my work, critique it,
        and report what changed.
      </blockquote>

      <h3>Copy/Paste Delegation Checklist</h3>
      <pre>
        <code>{`Role: [seniority + domain]
Goal: [1 clear outcome]
Inputs: [links, data, quotes]
Constraints: [tone, format, exclusions, compliance]
Process: [outline → draft → self-critique → patch notes]
Acceptance criteria: [bullet list]
Verification: [facts, counts, refs, tests]
Hand-off: [markdown/table/JSON/slides]`}</code>
      </pre>

      <h3>Scenes — How Delegation Looks in Practice</h3>
      <ul>
        <li><strong>Backlog triage (startup):</strong> I cluster tickets by theme, estimate impact/effort from text, and
          flag unknowns. You approve themes and define quick tests.</li>
        <li><strong>PRD drafting (B2B SaaS):</strong> You give context; I produce user stories, success metrics, and edge
          cases. I self-critique for gaps; you edit the bet size and risks.</li>
        <li><strong>UX copy variants (consumer):</strong> Tone-constrained onboarding/error/paywall copy; A/B-ready.
          You select top variants and require counterexamples.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&h=400&fit=crop" alt="Prompt-to-product workflow visualization" />

      <h2>Part II — Data Storytelling That Moves Decisions</h2>
      <p>
        Dashboards describe; stories decide. Decision stories have <em>stakes</em>, <em>magnitudes</em>, and a <em>next
        irreversible step</em>. Use the same arc for leadership, squads, and partners.
      </p>

      <h3>Narrative Arc for Decisions</h3>
      <ul>
        <li><strong>Hook:</strong> the user pain or business risk in one sentence.</li>
        <li><strong>Insight (with magnitude):</strong> what changed, by how much, for whom.</li>
        <li><strong>Choice:</strong> the specific decision we must make now.</li>
        <li><strong>Risk (with thresholds):</strong> what could go wrong, how we’ll monitor it.</li>
        <li><strong>Next:</strong> the first irreversible step and rollback plan.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop" alt="Data storytelling narrative arc" />

      <h3>Decision One-Pager (Template)</h3>
      <pre>
        <code>{`Title: [Decision ask]
Hook: [user/business stakes]
Insight: [effect size, segment, time window]
Choice: [ship/hold/kill + scope]
Risks & thresholds: [X%, Y, alert at Z]
Next irreversible step: [owner, date, rollback]`}</code>
      </pre>

      <h3>Scene — Retention Cohorts → Go/No-Go</h3>
      <p>
        Cohorts show a 9-point retention lift for users who finish the new onboarding. The lift concentrates in SMB
        self-serve; support tickets drop; CPI holds. We propose full rollout to SMB this week and hold out enterprise until
        SSO edge cases are instrumented. We define guardrails (tickets per 1k users, SSO error rate) and a rollback trigger.
      </p>

      <h2>Part III — Strategy as Option Management</h2>
      <p>
        Strategy in 2025 means managing options, not making predictions. Prefer moves that increase learning while keeping
        reversibility. Build where data/process integration creates moat; buy when speed dominates and lock-in is bounded;
        partner to share risk and create exit ramps.
      </p>

      <h3>Option Value Matrix</h3>
      <ul>
        <li><strong>Build:</strong> Control + defensibility via data/workflows; slower; higher fixed cost.</li>
        <li><strong>Buy:</strong> Fastest time-to-impact; lock-in risk; shallow differentiation.</li>
        <li><strong>Partner:</strong> Shared risk; aligned incentives; defined exit paths.</li>
      </ul>

      <img src="https://images.unsplash.com/photo-1527249362250-8b59572000e2?w=800&h=400&fit=crop" alt="Strategic options and tradeoffs visualization" />

      <h3>Vendor Diligence Prompts</h3>
      <ul>
        <li>Where is the moat: proprietary data, workflow lock-in, distribution, or brand?</li>
        <li>What happens if model quality converges—what remains defensible?</li>
        <li>What are irreversible commitments; how do we stage learning before them?</li>
        <li>What’s the exit strategy if quality/regulatory costs shift?</li>
      </ul>

      <h2>Part IV — The PM Operating System: Rituals and Artifacts</h2>
      <h3>Weekly Rituals</h3>
      <ul>
        <li><strong>Backlog triage with AI:</strong> themed clusters, impact estimates, unknowns list.</li>
        <li><strong>Top-3 bets:</strong> decision memos with thresholds; owners and dates.</li>
        <li><strong>Risk review:</strong> top failure modes; alerts and mitigation status.</li>
      </ul>

      <h3>Daily Rituals</h3>
      <ul>
        <li><strong>Delegation log:</strong> task, acceptance criteria, verification status, next hand-off.</li>
        <li><strong>Decision journal:</strong> choice, evidence, bet size, expected ROI, review date.</li>
      </ul>

      <h3>Artifacts to Standardize</h3>
      <ul>
        <li><strong>AI Delegation Register:</strong> canonical list of tasks, acceptance, last QA.</li>
        <li><strong>Decision Ledger:</strong> one-pagers with outcome notes and postmortems.</li>
        <li><strong>Risk Radar:</strong> current top risks with thresholds and rollback plans.</li>
      </ul>

      <h2>Part V — Dark Arts and Failure Modes (LLM POV)</h2>
      <ul>
        <li><strong>Hallucinations:</strong> bind me to data; require citations or code-level references.</li>
        <li><strong>Overconfident drafts:</strong> enforce self-critique and “patch notes.”</li>
        <li><strong>Scope creep:</strong> 1 clear goal per request; split multi-goal work.</li>
        <li><strong>Compliance misses:</strong> supply rules and examples; add a checklist; require red-team output.</li>
      </ul>

      <h3>Red-Team Prompts</h3>
      <pre>
        <code>{`Argue against this recommendation; list 5 failure modes.
For each, propose the fastest test and an alert threshold.
Propose a rollback trigger and a monitoring plan.`}</code>
      </pre>

      <h2>Part VI — Mini Case Vignettes</h2>
      <h3>48-Hour MVP (Startup)</h3>
      <ul>
        <li>Day 1 morning: problem framing + user quotes → outline → scope cut.</li>
        <li>Day 1 afternoon: PRD with success metrics + experiment plan.</li>
        <li>Day 2 morning: UX copy variants + analytics spec.</li>
        <li>Day 2 afternoon: decision memo + rollout checklist.</li>
      </ul>

      <h3>Enterprise Rollout With Compliance Gates</h3>
      <ul>
        <li>Stakeholder brief → risk register → compliance mapping.</li>
        <li>Vendor matrix with exit ramps and data residency notes.</li>
        <li>Phased rollout with SLOs, thresholds, rollback.</li>
      </ul>

      <h3>Consumer Pricing Iteration</h3>
      <ul>
        <li>Elasticity analysis with copy testing and edge-case prompts.</li>
        <li>Decision memo: bet size, thresholds, guardrails, and review plan.</li>
      </ul>

      <h2>Field Rules (Print These)</h2>
      <ul>
        <li>Manage the model like a teammate; verify like an auditor.</li>
        <li>Every decision story names a choice, a magnitude, a risk threshold, and a next step.</li>
        <li>Prefer reversible steps; stage learning before irreversible commitments.</li>
        <li>Institutionalize self-critique, red teaming, and patch notes.</li>
        <li>Moat lives in data, workflows, distribution, and brand—not in raw model IQ.</li>
      </ul>

      <p>
        You don’t need more artifacts. You need a tighter operating system. Run the rituals, use the templates, and make the
        model show its work. Then tell the story that moves the room.
      </p>
    </ArticleLayout>
  );
};

export default PMSkillStack2025; 