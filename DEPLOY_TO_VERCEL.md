# 🚀 Deploy to Vercel - Complete Guide

## **Step 1: Deploy Strapi Backend**

### 1.1 Push Strapi to GitHub
```bash
# Navigate to strapi-blog directory
cd strapi-blog

# Initialize git if not already done
git init
git add .
git commit -m "Initial Strapi setup"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/dr-salma-strapi.git
git push -u origin main
```

### 1.2 Deploy Strapi to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `dr-salma-strapi` repository
5. Configure:
   - **Framework Preset**: Node.js
   - **Root Directory**: `strapi-blog`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

6. Add Environment Variables:
   ```
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   NODE_ENV=production
   ```

7. Click "Deploy"

### 1.3 Get Your Strapi URL
After deployment, you'll get a URL like:
`https://dr-salma-strapi.vercel.app`

## **Step 2: Update Frontend Configuration**

### 2.1 Update Environment Variables
Replace the placeholder in `vercel.json`:
```json
{
  "env": {
    "NEXT_PUBLIC_STRAPI_URL": "https://your-actual-strapi-url.vercel.app"
  }
}
```

### 2.2 Update .env.local (for local development)
```bash
NEXT_PUBLIC_STRAPI_URL=https://your-actual-strapi-url.vercel.app
```

## **Step 3: Deploy Next.js Frontend**

### 3.1 Push Frontend to GitHub
```bash
# In the main project directory
git init
git add .
git commit -m "Initial Next.js setup"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/dr-salma-website.git
git push -u origin main
```

### 3.2 Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your `dr-salma-website` repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_STRAPI_URL=https://your-actual-strapi-url.vercel.app
   NODE_ENV=production
   ```

6. Click "Deploy"

## **Step 4: Configure Strapi Admin**

### 4.1 Access Strapi Admin
1. Go to your Strapi URL: `https://your-strapi-url.vercel.app/admin`
2. Create admin account (first time only)
3. Configure content types (Author, Category, Article)
4. Add your content

### 4.2 Set Up Permissions
1. Go to Settings → Users & Permissions Plugin → Roles
2. Select "Public" role
3. Enable permissions for:
   - Article: find, findOne
   - Author: find, findOne
   - Category: find, findOne
   - Upload: upload

## **Step 5: Test Your Deployment**

### 5.1 Test Frontend
- Visit your frontend URL
- Navigate to `/blog`
- Check if articles are loading

### 5.2 Test API
- Visit `https://your-strapi-url.vercel.app/api/articles`
- Should return JSON data

## **Step 6: Custom Domain (Optional)**

### 6.1 Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `drsalma.com`)
4. Configure DNS as instructed

## **Troubleshooting**

### Common Issues:
1. **CORS Errors**: Check Strapi CORS settings
2. **Database Issues**: Strapi uses SQLite on Vercel (limited)
3. **Build Failures**: Check Node.js version compatibility

### Environment Variables:
Make sure these are set in Vercel:
- `NEXT_PUBLIC_STRAPI_URL`
- `DATABASE_CLIENT`
- `DATABASE_FILENAME`
- `NODE_ENV`

## **Production Checklist**

- [ ] Strapi deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Environment variables configured
- [ ] Content types set up in Strapi
- [ ] Permissions configured
- [ ] Test content added
- [ ] Blog working on production
- [ ] Images uploading correctly
- [ ] SEO metadata working

## **Next Steps**

1. **Add Content**: Create articles in Strapi admin
2. **SEO Optimization**: Add meta descriptions, keywords
3. **Analytics**: Add Google Analytics
4. **Monitoring**: Set up error tracking
5. **Backup**: Regular database backups

Your blog is now live! 🎉 