# Web App Builder Evaluation Report

**Date:** June 21, 2026 | **By:** @Dheeraj  
**Repo:** [web-app-builder-evaluation](https://github.com/Dheeraj-Bhandari/web-app-builder-evaluation-)

---

## 🏆 Winner: Local IDEs (Claude Code, Kiro)

**Why?** Local IDEs process user input batch-by-batch with additional system prompts, resulting in better design quality and responsiveness compared to hosted builders.

**Same prompt, same model (Claude Opus 4.5), different results**  the execution approach matters.

---

## Tools Tested

| Tool | Type | Status |
|------|------|--------|
| Kiro | Local IDE | ✅ Completed |
| Claude Code | Local IDE | ✅ Completed |
| Lovable MCP | Hosted Builder | ✅ Completed |
| Rork | Mobile App Builder | ✅ Tested |
| Emergent | Hosted Builder | ⚠️ Credit Exhausted |

---

## Test Prompts

### EventHub (Event Ticketing)
```
Build "EventHub" with: Hero section "Discover Amazing Events Near You", 
navigation (Home, Events, About, Contact, Login), features section, 
testimonials, footer, About page, Contact page with form. 
Fully responsive, indigo/purple color scheme.
```

### FoodieSpot (Restaurant Discovery)
```
Build "FoodieSpot" with: Hero "Find Your Perfect Dining Experience", 
search with filters (location, date, party size, cuisine), 
Featured Restaurants grid, navigation, app download section.
Fully responsive, warm food-inspired colors.
```

---

## Results

| Criteria | Kiro | Claude Code | Lovable MCP |
|----------|------|-------------|-------------|
| **UI Quality** | 8/10 | 8/10 | 6/10 |
| **Visual Appeal** | 9/10 | 8/10 | 6/10 |
| **Responsiveness** | 6/10 | 6/10 | 9/10 |
| **Speed** | 12-15 min | 10-12 min | 3 min |

**Note:** Lovable handles responsiveness automatically. Local IDEs need explicit instructions for mobile-first design.

---

## Live URLs

| Project | Tool | URL |
|---------|------|-----|
| EventHub | Lovable | [Preview](https://id-preview--7eae9f3c-d38f-4ae4-ac52-3cd2e8d77da1.lovable.app) |
| FoodieSpot | Rork | Mobile App (screenshot below) |

---

## Screenshots

### EventHub - Kiro & Claude Code
![EventHub by Kiro and Claude Code](eventhub%20by%20krio%20and%20claude%20code.png)

### FoodieSpot - Kiro
![FoodieSpot by Kiro](foodie%20spot%20kiro%20.png)

### FoodieSpot - Claude Code & Kiro Comparison
![FoodieSpot Claude Code vs Kiro](foodie_spot_claude%20code%20kiro.png)

### FoodieSpot - Rork (Mobile App)
![FoodieSpot by Rork](foodiespot%20by%20rork.png)

---

## Key Findings

1. **Local IDEs win on design** — Batch processing + system prompts = better UI
2. **Lovable wins on speed** — 3 min vs 12-15 min (~4x faster)
3. **Lovable wins on auto-responsiveness** — Local IDEs need explicit instructions
4. **Same model, different results** — Execution architecture matters more than model choice

---

## When to Use What

| Use Case | Tool |
|----------|------|
| Rapid prototyping | Lovable |
| Production-quality UI | Kiro / Claude Code |
| Mobile apps | Rork |

---

## Scope

✅ Tested: UI generation, design quality, responsiveness  
❌ Not tested: Deployment, payment integration, authentication
