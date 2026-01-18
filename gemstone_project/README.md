# Gemstone Polishing Machine - Full Stack Web Application

A full-stack web application for an Energy-Efficient and Eco-Friendly Gemstone Polishing Machine project. Built with Django REST Framework (backend) and React + Vite (frontend).

## 🎯 Features

- **User Authentication**: Email-based registration and login system
- **Machine Orders**: Users can place orders for gemstone polishing machines
- **Polishing Services**: Request gemstone polishing services with pickup/delivery
- **Email Confirmations**: Automated email confirmations for orders and service requests
- **Admin Panel**: Django admin interface for managing users, orders, and requests

## 🛠️ Tech Stack

### Backend
- **Django 6.0.1** - Web framework
- **Django REST Framework** - API development
- **SQLite** - Database
- **Python 3.x** - Programming language

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **React Router** - Navigation

## 📋 Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
cd gemstone_project
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd gemstone_backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Create superuser (optional, for admin access)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

Backend will run at: `http://localhost:8000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd gemstone_frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at: `http://localhost:5173` or `http://localhost:5174`

## 📧 Email Configuration

The application uses **console email backend** for development. Emails are printed to the Django server console instead of being sent to real email addresses.

### Current Configuration (Development)
```python
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
DEFAULT_FROM_EMAIL = "noreply@gemstoneproject.test"
```

### To Enable Real Email (Production)
Uncomment lines 168-174 in `gemstone_backend/gemstone_backend/settings.py` and configure your SMTP settings:

```python
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = "your-email@gmail.com"
EMAIL_HOST_PASSWORD = "your-app-password"
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
```

## 🔐 Authentication

The application uses **session-based authentication** with custom CSRF exemption for API endpoints.

### Key Features:
- Email as username (no separate username field)
- Secure password hashing
- Session cookies with CORS support
- Custom authentication class: `CsrfExemptSessionAuthentication`

## 📁 Project Structure

```
gemstone_project/
├── gemstone_backend/          # Django backend
│   ├── accounts/              # User authentication app
│   │   ├── models.py         # Custom User model
│   │   ├── views.py          # Register, Login, Logout views
│   │   ├── serializers.py    # User serializers
│   │   └── authentication.py # Custom auth class
│   ├── core/                  # Core functionality app
│   │   ├── models.py         # Order and Request models
│   │   ├── views.py          # Order and Service views
│   │   └── serializers.py    # Order serializers
│   ├── gemstone_backend/      # Project settings
│   │   ├── settings.py       # Django settings
│   │   └── urls.py           # URL configuration
│   └── manage.py
│
├── gemstone_frontend/         # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service (api.js)
│   │   └── App.jsx           # Main app component
│   ├── package.json
│   └── vite.config.js
│
└── venv/                      # Python virtual environment
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register/` - Register new user
- `POST /api/auth/login/` - Login user
- `POST /api/auth/logout/` - Logout user

### Orders & Services
- `POST /api/orders/` - Create machine order (requires authentication)
- `POST /api/services/` - Create polishing request (requires authentication)
- `POST /api/contact/` - Send contact message

### Admin
- `/admin/` - Django admin panel

## 👤 Test User

For testing purposes, you can use:
- **Email**: `lidya.etana@gmail.com`
- **Password**: `abcd@1234` (or create your own user)

## 🧪 Testing

### Manual Testing
1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173` (or 5174)
3. Register a new user
4. Login with credentials
5. Place a machine order
6. Submit a polishing request
7. Check Django console for email confirmations

### Expected Email Output
When you place an order or request, you'll see detailed email output in the Django server console:

```
✓ Order confirmation email sent to user@example.com

Subject: Order Confirmation #1 - Gemstone Polishing Machine
From: noreply@gemstoneproject.test
To: user@example.com

Dear [Name],

Thank you for your order!

Order Details:
--------------
Order ID: #1
Product: Gemstone Polishing Machine
Quantity: 2
Order Date: 2026-01-18 15:56:28
...
```

## 🔧 Configuration

### CORS Settings
The backend is configured to accept requests from:
- `http://localhost:5173`
- `http://127.0.0.1:5173`
- `http://localhost:5174`
- `http://127.0.0.1:5174`

### Session Settings
- Session cookie age: 2 weeks (1,209,600 seconds)
- SameSite: Lax
- HttpOnly: True
- Secure: False (set to True in production with HTTPS)

## 🐛 Troubleshooting

### Issue: "Registration failed. No response from server"
**Solution**: Ensure backend is running on port 8000 and CORS settings include your frontend port.

### Issue: "403 Forbidden" on orders
**Solution**: The custom `CsrfExemptSessionAuthentication` class should handle this. Ensure it's properly configured in `settings.py`.

### Issue: "Invalid email or password"
**Solution**: Use a strong password (e.g., `Test@12345`). Django has password validators that reject weak passwords.

### Issue: No email in console
**Solution**: Check that `EMAIL_BACKEND` is set to `console.EmailBackend` and the Django server is running.

## 📝 Notes

- This is a development/academic project
- Console email backend is used (no real emails sent)
- SQLite database is used (not suitable for production)
- CSRF exemption is enabled for API endpoints
- Session-based authentication is used

## 🎓 Academic Project

This application was developed as part of an Integrated Engineering Team Project (IETP) focusing on energy-efficient and eco-friendly gemstone polishing technology.

## 📄 License

This project is for academic purposes.

## 👥 Authors

Developed for university coursework - Gemstone Polishing Machine Project

---

**Last Updated**: January 18, 2026
