# ENGSE203 LAB01 

## ข้อมูลนักศึกษา

- ชื่อ-นามสกุล: นนทชัย ไทยตัน
- รหัสนักศึกษา: 68543210012-9

## Environment ที่ใช้

- ระบบปฏิบัติการ: Windows 10 + WSL 2 
- Development Environment: Visual Studio Code + WSL
- Node.js Version: v24.18.0

## วิธีติดตั้งและรันโปรแกรม

ติดตั้ง package:

```bash
npm install
npm run start
```

## หลักฐานการรันโปรแกรม

![ผลลัพธ์การรันโปรแกรม](result.png)

## ปัญหาที่พบและวิธีแก้ไข
- เริ่มต้นติดตั้ง WSL บนไดรฟ์ C: ซึ่งมีพื้นที่จำกัด
วิธีแก้ไข
- ทำการย้าย Ubuntu WSL ไปยังไดรฟ์ D: เพื่อเพิ่มพื้นที่ใช้งาน และใช้งานผ่าน WSL 2 ต่อไป

## References & AI Assistance

- Source / Documentation: https://github.com/se-rmutl/engse203-lab/tree/main/labs/week-01-developer-environment-git-github
- ใช้ AI เพื่อช่วยทำความเข้าใจการติดตั้ง WSL 2, การตั้งค่า Git, SSH และการเตรียม    Development Environment
