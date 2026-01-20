# 📂 Referencia Project Structure

```
referencia-1/
│
├── 📄 index.html                      # Main lessons landing page
│   └── Features:
│       ├── Lessons grid with 8 cards
│       ├── Quick reference section
│       ├── Responsive layout
│       └── Navigation to all lessons
│
├── 🎨 styles.css                      # Complete styling
│   └── Includes:
│       ├── Landing page styles
│       ├── Lesson page styles
│       ├── Card components
│       ├── Accordions
│       ├── Navigation
│       └── Mobile responsive
│
├── ⚡ script.js                       # Interactive features
│   └── Functions:
│       ├── Accordion toggle
│       ├── Search functionality
│       ├── Smooth scrolling
│       ├── Lesson navigation
│       └── Mobile menu
│
├── 📚 lessons/                        # Lesson pages folder
│   ├── ✅ intro-to-ai.html           # COMPLETE sample lesson
│   │   └── Sections:
│   │       ├── Overview
│   │       ├── Sketchnote (placeholder ready)
│   │       ├── Core Content
│   │       ├── Experiments (3 cards)
│   │       └── Resources
│   │
│   ├── ⏳ machine-learning-basics.html    # Placeholder
│   ├── ⏳ deep-learning.html              # Placeholder
│   ├── ⏳ large-language-models.html      # Placeholder
│   ├── ⏳ prompt-engineering.html         # To create
│   ├── ⏳ rag-systems.html                # To create
│   ├── ⏳ ai-frameworks.html              # To create
│   └── ⏳ best-practices.html             # To create
│
├── 🎨 assets/                         # Media files
│   ├── images/                        # General images
│   │   └── (Add your images here)
│   │
│   └── sketchnotes/                   # Lesson visual summaries
│       ├── 📝 Place your sketchnotes here!
│       ├── intro-to-ai.png           # ← ADD THIS
│       ├── machine-learning-basics.png
│       ├── deep-learning.png
│       └── ...
│
├── 📖 Documentation Files
│   │
│   ├── 📘 README.md                   # Project overview
│   │   └── Main documentation for GitHub
│   │
│   ├── 🚀 QUICKSTART.md              # START HERE!
│   │   └── Your step-by-step guide
│   │
│   ├── 📗 LESSON_GUIDE.md            # Lesson creation guide
│   │   └── How to create new lessons
│   │
│   ├── 🎨 SKETCHNOTE_GUIDE.md        # Visual design tips
│   │   └── How to create sketchnotes
│   │
│   ├── ✅ CHECKLIST.md               # Quality assurance
│   │   └── Use for each new lesson
│   │
│   └── 📊 PROJECT_SUMMARY.md         # What we built
│       └── Complete overview
│
├── 🧪 experiment-template.html        # Demo starter template
│   └── Customize for your experiments
│
└── 📜 LICENSE                         # MIT License
```

## 🎯 Key Files Explained

### For Content Creation:
| File | Purpose | When to Use |
|------|---------|-------------|
| `lessons/intro-to-ai.html` | Complete lesson example | Copy as template for new lessons |
| `experiment-template.html` | Interactive demo starter | Build your AI experiments |
| `assets/sketchnotes/` | Visual summaries | Save your sketchnote images |

### For Reference:
| File | Purpose | When to Use |
|------|---------|-------------|
| `QUICKSTART.md` | Getting started guide | First time setup |
| `LESSON_GUIDE.md` | Detailed lesson creation | Creating new lessons |
| `SKETCHNOTE_GUIDE.md` | Visual design tips | Making sketchnotes |
| `CHECKLIST.md` | Quality checklist | Before publishing |

### For Configuration:
| File | Purpose | When to Modify |
|------|---------|----------------|
| `styles.css` | All styling | Changing colors/fonts |
| `script.js` | Interactivity | Adding features |
| `index.html` | Main page | Adding new lessons |

## 📁 Folder Organization

### `/lessons/`
- Contains all individual lesson HTML files
- Each lesson is a standalone page
- Linked from main `index.html`

### `/assets/`
- `/images/` - General purpose images
- `/sketchnotes/` - Lesson visual summaries
- Keep organized by lesson name

## 🔄 Workflow

```
1. Plan Lesson
   └── Use LESSON_GUIDE.md
       └── Outline content
           └── Identify experiments

2. Create Content
   └── Copy intro-to-ai.html
       └── Write sections
           └── Add examples

3. Design Sketchnote
   └── Use SKETCHNOTE_GUIDE.md
       └── Create visuals
           └── Save to /assets/sketchnotes/

4. Build Experiments
   └── Use experiment-template.html
       └── Deploy demos
           └── Link in lesson

5. Quality Check
   └── Use CHECKLIST.md
       └── Test thoroughly
           └── Proofread

6. Publish
   └── Update index.html
       └── Git commit
           └── Deploy
```

## 🎨 Asset Naming Convention

### Sketchnotes:
```
assets/sketchnotes/lesson-name.png
├── intro-to-ai.png
├── machine-learning-basics.png
├── deep-learning.png
└── large-language-models.png
```

### Lesson Files:
```
lessons/lesson-name.html
├── intro-to-ai.html
├── machine-learning-basics.html
├── deep-learning.html
└── large-language-models.html
```

## 📊 File Status Legend

- ✅ Complete and ready
- ⏳ Placeholder (needs content)
- 📝 To be created
- 🚀 Ready for customization

## 💾 File Sizes Reference

Approximate sizes:
- HTML files: 10-50 KB each
- CSS file: ~20 KB
- JS file: ~10 KB
- Sketchnotes: 100-500 KB (PNG)
- Total project: ~1-5 MB

## 🔗 Internal Links Structure

```
index.html
    ↓
    ├─→ lessons/intro-to-ai.html
    │       ↓
    │       └─→ lessons/machine-learning-basics.html
    │               ↓
    │               └─→ lessons/deep-learning.html
    │                       ↓
    │                       └─→ ...and so on
    │
    ├─→ lessons/terminology.html
    ├─→ lessons/models-overview.html
    └─→ lessons/applications.html
```

## 🎯 What to Customize First

1. **Content**: Fill in placeholder lessons
2. **Visuals**: Add sketchnotes to `/assets/sketchnotes/`
3. **Experiments**: Link your AI demos
4. **Styling**: Update colors in `styles.css` (optional)
5. **Branding**: Add logo/change title (optional)

## 📦 Backup Recommendations

Always backup:
- `/lessons/` folder (your content)
- `/assets/sketchnotes/` (your images)
- `styles.css` (if customized)
- `index.html` (lesson grid)

Use Git for version control!

## 🚀 Deployment Structure

When deployed, structure remains the same:
```
your-site.com/
├── index.html (home)
├── lessons/
│   └── intro-to-ai.html
└── assets/
    └── sketchnotes/
```

Clean URLs, fast loading, SEO-friendly!

---

**Navigation Tips:**
- Main page: `index.html` or `/`
- Lessons: `lessons/lesson-name.html`
- Assets: `assets/folder/file.ext`
- Docs: `FILENAME.md` (GitHub renders these)

🎉 **You're all set! Start with QUICKSTART.md** 🚀
