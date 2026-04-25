# WebAppKit Templates - Quick Reference Guide

**Location:** `/Users/mblejano/Documents/MBLEJANO Personal/webkit-templates/`

---

## 🚀 When to Use Each Template

### Use **webkit-api** (Laravel Backend) when:
- ✅ Building a RESTful API for SPA/mobile clients
- ✅ Need token-based authentication (Sanctum + JWT)
- ✅ Require RBAC with Spatie permissions
- ✅ Need S3 uploads with pre-signed URLs
- ✅ Require email notifications (forgot password, account validation)
- ✅ Need multi-factor authentication (Email OTP + Google Authenticator)
- ✅ Require queueing (Redis + AWS SQS)
- ✅ Need webhook integrations with API key auth
- ✅ Want full test coverage (Feature + Unit tests)
- ✅ Need GitLab CI/CD pipelines
- ✅ Want automated git hooks (GrumPHP, PSR compliance)

**DO NOT use for:**
- ❌ Simple CRUD apps without auth
- ❌ Static sites or server-rendered views
- ❌ Quick prototypes (< 1 week timeline)

---

### Use **webkit-spa-prime** (Vue 3 Frontend) when:
- ✅ Building a single-page application
- ✅ Need TypeScript for type safety
- ✅ Want PrimeVue components with TailwindCSS
- ✅ Require central state management (Pinia)
- ✅ Need form validation (Vuelidate)
- ✅ Require router guards for RBAC
- ✅ Need login/register/forgot password flows
- ✅ Want dashboard with charts (ApexCharts)
- ✅ Need user management screens (CRUD, search)
- ✅ Want responsive design with PrimeVue Aura theme
- ✅ Need international phone validation
- ✅ Want automated linting/formatting (ESLint + Prettier)
- ✅ Need git hooks (Husky)

**DO NOT use for:**
- ❌ Server-rendered Blade templates
- ❌ Simple static landing pages
- ❌ Projects without Vue ecosystem

---

## 📋 Feature Comparison

| Feature | webkit-api | webkit-spa-prime |
|---------|------------|------------------|
| **Framework** | Laravel 10 | Vue 3 + TypeScript |
| **Auth** | Sanctum + JWT | Router guards + Pinia |
| **RBAC** | Spatie permissions | Route-level guards |
| **State Mgmt** | N/A | Pinia |
| **UI Library** | N/A | PrimeVue (Aura) + Tailwind |
| **Validation** | FormRequest | Vuelidate |
| **File Upload** | S3 pre-signed URLs | Profile picture upload |
| **Notifications** | Email + Slack + SQS | Email validation screens |
| **MFA** | Email OTP + Google Auth | UI screens for MFA setup |
| **Testing** | PHPUnit (Feature + Unit) | Vitest (if configured) |
| **Git Hooks** | GrumPHP | Husky |
| **CI/CD** | GitLab CI | GitLab CI |
| **Monitoring** | Clockwork | N/A |

---

## 🛠️ Setup Commands

### Backend (webkit-api)
```bash
cd /path/to/project
composer install
cp .env.example .env
cp .env.example .env.testing
php artisan key:generate
php artisan app:init  # migrations + seeders
php artisan test
php artisan serve
php artisan queue:work --queue=otp,emails,dev_alerts,default
```

### Frontend (webkit-spa-prime)
```bash
cd /path/to/project
npm install
npm run prepare  # Husky setup
cp .env.development .env.development.local
# Update VITE_API_ROOT_URL to point to backend
npm run dev
```

---

## 🎯 Project Type Recommendations

### **Enterprise App** (RBAC, MFA, Notifications)
- ✅ Use **both templates**
- Backend: webkit-api (full features)
- Frontend: webkit-spa-prime (full features)
- Timeline: 4-8 weeks

### **API-Only Service**
- ✅ Use **webkit-api only**
- Frontend: Custom or third-party
- Timeline: 2-4 weeks

### **Simple SPA** (No complex auth/RBAC)
- ⚠️ Use **webkit-spa-prime** (strip unused features)
- Backend: Laravel minimal or alternative
- Timeline: 1-2 weeks

### **Hello World / PoC**
- ❌ **Don't use templates**
- Start from scratch (like hello-world-spa + hello-world-api)
- Timeline: < 1 week

---

## 📁 Template Structure

### webkit-api
```
webkit-api/
├── app/
│   ├── Console/Commands/   # Custom artisan commands
│   ├── Http/
│   │   ├── Controllers/    # API controllers
│   │   ├── Middleware/     # Auth, RBAC
│   │   └── Requests/       # FormRequest validators
│   ├── Models/             # Eloquent models
│   └── Services/           # Business logic abstraction
├── config/                 # Laravel config files
├── database/
│   ├── migrations/         # DB schema
│   └── seeders/            # Test data
├── routes/
│   └── api.php             # API routes
├── tests/
│   ├── Feature/            # API endpoint tests
│   └── Unit/               # Unit tests
└── .gitlab-ci.yml          # CI/CD pipeline
```

### webkit-spa-prime
```
webkit-spa-prime/
├── src/
│   ├── components/         # Reusable Vue components
│   ├── views/              # Page components
│   ├── router/             # Vue Router + guards
│   ├── stores/             # Pinia stores
│   ├── services/           # API client
│   └── validations/        # Vuelidate rules
├── public/
├── .env.development
├── .env.production
├── package.json
└── vite.config.js
```

---

## 🔗 Integration Points

### Backend ↔ Frontend Communication
1. **API Root URL**: Set `VITE_API_ROOT_URL` in frontend `.env`
2. **Auth Token**: Store JWT/Sanctum token in Pinia store
3. **API Client**: Use axios/fetch with interceptors for auth headers
4. **Error Handling**: Centralized in both (app/Exceptions/Handler.php + Vue error boundaries)

### RBAC Flow
1. Backend: Spatie permissions on User model
2. Frontend: Router guards check roles/permissions
3. API: Middleware validates permissions per endpoint

### File Upload Flow
1. Frontend: Request pre-signed URL from backend
2. Backend: Generate S3 pre-signed URL
3. Frontend: Upload directly to S3
4. Backend: Update database with file metadata

---

## ⚠️ Gotchas & Notes

1. **PHP Version**: Minimum PHP 8.2 required for webkit-api
2. **Node Version**: Use LTS Node.js for webkit-spa-prime
3. **Database**: MySQL 8+ or MariaDB 10.5+ (JSON + fulltext support)
4. **Redis**: Required for queueing in webkit-api
5. **Timezone**: Default is `Asia/Manila` (change in `config/app.php`)
6. **Upload Size**: Set `upload_max_filesize = 10M` in php.ini
7. **Environment Files**: Request `.env` and `.env.testing` from SCRUM master

---

## 📞 Authors & Support

- **webkit-api**: Jego Carlo Ramos, John Paul Gulayan
- **webkit-spa-prime**: DSWD-DX Team

For questions or issues, contact the tech lead or refer to the README in each template directory.

---

*Last updated: 2026-04-24*
