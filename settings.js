const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['2349019406102'] 
global.ownername = "☞⌜ JAY⌝☜" 
global.ytname = "YT: Kermhacktools" 
global.socialm = "GitHub: Kgtech-cmr" 
global.location = "Nigeria , Enugu" 

//bot bomdy 
global.ownernomer = "2349019406102" 
global.premium = ['2349019406102'] 
global.botname = '✫𝕂𝔼ℝ𝕄 𝕄𝔻 𝕍3✫' 
global.linkz = "https://chat.whatsapp.com/LNFrAyp7ZntFYDtiPI3H0a" 
global.websitex = "https://www.helacloud.ga" 
global.botscript = 'https://github.com/DerryJay/KERM_MD-v3' 
global.themeemoji = "🥷🏽" 
global.packname = "BRAND PRODUCT OF ☞⌜ JAY TECH⌝☜" 
global.author = "☞⌜ JAY⌝☜" 
global.wm = "☞⌜ JAY⌝☜" 

// Other
global.sessionName = 'put your session here'
global.prefa = ['null','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Yess, Success! 😆',
    admin: 'This command is for group admins only!',
    botAdmin: 'This command is for bot admin only!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This command is for my owner only',
    group: 'This command works only in groups!!',
    private: 'This command works in private chats only!',
    bot: 'For bot only!',
    wait: 'Wait.....',
    linkm: 'Where is the link ',
    endLimit: 'You have reached your limit for the day, It resets every 12 hours so wait.',
    nsfw: 'NSFW isn't activated.',
}

//media target
global.thum = fs.readFileSync("./KermMedia/theme/kermmdv3.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./KermMedia/theme/kermmdv3.jpg") //ur logo pic
global.err4r = fs.readFileSync("./KermMedia/theme/kermmdv3.jpg") //ur error pic
global.thumb = fs.readFileSync("./KermMedia/theme/kermmdv3.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
