# 🔎 Minimal Search Engine

A sleek, minimalistic search engine that returns **curated, link-based results** using the **Exa API**. Designed with a professional, elegant UI, this project prioritizes both functionality and user experience — complete with a dark mode toggle and centered search input.

> “What can I help you with?” – the app prompts users to think clearly and search effectively.

## ✨ Features

- 🖤 **Minimalist UI**: Inspired by formal, clean design principles with office-like aesthetics.
- 🌗 **Dark Mode Toggle**: Switch between light and dark themes seamlessly.
- 🎯 **Smart Search**: Pulls curated, intelligent link-based results from the Exa API.
- 💬 **Conversational Prompt**: Sentence-completion based search bar gives it a smart-assistant feel.
- ⚡ **Fast & Responsive**: Built with React (frontend) and FastAPI (backend).
- 🚀 **Fully Deployed**: Hosted on [Vercel (frontend)](https://minimal-search-engine.vercel.app/) and [Render (backend)](https://minimal-search-engine.onrender.com).

---

## 🔧 Tech Stack

- **Frontend**: React.js, TailwindCSS, Vercel
- **Backend**: FastAPI, Python, Render
- **APIs Used**:
  - [Exa Search API](https://exa.ai/)
  - (Optional) OpenAI (for advanced completions – currently disabled to keep costs zero)

---

## 🚀 Try It Live

🔗 **Frontend**: [minimal-search.vercel.app](https://minimal-search-engine.vercel.app/)  
🧠 **Backend**: [Render App](https://minimal-search-engine.onrender.com) *(returns JSON if visited directly)*

---
 Notes

This is not a conversational chatbot. It provides smart, link-based summaries, ideal for research and discovery.
OpenAI GPT support can be re-enabled by adding your key in the .env file, though not needed for Exa functionality.

---
Inspiration

This project was built to simulate how modern search tools could evolve — merging curated results with sleek design and helpful prompts. It was also a hands-on deep dive into full-stack deployment using real APIs.

---
For Recruiters

This is a fully-functional full-stack project built from scratch, showcasing:

API integration
Environment config
UI/UX polish
Git/GitHub workflow
Deployment on production-ready platforms

---
## 📁 Local Setup (Optional for Devs)

1. Clone the repo:

```bash
git clone https://github.com/hdomadia7601/Minimal_search_engine.git
cd Minimal_search_engine

2. Install frontend and backend dependencies
# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip install -r requirements.txt

3. Run locally
# Start backend
uvicorn main:app --reload

# In another terminal, start frontend
cd frontend
npm run dev

