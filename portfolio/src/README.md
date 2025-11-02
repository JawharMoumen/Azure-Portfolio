# Jawhar Moumen - Portfolio

# Live demo
**Azure Static Web App:** [https://icy-grass-048358f10.3.azurestaticapps.net/]

# Om Projektet
Detta är mitt personliga portfolio skapat med React och deployat till Microsoft Azure Static Web App. Projektet demonstrerar:
- Modern frontend-utveckling med React
- Cloud deployment med Azure
- CI/CD automation med GitHub Actions
- Infrastructure as Code

# Tech Stack
- **Frontend:** React 18
- **Styling:** CSS3 + Tailwind utility classes
- **Icons:** Lucide React
- **Hosting:** Azure Static Web Apps
- **CI/CD:** GitHub Actions
- **Version Control:** Git & GitHub

# Screenshots 

# Deployment Process

# 1. Lokal Utveckling
Skapade React-applikation med:
```bash
npx create-react-app jawhar-portfolio
cd jawhar-portfolio
npm install lucide-react
npm start
```

# 2. Version Control
Pushade till GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio setup"
git remote add origin https://github.com/JawharMoumen/Azure-Portfolio.git
git push -u origin main
```

# 3. Azure Static Web App
Deployade via Azure Portal:
- Resource Group: `jawhar-portfolio-rg`
- Location: `North Europe`
- Plan: `Free tier`
- Build Preset: `React`
- App location: `/portfolio`
- Output location: `build`

# 4. CI/CD Pipeline
GitHub Actions workflow konfigurerades automatiskt:
- Trigger: Push till `main` branch
- Build: Node.js 18 med npm
- Deploy: Azure Static Web Apps
- Tid: ~3-5 minuter per deployment

# Vad Jag Lärde Mig

# Cloud Computing Fundamentals
- **Vad är molnet:** On-demand IT-resurser över internet
- **Fördelar:** Skalbarhet, tillgänglighet, global räckvidd, kostnadskontroll
- **Service Models:** IaaS (Infrastructure), PaaS (Platform), SaaS (Software)

# Microsoft Azure
- **Azure Portal:** Webbgränssnitt för att hantera resurser
- **Resource Groups:** Logisk gruppering av resurser
- **Static Web Apps:** Optimerad för statiska sidor och SPAs
- **Global CDN:** Snabb distribution världen över

# Skalning & Prismodell
- **Vertikal skalning:** Mer kraft (CPU/RAM) till en server
- **Horisontell skalning:** Fler servrar för ökad kapacitet
- **Pay-as-you-go:** Betala endast för vad du använder
- **Tier Levels:** Free, Basic, Standard, Premium

# CI/CD Pipeline
- **GitHub Actions:** Automatiserad workflow
- **Build Process:** npm install → npm build → deploy
- **Continuous Deployment:** Varje push triggar deployment
- **Monitoring:** Loggning och status-tracking

# Problemlösning
- Löste Azure policy restrictions för student-konton
- Debuggade build-fel med oanvända imports (ESLint)
- Hanterade Git merge conflicts
- Analyserade GitHub Actions logs för felsökning

# Portfolio Features
- Responsiv design för alla enheter
- Interaktiv navigation
- Projekt showcase med länkar
- Skills visualization
- Direkta kontaktlänkar (GitHub, LinkedIn, Email)
- Snabb laddningstid via Azure CDN

# Kör Lokalt

### Klona Repository
```bash
git clone https://github.com/JawharMoumen/Azure-Portfolio.git
cd Azure-Portfolio/portfolio
```

# Installera Dependencies
```bash
npm install
```

# Starta Development Server
```bash
npm start
```
Öppnas automatiskt på `http://localhost:3000`

# Bygg för Produktion
```bash
npm run build
```
Skapar optimerad build i `build/` mappen.

# Updatera Workflow

1. Gör ändringar lokalt i `src/App.js`
2. Testa med `npm start`
3. Commit och push till GitHub:
```bash
git add .
git commit -m "Beskrivande meddelande"
git push
```
4. GitHub Actions deployar automatiskt (3-5 min)
5. Refresh Azure URL för att se ändringar

# Azure Resources

| Resource | Värde |
|----------|-------|
| Resource Group | jawhar-portfolio-rg |
| App Name | jawhar-portfolio |
| Location | North Europe |
| Plan | Free (0 SEK/månad) |
| Runtime | Node.js 18.x |
| Framework | React |
| URL | https://icy-grass-048358f10.3.azurestaticapps.net/ |

# Säkerhet
- HTTPS aktiverat automatiskt
- Custom domain support tillgänglig
- Environment secrets via GitHub
- Azure deployment token skyddad

# Dokumentation & Resurser
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [React Documentation](https://react.dev/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Lucide React Icons](https://lucide.dev/)

# License
MIT License - Fritt att använda för utbildningssyfte

# Skapare
**Jawhar Moumen**
- GitHub: [@JawharMoumen](https://github.com/JawharMoumen)
- Portfolio: [icy-grass-048358f10.3.azurestaticapps.net](https://icy-grass-048358f10.3.azurestaticapps.net/)
- Skola: STI (Stockholms Tekniska Institut)

---

*Projekt skapat som del av Molntjänster-kursen (Cloud Services) - November 2025*

**Deployment Date:** November 2, 2025  
**Status:** Live and Running