KarSewaDalWebsite/
│
├── index.html
├── about.html
├── events.html
├── gallery.html
├── contact.html
├── style.css
└── images/

Draft code 

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kar Sewa Dal Sanstha</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif;scroll-behavior:smooth}
body{background:#fafafa;color:#333}
nav{position:fixed;top:0;width:100%;padding:15px 8%;display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(0,0,0,.08);z-index:999}
.logo{display:flex;align-items:center;gap:10px}
.logo img{width:55px;height:55px}
.logo span{font-weight:700;color:#ff9800}
nav ul{display:flex;gap:20px;list-style:none}
nav a{text-decoration:none;color:#333;font-weight:600}
header{height:100vh;background:linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}
.hero{max-width:900px;padding:20px}
.hero-logo{width:140px;height:140px;background:#fff;border-radius:50%;padding:12px;margin-bottom:20px}
.hero h1{font-size:4rem}
.hero h3{color:#ffcc4d;margin:10px 0}
.btn{display:inline-block;padding:14px 28px;margin:8px;border-radius:40px;background:linear-gradient(135deg,#ff9800,#ffb300);color:#fff;text-decoration:none;font-weight:600}
section{padding:90px 10%}
.title{text-align:center;margin-bottom:40px}
.title h2{color:#ff9800;font-size:2.4rem}
.about{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.about img{width:100%;border-radius:20px}
.cards,.stats-grid,.gallery{display:grid;gap:25px}
.cards{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.card{background:#fff;padding:25px;border-radius:18px;box-shadow:0 8px 25px rgba(0,0,0,.08);border-top:4px solid #ff9800}
.card:hover{transform:translateY(-8px)}
.stats{background:linear-gradient(135deg,#ff9800,#ffb300);color:#fff}
.stats-grid{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));text-align:center}
.stat h3{font-size:3rem}
.gallery{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.gallery img{width:100%;height:250px;object-fit:cover;border-radius:15px}
