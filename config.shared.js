//===== FiveM Script =========================================
//= UI - Agency Announcements (Add-on)
//===== Developed By: ========================================
//= Azael Dev
//===== Website: =============================================
//= https://www.azael.dev
//===== License: =============================================
//= Copyright (C) Azael Dev - All Rights Reserved
//= You are not allowed to sell this script
//============================================================ 

/* โปรดหลีกเลี่ยงการ Restart ทรัพยากร ในขณะที่เซิร์ฟเวอร์เปิดให้บริการจริง */

CONFIG = {}

CONFIG.Routes = {                                           // เส้นทางกิจกรรมของทรัพยากร
    Extended: {                                             // ทรัพยากร es_extended
        Resource: 'es_extended',                            // ชื่อของทรัพยากร
        Shared: 'esx:getSharedObject'                       // ชื่อกิจกรรมที่ใช้ในการรับข้อมูลหรือฟังก์ชั่นต่างๆ
    }
};

CONFIG.Announcements = {                                    // ประกาศ
    Agency: {                                               // หน่วยงาน
        Police: {                                           // ตำรวจ
            Enable: true,                                   // เปิดใช้งาน ประกาศ สำหรับหน่วยงาน ตำรวจ ( true เท่ากับ เปิดใช้งาน | false เท่ากับ ปิดใช้งาน)
            Job: 'police',                                  // ชื่อหน่วยงาน
            Grade: 0,                                       // ตั้งเต่ระดับ (ที่สามารถใช่คำสั่งได้)
            Command: 'anmcop',                              // คำสั่งที่ใช้ปรกาศ
            Header: 'หน่วยงานตำรวจ',                         // หัวข้อในการประกาศ
            Style: 'message-police-announce',               // Styles - CSS ที่ใช้งาน (แก้ไข Style ได้ที่ทรัพยากร azael_ui-announcements/html/style.css)
            Delay: 15                                       // ความล่าช้าในการลบข้อความ ประกาศ (วินาที)
        },

        Ambulance: {                                        // หมอ
            Enable: true,                                   // เปิดใช้งาน ประกาศ สำหรับหน่วยงาน หมอ ( true เท่ากับ เปิดใช้งาน | false เท่ากับ ปิดใช้งาน)
            Job: 'ambulance',                               // ชื่อหน่วยงาน
            Grade: 0,                                       // ตั้งเต่ระดับ (ที่สามารถใช่คำสั่งได้)
            Command: 'anmdoc',                              // คำสั่งที่ใช้ปรกาศ
            Header: 'หน่วยงานหมอ',                           // หัวข้อในการประกาศ
            Style: 'message-ambulance-announce',            // Styles - CSS ที่ใช้งาน (แก้ไข Style ได้ที่ทรัพยากร azael_ui-announcements/html/style.css)
            Delay: 15                                       // ความล่าช้าในการลบข้อความ ประกาศ (วินาที)
        },

        Mechanic: {                                         // ช่าง
            Enable: true,                                   // เปิดใช้งาน ประกาศ สำหรับหน่วยงาน ช่าง ( true เท่ากับ เปิดใช้งาน | false เท่ากับ ปิดใช้งาน)
            Job: 'mechanic',                                // ชื่อหน่วยงาน
            Grade: 0,                                       // ตั้งเต่ระดับ (ที่สามารถใช่คำสั่งได้)
            Command: 'anmmec',                              // คำสั่งที่ใช้ปรกาศ
            Header: 'หน่วยงานช่าง',                           // หัวข้อในการประกาศ
            Style: 'message-mechanic-announce',             // Styles - CSS ที่ใช้งาน (แก้ไข Style ได้ที่ทรัพยากร azael_ui-announcements/html/style.css)
            Delay: 15                                       // ความล่าช้าในการลบข้อความ ประกาศ (วินาที)
        }
    }
};

CONFIG.Logs = {                                             // บันทึก (สำหรับทรัพยากร azael_dc-serverlogs)
    Send: {                                                 // ส่งบันทึก
        Enable: true                                        // เปิดใช้งาน ส่งบันทึก (true เท่ากับ เปิดใช้งาน | false เท่ากับ ปิดใช้งาน)
    },

    Event: {                                                // เหตุการณ์
        Name: 'azael_dc-serverlogs:sendToDiscord'           // ชื่อของเหตุการณ์ (เวอร์ชันเก่าจะใช้ azael_discordlogs:sendToDiscord)
    },

    Webhook: {                                              // Webhook
        Name: 'AnnounceAgency'                              // ชื่อของ Webhook ที่กำหนดไว้ในการตั้งค่า Webhook ของทรัพยากร azael_dc-serverlogs
    }
};
