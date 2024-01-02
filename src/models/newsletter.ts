import { Schema, model, models } from "mongoose";

const NewsletterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: true
    },
    website: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    }
},
    {

        versionKey: false,
        timestamps: {
            createdAt: 'created_on',
            updatedAt: 'updated_on'
        },
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000,
        },
    })


const Newsletter = models.Newsletter || model('Newsletter', NewsletterSchema);

export default Newsletter;