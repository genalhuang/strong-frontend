import { prop } from '@typegoose/typegoose'

export  class Post {
    @prop()
    title: string
    @prop()
    content: string
}

