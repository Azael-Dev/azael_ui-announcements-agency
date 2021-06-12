let ESX = false;

if (GetResourceState(CONFIG.Routes.Extended.Resource) === 'started') {
    emit(CONFIG.Routes.Extended.Shared, (obj) => {ESX = obj;});
} else {
    console.log(`[^1${GetCurrentResourceName()}^7] Could not find dependency ${CONFIG.Routes.Extended.Resource} for resource ${GetCurrentResourceName()}`);
}

if (ESX) {
    const Wait = (ms) => new Promise(res => setTimeout(res, ms));
    const SendAnnouncements = async(id, style, header, message, delay) => {
        if (!id || !style || !header || !message || !delay) return;

        emitNet('azael_ui-announcements:sendAnnouncement', -1, true, id, style, header, message);
        await Wait(delay * 1000);   
        emitNet('azael_ui-announcements:sendAnnouncement', -1, false, id, style, header, message);
    };

    /* Police */
    if (CONFIG.Announcements.Agency.Police.Enable) {
        let PoliceID = 0;

        RegisterCommand(CONFIG.Announcements.Agency.Police.Command, (source, args, rawCommand) => {
            if (source === 0) return;

            const xPlayer = ESX.GetPlayerFromId(source);

            if (xPlayer.job.name !== CONFIG.Announcements.Agency.Police.Job || xPlayer.job.name === CONFIG.Announcements.Agency.Police.Job && xPlayer.job.grade < CONFIG.Announcements.Agency.Police.Grade) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'The job, grade or both are invalid.']});
            }

            const message = rawCommand.substring(CONFIG.Announcements.Agency.Police.Command.length + 1);

            if (message.length < 3) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'Your message needs to be longer than 3 characters.']});
            }

            PoliceID++;

            SendAnnouncements(`${CONFIG.Announcements.Agency.Police.Job}-${PoliceID}`, CONFIG.Announcements.Agency.Police.Style.replace('message-',''), CONFIG.Announcements.Agency.Police.Header, message, CONFIG.Announcements.Agency.Police.Delay);

            if (CONFIG.Logs.Send.Enable) {
                emit(CONFIG.Logs.Event.Name, CONFIG.Logs.Webhook.Name, `[${CONFIG.Announcements.Agency.Police.Header}] - ${message}`, xPlayer.source, '^5');
            }
        }, false);
    }

    /* Ambulance */
    if (CONFIG.Announcements.Agency.Ambulance.Enable) {
        let AmbulanceID = 0;

        RegisterCommand(CONFIG.Announcements.Agency.Ambulance.Command, (source, args, rawCommand) => {
            if (source === 0) return;

            const xPlayer = ESX.GetPlayerFromId(source);

            if (xPlayer.job.name !== CONFIG.Announcements.Agency.Ambulance.Job || xPlayer.job.name === CONFIG.Announcements.Agency.Ambulance.Job && xPlayer.job.grade < CONFIG.Announcements.Agency.Ambulance.Grade) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'The job, grade or both are invalid.']});
            }

            const message = rawCommand.substring(CONFIG.Announcements.Agency.Ambulance.Command.length + 1);

            if (message.length < 3) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'Your message needs to be longer than 3 characters.']});
            }

            AmbulanceID++;

            SendAnnouncements(`${CONFIG.Announcements.Agency.Ambulance.Job}-${AmbulanceID}`, CONFIG.Announcements.Agency.Ambulance.Style.replace('message-',''), CONFIG.Announcements.Agency.Ambulance.Header, message, CONFIG.Announcements.Agency.Ambulance.Delay);

            if (CONFIG.Logs.Send.Enable) {
                emit(CONFIG.Logs.Event.Name, CONFIG.Logs.Webhook.Name, `[${CONFIG.Announcements.Agency.Ambulance.Header}] - ${message}`, xPlayer.source, '^9');
            }
        }, false);
    }

    /* Mechanic */
    if (CONFIG.Announcements.Agency.Mechanic.Enable) {
        let MechanicID = 0;

        RegisterCommand(CONFIG.Announcements.Agency.Mechanic.Command, (source, args, rawCommand) => {
            if (source === 0) return;

            const xPlayer = ESX.GetPlayerFromId(source);

            if (xPlayer.job.name !== CONFIG.Announcements.Agency.Mechanic.Job || xPlayer.job.name === CONFIG.Announcements.Agency.Mechanic.Job && xPlayer.job.grade < CONFIG.Announcements.Agency.Mechanic.Grade) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'The job, grade or both are invalid.']});
            }

            const message = rawCommand.substring(CONFIG.Announcements.Agency.Mechanic.Command.length + 1);

            if (message.length < 3) {
                return emitNet('chat:addMessage', xPlayer.source, {color: [255, 0, 0], multiline: true, args: ['System', 'Your message needs to be longer than 3 characters.']});
            }

            MechanicID++;

            SendAnnouncements(`${CONFIG.Announcements.Agency.Mechanic.Job}-${MechanicID}`, CONFIG.Announcements.Agency.Mechanic.Style.replace('message-',''), CONFIG.Announcements.Agency.Mechanic.Header, message, CONFIG.Announcements.Agency.Mechanic.Delay);

            if (CONFIG.Logs.Send.Enable) {
                emit(CONFIG.Logs.Event.Name, CONFIG.Logs.Webhook.Name, `[${CONFIG.Announcements.Agency.Mechanic.Header}] - ${message}`, xPlayer.source, '^3');
            }
        }, false);
    }
}
