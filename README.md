# azael_ui-announcements-agency
ส่วนเสริมของทรัพยากร [azael_ui-announcements](https://fivem.azael.dev/digishop/azael-ui-announcements/) สำหรับการประกาศของหน่วยงานต่างๆ | FiveM (FXServer)

## ความต้องการ
 * [es_extended](https://github.com/esx-framework/es_extended) (v1.1, v1.2, v1-final, legacy)
 * [azael_ui-announcements](https://fivem.azael.dev/digishop/azael-ui-announcements/)

## ดาวน์โหลด

### ใช้ Git
```
cd resources
git clone https://github.com/Azael-Dev/azael_ui-announcements-agency [local]/[azael]/[ui]/azael_ui-announcements-agency
```

### ด้วยตนเอง
- ดาวน์โหลด https://github.com/Azael-Dev/azael_ui-announcements-agency/archive/refs/heads/master.zip
- วางไว้ใน `[local]/[azael]/[ui]`

## ติดตั้ง
- เพิ่มสิ่งนี้ไปยัง server.cfg ต่อจาก `ensure azael_ui-announcements` หรือ `start azael_ui-announcements`

```
ensure azael_ui-announcements-agency
```

- ไปที่ `azael_ui-announcements/html/style.css` และ ค้นหา
```css
.message-auto-announce,
.message-admin-announce {
    background-color: rgb(0, 0, 0, 0.5);
    padding: 0.438em 0.625em;
    margin-bottom: 0.313em;
    width: 100%;
}
```
- แก้ไขเป็น
```css
.message-auto-announce,
.message-admin-announce,
.message-police-announce,
.message-ambulance-announce,
.message-mechanic-announce {
    background-color: rgb(0, 0, 0, 0.5);
    padding: 0.438em 0.625em;
    margin-bottom: 0.313em;
    width: 100%;
}
```
- ค้นหา
```css
.message-auto-announce .head-auto-announce {
    color: #ffbb33;
}

.message-admin-announce .head-admin-announce {
    color: #ff4444;
}
```
- เพิ่มรหัสนี้ไว้ด้านล่าง
```css
.message-police-announce .head-police-announce {
    color: #33b5e5;
}

.message-ambulance-announce .head-ambulance-announce {
    color: #ff3ba0;
}

.message-mechanic-announce .head-mechanic-announce {
    color: #66ffd8;
}
```

## กฎหมาย
### ใบอนุญาต

azael_ui-announcements-agency - ประกาศหน่วยงาน สำหรับ [azael_ui-announcements](https://fivem.azael.dev/digishop/azael-ui-announcements/)

ลิขสิทธิ์ (C) Azael Dev - สงวนลิขสิทธิ์

- ห้ามใช้ชิ้นส่วนใดๆ ของซอฟต์แวร์นี้ในผลิตภัณฑ์ / บริการเชิงพาณิชย์
- ห้ามนำซอฟต์แวร์นี้ไปขายต่อ
- คุณจะต้องไม่จัดหาสิ่งอำนวยความสะดวกใด ๆ ในการติดตั้งซอฟต์แวร์นี้ในผลิตภัณฑ์ / บริการเชิงพาณิชย์
- หากคุณแจกจ่ายซอฟต์แวร์นี้ใหม่ คุณต้องเชื่อมโยงไปยังที่เก็บดั้งเดิมที่ [azael_ui-announcements-agency](https://github.com/Azael-Dev/azael_ui-announcements-agency)
- ลิขสิทธิ์นี้ควรปรากฏในทุกส่วนของรหัสโครงการ

License (ENG): https://github.com/Azael-Dev/azael_ui-announcements-agency/blob/master/LICENSE
