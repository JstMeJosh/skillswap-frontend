# SkillSwap Frontend

A modern React-based frontend for the SkillSwap platform - a community-driven skill exchange application built with Vite, Tailwind CSS, and Lucide Icons.

## Features

- ⚡ **Fast & Modern** - Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI** - Tailwind CSS with responsive design
- 🔄 **Real-time Updates** - Seamless skill swap browsing and management
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **Toast Notifications** - User-friendly feedback with react-toastify
- 🎭 **Icon Library** - Lucide React icons for intuitive UI
- 🔄 **State Management** - React hooks for efficient state handling
- 🌐 **API Integration** - Axios for backend communication

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Linting**: ESLint

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend API running on `http://localhost:5000`

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/JstMeJosh/skillswap-frontend.git
cd skillswap-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

### Development
```bash
npm run dev
```
Start the development server with Vite. Hot Module Replacement (HMR) is enabled for instant updates.

### Build
```bash
npm run build
```
Create a production-ready build in the `dist/` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and style.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── EditModal.jsx      # Modal for editing skill swaps
│   │   ├── SwapForm.jsx       # Form to create new swaps
│   │   └── SwapList.jsx       # List of all skill swaps
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── public/
│   └── favicon.svg            # SkillSwap favicon
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel deployment configuration
├── eslint.config.js           # ESLint configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── .env                       # Environment variables (local)
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## Components

### App.jsx
Main application component that manages:
- Swap data fetching and state
- Modal state for editing
- Loading states with spinner
- Overall layout structure

### SwapForm.jsx
Component for creating new skill swaps:
- Title, skill offered, skill wanted, and description inputs
- Form validation
- API submission
- Toast notifications for feedback

### SwapList.jsx
Displays all available skill swaps:
- Responsive grid layout (1-3 columns)
- Skill badges with color coding
- Edit and delete buttons
- Delete confirmation dialog
- Icons from Lucide React

### EditModal.jsx
Modal for updating existing swaps:
- Pre-populated form fields
- Form validation
- Update submission
- Modal close functionality
- Error handling with toasts

## Key Features

### 🎯 Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layout: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Adaptive components for all screen sizes

### 🔔 Toast Notifications
- Success notifications for successful operations
- Error notifications for failed operations
- Confirmation dialogs for destructive actions
- Auto-dismiss after 3 seconds

### ⚡ Loading States
- Spinner animation while fetching data
- Smooth transitions and animations
- User-friendly feedback

### 🎭 UI/UX
- Color-coded skill badges (green for offers, orange for wants)
- Hover effects and transitions
- Clear visual hierarchy
- Accessible buttons and forms

## API Integration

The frontend communicates with the backend API at `http://localhost:5000`:

- `GET /api/swaps` - Fetch all swaps
- `POST /api/swaps` - Create new swap
- `PUT /api/swaps/:id` - Update swap
- `DELETE /api/swaps/:id` - Delete swap

## Environment Configuration

The frontend uses the `VITE_API_URL` environment variable to configure the backend API endpoint.

### Local Development

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
```

### Production

Set the environment variable in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add `VITE_API_URL` with your production backend URL

**Other Platforms:**
Create a `.env.production` file:
```env
VITE_API_URL=https://your-api-domain.com
```

### Accessing Environment Variables in Code

The environment variables are automatically loaded in Vite and can be accessed using:
```javascript
import.meta.env.VITE_API_URL
```

Example usage in axios calls:
```javascript
const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/swaps`);
```

## Development Workflow

1. Start the development server: `npm run dev`
2. Make changes to components
3. Vite's HMR will instantly reload the page
4. Use React DevTools for debugging
5. Check console for errors and warnings

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

To preview the production build:
```bash
npm run preview
```

## Deployment

### Vercel Deployment (Recommended)

The project includes a `vercel.json` configuration file for seamless Vercel deployment.

#### Prerequisites
- Vercel account (sign up at https://vercel.com)
- GitHub repository linked to Vercel

#### Deployment Steps

1. **Push to GitHub**
```bash
git push origin master
```

2. **Import Project to Vercel**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose the skillswap-frontend repository
   - Click "Import"

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add `VITE_API_URL` with your backend API URL:
   ```
   VITE_API_URL=https://skillswap-backend-api.onrender.com
   ```
   - Click "Add"

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

#### Vercel Configuration

The `vercel.json` file includes:
- Build command: `npm run build`
- Output directory: `dist/`
- Framework detection: Vite
- Automatic rewrites for SPA routing

#### Environment Variables for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `https://skillswap-backend-api.onrender.com` |

#### Custom Domain

1. In Vercel Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Alternative Hosting Options

**Netlify**
```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

**GitHub Pages**
Update `vite.config.js`:
```javascript
export default {
  base: '/skillswap-frontend/',
  // ...rest of config
}
```

**Docker**
```bash
docker build -t skillswap-frontend .
docker run -p 80:3000 skillswap-frontend
```

## Styling

The project uses **Tailwind CSS** for styling with a custom configuration:
- Custom color scheme with blue primary color (#2563eb)
- Responsive utility classes
- Pre-configured breakpoints
- Component-specific styles in JSX

Key Tailwind classes used:
- Layout: `grid`, `flex`, `max-w-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Effects: `shadow-*`, `hover:*`, `transition-*`
- Responsive: `md:`, `lg:` prefixes

## Icons

The project uses **Lucide React** icons:
- `Pencil` - Edit button
- `Trash2` - Delete button
- `Send` - Contact button
- `Loader` - Loading spinner
- `AlertCircle` - Confirmation dialogs

## Performance Optimizations

- ✅ Tree-shaking with Vite
- ✅ Code splitting for components
- ✅ Lazy loading where applicable
- ✅ Optimized images (favicon as SVG)
- ✅ Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### API Connection Issues
- Ensure backend is running on `http://localhost:5000`
- Check browser console for CORS errors
- Verify `.env` configuration

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `npm run build -- --reset-cache`
- Check Node version: `node --version` (should be v16+)

### Hot Reload Not Working
- Restart the dev server: `npm run dev`
- Check Vite configuration
- Clear browser cache

## Future Enhancements

- User authentication and profiles
- Advanced search and filtering
- User ratings and reviews
- Real-time messaging
- Skill categories and tags
- Dark mode theme
- PWA capabilities
- Accessibility improvements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to the project maintainer.

---

**Happy Skill Swapping! 🚀**
