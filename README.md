# Motiget Social Media API 🚀

## Haqqında
Motiget, sosial media funksionallığını təmin edən REST API-dır. Bu API istifadəçi hesablarının idarə edilməsi, post paylaşımı, bəyənmə və şərh sistemlərini əhatə edir.

## Texniki Tələblər
- Node.js (v14 və ya daha yuxarı)
- MongoDB (v4.4 və ya daha yuxarı)
- npm (v6 və ya daha yuxarı)

## Quraşdırma
1. Layihəni klonlayın:
```bash
git clone [layihə_linki]
cd backend
```

2. Asılılıqları yükləyin:
```bash
npm install
```

3. `.env` faylını yaradın və aşağıdakı məlumatları əlavə edin:
```env
MONGODB_URI=mongodb://localhost:27017/motiget
JWT_SECRET=your_jwt_secret
API_KEY=your_api_key
GEMINI_API_KEY=your_gemini_api_key
```

4. Serveri işə salın:
```bash
npm start
```

## API Endpoint'ləri

### İstifadəçi Əməliyyatları

#### 1. Qeydiyyat
```http
POST /api/app/register
Content-Type: application/json

{
    "username": "istifadəçi_adı",
    "email": "email@domain.com",
    "password": "şifrə"
}
```

#### 2. Giriş
```http
POST /api/app/login
Content-Type: application/json

{
    "email": "email@domain.com",
    "password": "şifrə"
}
```
Cavab:
```json
{
    "token": "JWT_TOKEN",
    "userId": "USER_ID"
}
```

### Post Əməliyyatları

#### 1. Post Yaratmaq
```http
POST /api/app/posts
Authorization: Bearer JWT_TOKEN
Content-Type: application/json

{
    "content": "Post məzmunu"
}
```

#### 2. Bütün Postları Almaq
```http
GET /api/app/posts
Authorization: Bearer JWT_TOKEN
```

### Bəyənmə və Şərh Əməliyyatları

#### 1. Postu Bəyənmək/Bəyənməni Ləğv Etmək
```http
POST /api/app/posts/:postId/like
Authorization: Bearer JWT_TOKEN
```

#### 2. Posta Şərh Yazmaq
```http
POST /api/app/posts/:postId/comments
Authorization: Bearer JWT_TOKEN
Content-Type: application/json

{
    "content": "Şərh məzmunu"
}
```

## Autentifikasiya
Bütün endpoint'lər (qeydiyyat və giriş xaric) JWT autentifikasiyası tələb edir. Token'i request'in `Authorization` header'ində `Bearer` prefiksi ilə göndərin.

## Xəta Kodları
- 200: Uğurlu əməliyyat
- 201: Resurs uğurla yaradıldı
- 400: Yanlış request
- 401: Autentifikasiya xətası
- 404: Resurs tapılmadı
- 500: Server xətası

## Təhlükəsizlik Tövsiyələri
1. JWT token'i təhlükəsiz şəkildə saxlayın
2. API açarını heç vaxt client tərəfdə açıq şəkildə saxlamayın
3. Güclü şifrələrdən istifadə edin
4. Rate limiting tətbiq edin

## Əlaqə
Hər hansı sual və ya problem yaranarsa, [əlaqə_məlumatları] ilə əlaqə saxlaya bilərsiniz.

## Lisenziya
Bu layihə [lisenziya_adı] ilə lisenziyalaşdırılıb.
