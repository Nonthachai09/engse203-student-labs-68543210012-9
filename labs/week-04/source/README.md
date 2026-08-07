# ENGSE203 LAB 4 — Student Evidence README

## ผู้จัดทำ

- ชื่อ–นามสกุล: นนทชัย ไทยตัน
- รหัสนักศึกษา: 68543210012-9
- Section: SEC 2

## URLs

- Repository: https://github.com/Nonthachai09/engse203-student-labs-68543210012-9.git
- Pull Request: 
- GitHub Pages: 

## Component Tree

```text
App (State Owner)
├── AppHeader
├── SummaryPanel (summary)
├── RequestForm (onAddRequest)
├── FilterBar (value, onFilterChange)
└── RequestList (requests, onDeleteRequest)
    └── RequestCard (request, onDeleteRequest)
```

## Setup และ Run

```bash
nvm use
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## State / Props / Callback Explanation

- App เป็นเจ้าของ state ของ requests และ statusFilter เพราะเป็นข้อมูลที่หลาย Component ใช้ร่วมกัน
- RequestForm เป็นเจ้าของ state ของข้อมูลในฟอร์มระหว่างที่ผู้ใช้กำลังกรอก
- App ส่งข้อมูล (props) ลงไปยัง SummaryPanel เพื่อแสดงสรุปจำนวนคำร้อง
- App ส่ง requests และ onDeleteRequest ไปยัง RequestList เพื่อแสดงรายการและลบคำร้อง
- App ส่ง statusFilter และ onFilterChange ไปยัง FilterBar เพื่อเปลี่ยนตัวกรอง
- App ส่ง onAddRequest ไปยัง RequestForm เพื่อเพิ่มคำร้องใหม่
- เมื่อผู้ใช้เพิ่มคำร้อง RequestForm จะเรียก callback onAddRequest ส่งข้อมูลกลับไปยัง App
- เมื่อผู้ใช้เปลี่ยนตัวกรอง FilterBar จะเรียก callback onFilterChange ส่งค่ากลับไปยัง App
- เมื่อผู้ใช้กดลบคำร้อง RequestCard จะเรียก callback onDeleteRequest ส่ง id ของคำร้องกลับไปยัง App

## Test Evidence

| Test ID | Actual Result | Pass/Fail | Evidence/Screenshot |
|---|---|---|---|
| TC-01 Initial | หน้าเว็บเริ่มต้นโหลดสำเร็จโดยมีรายการค่าเริ่มต้น | Pass | evidence/ |
| TC-02 Controlled input | ช่องกรอกข้อมูลแสดงค่าตรงกับที่ผู้ใช้พิมพ์ และสามารถแก้ไขข้อมูลได้ถูกต้อง | Pass | evidence/ |
| TC-03 Invalid | ระบบไม่อนุญาตให้เพิ่มข้อมูลที่ว่างหรือไม่ถูกต้อง และแสดงข้อความแจ้งเตือน | Pass | evidence/ |
| TC-04 Valid add | เมื่อกรอกข้อมูลถูกต้องและกดเพิ่ม รายการใหม่ถูกเพิ่มลงในรายการสำเร็จ | Pass | evidence/ |
| TC-05 Filter | การเลือกตัวกรอง แสดงเฉพาะรายการที่ตรงกับเงื่อนไข | Pass | evidence/ |
| TC-06 All | เมื่อเลือกตัวกรอง All ระบบแสดงรายการทั้งหมดได้ถูกต้อง | Pass | evidence/ |
| TC-07 Empty | เมื่อไม่มีรายการในระบบ จะแสดงข้อความหรือหน้าสถานะว่าไม่มีข้อมูล | Pass | evidence/ |
| TC-08 Delete | สามารถลบรายการที่เลือกได้สำเร็จ และรายการหายจากหน้าจอ | Pass | evidence/ |
| TC-09 Mobile | หน้าเว็บแสดงผลได้ถูกต้องบนหน้าจอมือถือ โดยไม่เกิดปัญหาการจัดวาง | Pass | evidence/ |
| TC-10 Keyboard | ใช้ Tab เลื่อน input ได้ | Pass | evidence/ |
| TC-11 Build | คำสั่ง npm run build ทำงานสำเร็จโดยไม่พบข้อผิดพลาด | Pass | evidence/ |
| TC-12 Pages | เว็บไซต์ถูกเผยแพร่บน GitHub Pages สำเร็จและสามารถเข้าใช้งานได้ | Pass | evidence/ |

## Screenshots

- Desktop: `evidence/desktop.png`
- Mobile 375px: `evidence/mobile-375.png`
- Validation/empty state: `evidence/invalid-state.png`, `evidence/empty-state.png`

## Week 03 → Week 04 Reflection

DOM Mutation ใน Week 03 ต้องมาคอยดักจับ Event แล้วจับคู่กับ element แต่ละตัวใน DOM แล้วจึงแก้ DOM (เช่น querySelector) ซึ่งซับซ้อน แต่ State-driven UI ของ React ใน Week 04 ทำให้เราสนใจแค่ข้อมูล (State) พอ State เปลี่ยน React จะอัปเดต UI ให้เราเองอัตโนมัติ ทำให้เขียนง่ายขึ้น เป็นระเบียบขึ้น

## AI / External Resource Disclosure

ระบุเครื่องมือหรือแหล่งที่ใช้, prompt/คำถามสำคัญ, ส่วนที่นำมาปรับ และวิธีที่ตรวจสอบความถูกต้อง หากไม่ได้ใช้ให้เขียนว่า “ไม่ได้ใช้”

