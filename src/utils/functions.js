import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function generateSwaggerAppConfig(config,app) {
    const config = new DocumentBuilder()
    .setTitle(config.title)
    .setDescription(config.description)
    .setVersion(config.version)
    .addTag(config.tag)
    .build();

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api', app, document);
}


function emailLengthPercents(email,emailRandomLen) {
    return Math.floor((email * 100)  / emailRandomLen);
}
function makeEmail(vowels,consonents) {
    let email = "";
    let emailRandomLen = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < emailRandomLen; i++) {
        if (emailLengthPercents(email,emailRandomLen) <= 60) {
            email +=  vowels[Math.floor(Math.random() * vowels.length)]
            email +=  consonents[Math.floor(Math.random() * consonents.length)]
        }
        else if (emailLengthPercents(email,emailRandomLen) == 61) {
            email += '@';
        }
        else if (emailLengthPercents(email,emailRandomLen) <= 68 && emailLengthPercents(email,emailRandomLen > 64)) {
            email +=  vowels[Math.floor(Math.random() * vowels.length)]
            email +=  consonents[Math.floor(Math.random() * consonents.length)]
        }
        else if (emailLengthPercents(email,emailRandomLen) <= 71 && emailLengthPercents(email,emailRandomLen > 68)) {
            email += '.';
        }
        else if (emailLengthPercents(email,emailRandomLen) > 71) {
            email +=  vowels[Math.floor(Math.random() * vowels.length)]
            email +=  consonents[Math.floor(Math.random() * consonents.length)]
        }
    }
    return email;
}
function makeName(vowels,consonents) {
    let randomLen = Math.floor(Math.random() * 5) + 2;
    let name = "";
    for (let i = 0; i < randomLen; i++) {
        if (i % 2 == 0 && i <  6) {
            name += vowels[Math.floor(Math.random() * vowels.length)]
        } else {
            name += consonents[Math.floor(Math.random() * consonents.length)]
        }
    }
    return name;
}
function makePhoneNumber(numbers){
    let phone = "";
    for (let i = 0; i < 8; i++) {
        phone += numbers[Math.floor(Math.random() * numbers.length)]
     }
}
function loadUsers(len){
    let i = 0;
    let _users = [];
    let firstName,lastName,phone,email,sexe,password,role = "";
    let numbers = "0123456789"
    let vowels = "aeuioy";
    let consonents = "qwrtopsdfghjklzxcvbnm";
    let _sexe = ['Homme','Femme'];

    while (i < len) {
        // Phone
    phone = makePhoneNumber(numbers);

    //  Email
    email = makeEmail(vowels,consonents)
    
    firstName = makeName(vowels,consonents)
    // lastname
    lastName = makeName(vowels,consonents).toUpperCase()
    
    sexe = _sexe[Math.floor(Math.random() * 2)]

    password = "apiv1";

    role = 'Admin';

    _users.push({
        id: i.toString(),
        firstName,
        lastName,
        phone,
        email,
        sexe,
        password,
        role,
        createdAt: new Date().toISOString(),
        isArchived: false,
        deletedAt: null
    })
    i++;
    }
    return _users;
}

export default {
    generateSwaggerAppConfig
}