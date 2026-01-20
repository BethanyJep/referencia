# 🎓 Referencia Lesson Structure Guide

Welcome to Referencia's lesson-based learning platform! This guide explains the structure and how to add your own content.

## 📁 Project Structure

```
referencia-1/
├── index.html              # Main lessons landing page
├── styles.css              # All styles including lesson styles
├── script.js              # JavaScript for interactions
├── lessons/               # Individual lesson pages
│   ├── intro-to-ai.html
│   ├── machine-learning-basics.html
│   ├── deep-learning.html
│   └── ...
└── assets/
    ├── images/            # General images
    └── sketchnotes/       # Sketchnote visuals for lessons
```

## 🎨 Lesson Template Structure

Each lesson follows this format:

### 1. **Overview Section** (`#overview`)
- Brief introduction to the lesson
- Learning objectives
- What students will gain from this lesson

### 2. **Sketchnote Section** (`#sketchnote`)
- Visual summary of the lesson concepts
- Simplifies complex ideas into drawings
- Place your sketchnote image in `/assets/sketchnotes/`

### 3. **Core Content Section** (`#content`)
- Detailed explanations
- Concepts breakdown
- Code examples (if applicable)
- Interactive accordions for organized content

### 4. **Experiments Section** (`#experiments`)
- Hands-on demonstrations
- Interactive applications you've built
- Links to live demos or GitHub repos
- Each experiment should relate to lesson concepts

### 5. **Resources Section** (`#resources`)
- Articles & papers
- Videos & courses
- Tools & platforms
- Books
- Community links

## 🖼️ Adding Sketchnotes

### Step 1: Create Your Sketchnote
Create a visual summary of your lesson using:
- Digital tools (Procreate, Excalidraw, Figma)
- Hand-drawn and scanned
- Recommended size: 1200x900px or larger
- Format: PNG or JPG

### Step 2: Save the File
```bash
# Save your sketchnote with a descriptive name
/assets/sketchnotes/intro-to-ai.png
/assets/sketchnotes/machine-learning-basics.png
/assets/sketchnotes/llms-explained.png
```

### Step 3: Update the HTML
In your lesson file, replace the placeholder section:

```html
<!-- Replace the sketchnote-placeholder div with: -->
<img src="../assets/sketchnotes/intro-to-ai.png" 
     alt="Introduction to AI Sketchnote" 
     class="sketchnote-img">
<p style="margin-top: 15px; color: var(--text-light); font-size: 0.9rem;">
    Visual summary of AI concepts and key terms
</p>
```

## 🧪 Adding Experiments

### Structure for Each Experiment:

```html
<div class="experiment-card">
    <h3>🎯 Experiment Title</h3>
    <p>Brief description of what the experiment demonstrates.</p>
    <p><strong>Concepts:</strong> List key concepts covered</p>
    <a href="link-to-your-demo" class="experiment-link">Launch Experiment →</a>
</div>
```

### Where to Host Experiments:
1. **GitHub Pages** - Static demos
2. **CodePen/CodeSandbox** - Interactive code
3. **Streamlit/Gradio** - Python ML apps
4. **Hugging Face Spaces** - AI model demos
5. **Separate `/experiments/` folder** in this repo

### Example Experiments:
- Image classifier demo
- Text generation playground
- Sentiment analysis tool
- Chatbot interface
- Style transfer application

## ✍️ Creating a New Lesson

### Method 1: Copy Template
```bash
# Copy an existing lesson as template
cp lessons/intro-to-ai.html lessons/your-new-lesson.html
```

### Method 2: Use the Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson XX: Your Title | Referencia</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <a href="../index.html" style="text-decoration: none; color: white;">
                    <h1 class="logo">Referencia</h1>
                </a>
                <p class="tagline">Lesson XX: Your Title</p>
            </div>
        </nav>
    </header>

    <div class="lesson-header">
        <div class="container">
            <div class="lesson-number">LESSON XX</div>
            <h1 class="lesson-title">🔮 Your Lesson Title</h1>
            <p class="lesson-subtitle">Brief description</p>
            <div class="lesson-info">
                <span class="lesson-info-item">⏱️ XX minutes</span>
                <span class="lesson-info-item">🟢 Beginner/🟡 Intermediate/🔴 Advanced</span>
                <span class="lesson-info-item">📚 X sections</span>
            </div>
        </div>
    </div>

    <!-- Add lesson nav, sections, etc. -->
</body>
</html>
```

### Don't Forget:
1. Update the lesson number
2. Add appropriate emoji icons
3. Set difficulty level (🟢🟡🔴)
4. Estimate time duration
5. Add to main `index.html` lessons grid

## 🎨 Styling Guidelines

### Color Variables (already defined in styles.css):
- `--primary-color: #2563eb` (Blue)
- `--secondary-color: #7c3aed` (Purple)
- `--accent-color: #06b6d4` (Cyan)
- `--text-color: #1f2937` (Dark gray)
- `--text-light: #6b7280` (Light gray)

### Common Components:
- `.lesson-intro` - Highlighted intro boxes
- `.term-card` - Content cards
- `.accordion` - Expandable sections
- `.experiment-card` - Experiment displays
- `.resource-column` - Resource lists

## 📱 Responsive Design

All lessons are mobile-responsive by default. Test on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Publishing Checklist

Before publishing a new lesson:
- [ ] Content is complete and proofread
- [ ] Sketchnote is added and displays correctly
- [ ] All experiments are linked and working
- [ ] Resources are curated and links verified
- [ ] Navigation buttons work (prev/next)
- [ ] Lesson is added to main index.html
- [ ] Mobile responsiveness tested
- [ ] Accordion functionality works
- [ ] Search functionality includes new content

## 💡 Tips for Great Lessons

1. **Start Simple**: Begin with core concepts before diving deep
2. **Use Visuals**: Diagrams, charts, and sketchnotes enhance learning
3. **Interactive**: Include experiments that let learners practice
4. **Progressive**: Each lesson builds on previous knowledge
5. **Curate Resources**: Quality over quantity for external links
6. **Real Examples**: Use practical, relatable examples
7. **Clear Navigation**: Make it easy to move between sections

## 🤝 Contributing

To contribute a lesson:
1. Create your lesson following this structure
2. Add experiments or demos
3. Include a sketchnote if possible
4. Test thoroughly
5. Submit a pull request with description

## 📞 Questions?

Open an issue on GitHub or reach out to the maintainers!

Happy teaching! 🎓
