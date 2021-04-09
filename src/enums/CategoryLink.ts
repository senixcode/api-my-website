import {registerEnumType} from '@nestjs/graphql'
export enum CategoryLink {
    VIDEO = "video",
    IMAGE = "image",
    ICON = "icon"
}
registerEnumType(CategoryLink,{
    name:"CategoryLink",
    description:"selected category link"
})