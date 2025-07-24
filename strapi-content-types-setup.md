# 📝 STRAPI CONTENT TYPES SETUP GUIDE

## **🎯 Step-by-Step Instructions:**

### **1. AUTHOR CONTENT TYPE**

1. **Go to Content-Type Builder**
2. **Click "Create new collection type"**
3. **Name it: `Author`**
4. **Add these fields:**

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | Text (Short text) | ✅ Yes | Author's full name |
| `bio` | Text (Long text) | ❌ No | Author's biography |
| `image` | Media (Single media) | ❌ No | Author's profile photo |
| `credentials` | Text (Short text) | ❌ No | Professional credentials |
| `specialties` | Text (Short text) | ❌ No | Areas of expertise |

5. **Click "Save"**

### **2. CATEGORY CONTENT TYPE**

1. **Click "Create new collection type"**
2. **Name it: `Category`**
3. **Add these fields:**

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | Text (Short text) | ✅ Yes | Category name |
| `description` | Text (Long text) | ❌ No | Category description |
| `color` | Text (Short text) | ❌ No | Color for display |
| `icon` | Text (Short text) | ❌ No | Icon name |

4. **Click "Save"**

### **3. ARTICLE CONTENT TYPE**

1. **Click "Create new collection type"**
2. **Name it: `Article`**
3. **Add these fields:**

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | Text (Short text) | ✅ Yes | Article title |
| `slug` | UID | ✅ Yes | URL slug (based on title) |
| `excerpt` | Text (Long text) | ✅ Yes | Article summary |
| `content` | Rich Text | ✅ Yes | Main article content |
| `mainImage` | Media (Single media) | ❌ No | Featured image |
| `publishedAt` | Date | ✅ Yes | Publication date |
| `seoTitle` | Text (Short text) | ❌ No | SEO title |
| `seoDescription` | Text (Long text) | ❌ No | SEO description |
| `seoKeywords` | Text (Short text) | ❌ No | SEO keywords |
| `featured` | Boolean | ❌ No | Featured article flag |

4. **Click "Save"**

### **4. SET UP RELATIONS**

#### **Article ↔ Author Relation:**
1. **Go back to Article content type**
2. **Click "Add another field"**
3. **Choose "Relation"**
4. **Select "Article has one Author"**
5. **Click "Save"**

#### **Article ↔ Category Relation:**
1. **Still in Article content type**
2. **Click "Add another field"**
3. **Choose "Relation"**
4. **Select "Article has and belongs to many Categories"**
5. **Click "Save"**

### **5. CONFIGURE PERMISSIONS**

1. **Go to "Settings" → "Users & Permissions plugin"**
2. **Click "Roles" → "Public"**
3. **Find "Article" and enable:**
   - ✅ `find`
   - ✅ `findOne`
4. **Find "Author" and enable:**
   - ✅ `find`
   - ✅ `findOne`
5. **Find "Category" and enable:**
   - ✅ `find`
   - ✅ `findOne`
6. **Click "Save"**

## **🎯 Sample Data to Add:**

### **Authors:**
- **Name**: Dr. Salma Elhamadan
- **Bio**: Naturopathic Doctor specializing in women's health and hormonal balance
- **Credentials**: ND, Women's Health Specialist
- **Specialties**: PCOS, Thyroid Health, Hormonal Balance

### **Categories:**
- **Women's Health** - Comprehensive women's wellness
- **Hormonal Balance** - Natural hormone support
- **PCOS** - Polycystic ovary syndrome management
- **Thyroid Health** - Thyroid function optimization
- **Natural Medicine** - Holistic healing approaches

### **Sample Article:**
- **Title**: "Understanding Hormonal Balance: A Natural Approach"
- **Slug**: `understanding-hormonal-balance-natural-approach`
- **Excerpt**: "Discover natural ways to support your hormonal health and achieve balance through lifestyle changes, nutrition, and natural remedies."
- **Content**: [Rich text content about hormonal balance]
- **Author**: Dr. Salma Elhamadan
- **Categories**: Women's Health, Hormonal Balance
- **SEO Title**: "Natural Hormonal Balance for Women - Dr. Salma"
- **SEO Description**: "Discover natural ways to support hormonal health and achieve balance through lifestyle changes, nutrition, and natural remedies."
- **SEO Keywords**: "hormonal balance, women health, natural remedies, hormones, wellness"

## **✅ After Setup:**

1. **Test API**: Visit `http://localhost:1337/api/articles?populate=*`
2. **Test Frontend**: Visit `http://localhost:3010/blog`
3. **Verify**: Articles appear on your blog

## **🎉 Success Indicators:**

- ✅ Content types created
- ✅ Relations configured
- ✅ Permissions set
- ✅ Sample data added
- ✅ API returns data
- ✅ Frontend displays articles

---

**Follow these steps exactly and your Strapi blog will be ready!** 🚀 