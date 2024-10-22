const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742845870";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254742845870,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_18_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjl0aTAxTnNBbnF1MDBHVHFRWEtEM3BNdUx6RUxJdmJvYWhEcGdXbTJiaGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNMNWpkZnhxU2lLQXM5dV92cE4wZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDExNjc3NWYtYzQ0OC00MGNjLWFiMjAtNGY3NzliMDE1ZjFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMjI3LFxuICAgICAgMjMyLFxuICAgICAgMTExLFxuICAgICAgMTgyLFxuICAgICAgMjEwLFxuICAgICAgMTQ4LFxuICAgICAgMTkzLFxuICAgICAgMSxcbiAgICAgIDE2MSxcbiAgICAgIDgyLFxuICAgICAgNTksXG4gICAgICAxMjEsXG4gICAgICAxMDgsXG4gICAgICAxNDYsXG4gICAgICAxNjIsXG4gICAgICAxOTEsXG4gICAgICA0OCxcbiAgICAgIDM5LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDEzMyxcbiAgICAgIDI1MCxcbiAgICAgIDIyNixcbiAgICAgIDE3LFxuICAgICAgNDIsXG4gICAgICAxMjgsXG4gICAgICA5LFxuICAgICAgMTM4LFxuICAgICAgNzQsXG4gICAgICAxMjcsXG4gICAgICA5OSxcbiAgICAgIDE3LFxuICAgICAgNjIsXG4gICAgICAxNDMsXG4gICAgICA3OSxcbiAgICAgIDEwOSxcbiAgICAgIDEzNyxcbiAgICAgIDI0OCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyRFpENThHTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQyODQ1ODcwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxODk0OTM2Mjk0NjEwMjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHRzcvQUdFSjJFMzdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRDF1dzlWUG9oQ2VRcm12V1B2NnExMkhsYy80cG8rOHl6aTN1UDFyRnpIUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXOEFzOUVhYXRVU0ZDTmRMMldYeDNSR2dZUVRQaS95Mk5NancvU3NhWVlERzFNSGFWVmNOdXRZN3NtcWRqN2JqdGxSaFVvK3RXVUVnTU5MM3h5N2RBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1SVBra0ZtVXZnTVpxaXlxVWl5aUJURmVKZjJ3V0ZBMmlBdW8rWk40L3VwZWF5c1VDSHJIeXRQeXN6M09tT1FjSFZqL0sxQy9pRm9WZ2tCcEhRa2podz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDI4NDU4NzA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MTAyNzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
