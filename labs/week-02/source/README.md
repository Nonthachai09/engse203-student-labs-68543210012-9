# ENGSE203 Learning Dashboard

> LAB 02 — Modern JavaScript, Modules & Async Data

## ข้อมูลนักศึกษา

* รหัสนักศึกษา: `68543210012-9`
* ชื่อ: `นนทชัย ไทยตัน`
* ระบบปฏิบัติการ: `Windows11`
* GitHub Pages URL: `<https://nonthachai09.github.io/engse203-student-labs-68543210012-9/labs/week-02/>`

## ภาพรวมโครงงาน

โครงงานนี้เป็น Learning Dashboard สำหรับการทดลองในรายวิชา ENGSE203 Lab 02 โดยใช้ JavaScript สมัยใหม่ในการจัดการข้อมูลและแสดงผลบนหน้าเว็บ

ระบบสามารถโหลดข้อมูลจากไฟล์ JSON แบบ Asynchronous และนำข้อมูลมาแสดงเป็นรายการงานการเรียนรู้ พร้อมทั้งมีฟังก์ชันค้นหา กรองข้อมูล และแสดงสถานะของระบบ

## การติดตั้งและการรันโปรเจกต์

```bash
npm install
npm run check
npm run dev
```

## การ Build และ Preview

ใช้คำสั่งต่อไปนี้สำหรับสร้างไฟล์สำหรับ Production

```bash
npm run build
npm run preview
```

## หลักฐานการทดสอบ

### สถานะปกติ

ทดสอบการเปิดหน้าเว็บไซต์ตามปกติ ระบบสามารถโหลดข้อมูลและแสดงรายการงานการเรียนรู้ได้สำเร็จ

![ภาพการทดสอบสถานะปกติ](<../evidence/simple.png>)

### สถานะเกิดข้อผิดพลาด

ทดสอบระบบ Error State โดยเพิ่ม `?simulateError=1` ต่อท้าย URL

ตัวอย่าง

```text
https://nonthachai09.github.io/engse203-student-labs-68543210012-9/labs/week-02/?simulateError=1
```

เมื่อเปิด URL ดังกล่าว ระบบจะแสดงข้อความแจ้งข้อผิดพลาดแทนรายการข้อมูล เพื่อทดสอบการจัดการ Error State

![ภาพการทดสอบสถานะ Error](<../evidence/error.png>)

## โครงสร้างไฟล์

โครงสร้างไฟล์หลักของ Lab 02 มีดังนี้

## โครงสร้างไฟล์

```text
source/
├── public/
│   ├── data/
│   │   └── learning-tasks.json
│   ├── favicon.svg
│   └── icons.svg
│
├── scripts/
│   └── check-project.mjs
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── api.js
│   ├── main.js
│   ├── style.css
│   ├── ui.js
│   └── utils.js
│
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## ปัญหาที่พบและวิธีแก้ไข

ในการทำ Lab 02 ไม่พบปัญหาสำคัญที่ส่งผลต่อการทำงานของโปรเจกต์ 

## References & AI Assistance

### แหล่งข้อมูลที่ใช้

* เอกสารประกอบการเรียนและใบงาน ENGSE203 Lab 02

### การใช้ AI Assistance

- ChatGPT (OpenAI)