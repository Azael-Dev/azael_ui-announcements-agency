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

setImmediate(() => {
    /* Police */
    emit('chat:addSuggestion', `/${CONFIG.Announcements.Agency.Police.Command}`, 'Police - Announcements', [
      {name: 'Message', help: "Your message"}
    ]);

    /* Ambulance */
    emit('chat:addSuggestion', `/${CONFIG.Announcements.Agency.Ambulance.Command}`, 'Ambulance - Announcements', [
        {name: 'Message', help: "Your message"}
    ]);

    /* Mechanic */
    emit('chat:addSuggestion', `/${CONFIG.Announcements.Agency.Mechanic.Command}`, 'Mechanic - Announcements', [
        {name: 'Message', help: "Your message"}
    ]);
});
