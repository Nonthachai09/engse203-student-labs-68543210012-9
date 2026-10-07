# Campus Service — Full-Stack (Week 11 · starter)

> 🏠 TODO W11-README (CP40) — เขียน README นี้ใหม่ให้ครบ:
> สถาปัตยกรรม 3 ชั้น · วิธีรัน dev/production · env vars · การตัดสินใจออกแบบ

ระบบตั้งต้นจากสัปดาห์ที่ 10 (React + Express + SQLite)
งานสัปดาห์นี้: ทำให้ **พร้อมใช้จริง** — config, health check, error handling, build, deploy

## สถาปัตยกรรม 3 ชั้น

┌─────────┐  HTTP   ┌──────────┐  SQL   ┌─────────┐
│ React   │ ──────► │ Express  │ ─────► │ SQLite  │
└─────────┘  JSON   └──────────┘  rows  └─────────┘

| ชั้น | หน้าที่ | โฟลเดอร์ |
|---|---|---|
| Frontend | หน้าจอผู้ใช้ | frontend/ |
| API | route · controller · service | api/src/ |
| Database | เก็บข้อมูล | api/data/ |

## วิธีรันระบบ

### Development

ระบบในโหมด Development แยกการทำงานเป็น 2 ส่วน คือ Frontend และ API

#### 1. รัน API

เปิด Terminal ที่ 1 แล้วเข้าโฟลเดอร์ `api/`

```bash
cd api
npm install
npm run dev
```

API จะทำงานที่

```text
http://localhost:3001
```

#### 2. รัน Frontend

เปิด Terminal ที่ 2 แล้วเข้าโฟลเดอร์ `frontend/`

```bash
cd frontend
npm install
npm run dev
```

Frontend จะทำงานที่

```text
http://localhost:5173
```

ในโหมด Development หน้าเว็บจะทำงานผ่าน Vite ส่วน API จะทำงานผ่าน Express แยกกัน

---

## วิธีรันระบบแบบ Production

### 1. Build Frontend

เข้าโฟลเดอร์ `frontend/` แล้วสร้าง Production build

```bash
cd frontend
npm install
npm run build
```

เมื่อ Build สำเร็จจะได้โฟลเดอร์

```text
frontend/dist/
```

### 2. รัน API ใน Production

เข้าโฟลเดอร์ `api/`

```bash
cd api
NODE_ENV=production npm start
```

เมื่อทำงานใน Production Express จะเสิร์ฟไฟล์ Frontend จาก `frontend/dist/` และให้บริการ API จาก path `/api`

## Environment Variables

ค่าการตั้งค่าของระบบจะถูกรวมไว้ใน Environment Variables เพื่อไม่ต้องเขียนค่าการตั้งค่าโดยตรงใน source code

### API

| ตัวแปร | หน้าที่ | ค่าเริ่มต้น |
| --- | --- | --- |
| `NODE_ENV` | กำหนดโหมดการทำงานของระบบ | `development` |
| `PORT` | Port ที่ Express API ใช้งาน | `3001` |
| `CORS_ORIGIN` | URL ของ Frontend ที่อนุญาตให้เรียก API | `http://localhost:5173` |
| `DB_FILE` | ตำแหน่งไฟล์ SQLite | `api/data/campus.db` |

### Frontend

---

| ตัวแปร | หน้าที่ | ค่าเริ่มต้น |
|---|---|---|
| VITE_API_BASE_URL | กำหนดให้เรียก API ด้วย path สัมพัทธ์ /api/... (บน origin เดียวกับหน้าเว็บ) เมื่อทำการ build เป็น production | - |

## การตัดสินใจออกแบบ

การแบ่งสถาปัตยกรรมเป็น 3 ชั้น ได้แก่ Frontend, API และ Database ช่วยแยกหน้าที่และลดความซับซ้อนของระบบ ทำให้สามารถพัฒนาและบำรุงรักษาแต่ละส่วนได้อย่างเป็นอิสระ รวมถึงลดผลกระทบต่อส่วนอื่นเมื่อมีการเปลี่ยนแปลงเทคโนโลยีหรือโครงสร้างภายในระบบ

## Live Demo
🔗 https://campus-service-68543210012-9.onrender.com/

หมายเหตุ: Render free tier — เปิดครั้งแรกช้า 30–60 วินาที
ข้อมูลที่เพิ่มจะกลับเป็นค่าตั้งต้นเมื่อ restart (ephemeral filesystem)