# ⚡ Visual Portfolio Builder (No-Code)

This project is a modern, JSON-based tool that allows you to build and manage your own **Personal Portfolio Website** without writing a single line of code.

With the built-in **Visual Editor**, you don't need a database or backend. You can update your entire site simply by replacing a single data file.

🔗 **Live Demo:** [bahadirkus.github.io](https://bahadirkus.github.io/)

---

## 📺 How It Works

Watch the 1-minute workflow to see how easy it is to set up:

[![Watch Tutorial Video](https://img.shields.io/badge/Watch_Tutorial_Video-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=G1R4V7UP-W0)

---

## 🚀 Quick Start Guide

Follow these steps to publish your site:

### 1. Download the Project
Clone this repository or download it as a ZIP file to your computer.

### 2. Open the Visual Editor
Navigate to the project folder and double-click the `editor.html` file. This opens the management panel in your browser.
* **To start fresh:** Click the **"✨ CREATE NEW PORTFOLIO"** button at the top to clear all example data.

### 3. Prepare Your Images (Important ⚠️)
Since this system runs locally, you must place your image files inside the project folder:
1.  Copy your photos (profile picture, project covers, etc.) into the **`assets/images/`** folder on your computer.
2.  In the Editor, when asked for an "Image Path", enter it like this:
    * `assets/images/my-profile.jpg`
    * `assets/images/project-cover-1.png`

### 4. Edit & Save
Fill in your Profile, Resume, and Project details in the editor. When finished, click the **"💾 SAVE FILE"** button at the bottom right.
* This will download a file named `projects.js` to your computer.

### 5. Replace the Data File
Take the downloaded `projects.js` file, move it to the **`assets/js/`** folder in your project directory, and **replace/overwrite** the existing file.

Congratulations! Open `index.html` to see your updated portfolio live.

---

## 📂 Project File Structure

For the system to work correctly, keep your files organized as shown below:

```text
📦 Portfolio-Root
 ┣ 📂 assets
 ┃ ┣ 📂 css        # Styles
 ┃ ┣ 📂 images     # 📸 DROP YOUR PHOTOS HERE
 ┃ ┗ 📂 js
 ┃   ┗ 📜 projects.js  # ⚙️ THE FILE YOU DOWNLOAD FROM EDITOR GOES HERE
 ┣ 📜 editor.html  # Admin Panel (Edit your content here)
 ┣ 📜 index.html   # Your Main Website
 ┗ 📜 README.md
