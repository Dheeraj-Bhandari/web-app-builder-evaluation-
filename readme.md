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

> **Same exact prompts used across all tools for fair comparison**

### Prompt 1: EventHub (Event Ticketing Platform)
```
Using Lovable, create a new project called "EventHub" - an event ticketing platform.

Build the following:

1. A modern landing page with:
   - Hero section with headline "Discover Amazing Events Near You"
   - Subheadline: "Find and book tickets to concerts, sports, conferences and more"
   - A "Browse Events" call-to-action button
   - Features section showing 4 features: Easy Booking, Secure Payments, Instant Tickets, 24/7 Support
   - Testimonials section with 3 fake customer reviews
   - Footer with links and social media icons

2. Navigation menu with links: Home, Events, About, Contact, Login

3. Make it fully responsive - must look great on mobile phones and desktop

4. Use a modern color scheme with primary color being indigo/purple

5. Create an About page with:
   - Company story
   - Team section (can use placeholder images)
   - Mission statement

6. Create a Contact page with:
   - Contact form (name, email, message)
   - Company address and phone (placeholder)
   - Map placeholder
```

### Prompt 2: FoodieSpot (Restaurant Discovery Platform)
```
Build a restaurant discovery platform "FoodieSpot" with:

1. Landing page with:
   - Hero section: "Find Your Perfect Dining Experience"
   - Subheadline: "Discover top restaurants, read reviews, and book tables instantly"
   - Search functionality with location, date, party size, cuisine filters
   - "Search Restaurants" call-to-action button

2. Featured Restaurants section with:
   - Grid of restaurant cards
   - Each card showing: image, name, cuisine type, rating, price range

3. Navigation: Home, Restaurants, About, Contact, Login

4. Fully responsive design

5. Modern color scheme with warm/food-inspired colors

6. App download section promoting mobile app
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

### Eventhub - lovable MCP and claude code. 
![Eventhub - Lovable MCP and lcaude code](foodie%20spot%20kiro%20.png)

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
