import {registerEnumType} from '@nestjs/graphql'
export enum Language {
    EN = "en",
    ES = "es"
}
registerEnumType(Language,{
    name:"Language",
    description:"selected languages"
})